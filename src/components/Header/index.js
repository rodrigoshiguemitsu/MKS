import { useContador } from '../../Contexto/ContextoCount';
import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import './Header.scss'



function Cabecalho() {

    const { contador } = useContador()
    const [produto, setProduto] = useState([])

    useEffect(() => {
        function handleRecuperarProduto() {

            const produtoRecuperado = localStorage.getItem('produtoSelecionado')
            console.log(produtoRecuperado)

            if (produtoRecuperado) {
                const produto = JSON.parse(produtoRecuperado)
                console.log('Produto recuperado do localStorage', produto)
                setProduto(produto)
                console.log(produto)

            } else {
                console.log('Nenhum produto foi encontrado no localStorage.')
            }
        }
        handleRecuperarProduto()
    }, [produto])

    const [carrinhoAberto, setCarrinhoAberto] = useState(false)

    const abrirCarrinho = () => {
        setCarrinhoAberto(!carrinhoAberto)
    }

    const [contadorItem, setContadorItem] = useState(1)

    const contadorPositivo = (id) => {
        setContadorItem(preveContadores => ({
            ...preveContadores,
            [id]: (preveContadores[id] || 1) + 1
        }))
    }

    const contadorNegativo = (id) => {
        setContadorItem(preveContadores => ({
            ...preveContadores,
            [id]: Math.max((preveContadores[id] || 2) - 1, 1)
        }))
    }

    const valorTotal = produto.reduce((total, itemProduto) => {
        // Calcula o subtotal de cada produto
        const subtotal = (itemProduto.price * contadorItem[itemProduto.id]) || itemProduto.price;
    
        // Soma o subtotal ao total
        return total + parseFloat(subtotal);
    }, 0); // Inicializa o total como zero



    return (
        <header id='cabecalhoMKS'>

            <div className='nomeMKS1'>
                <h1>MKS</h1>
                <p id='sistemasCabecalho'>sistemas</p>
            </div>
            <div className='nomeMKS2'>
                <div id='buttonCar'>
                    <button
                        onClick={abrirCarrinho}
                    >
                        <TiShoppingCart id="iconCar" />
                    </button>
                    <input
                        value={contador}
                        disabled
                    />


                </div>

                {carrinhoAberto && (

                    <div id="carrinhoLateral">
                        <div id="tituloCarrinho">

                            <h2>Carrinho<br />
                                de compras</h2><br />

                            <AiOutlineClose id="fecharCarrinho"
                                onClick={abrirCarrinho} />
                        </div>
                        <div id="cardProdutoHeader">

                            {produto.map((itemProduto) => {
                                return (
                                    <div key={itemProduto.id}
                                        id="itemCardProdutoHeader"
                                    >
                                        <p id="imagemId"><img src={itemProduto.photo} alt='imagem' /></p>
                                        <p id="descProduto">{itemProduto.name}</p>

                                        <div id="contadorDivPrincipal">
                                            <p>Qtd:</p>
                                            <div id="contadorMaisMenos">
                                                <button
                                                    onClick={() => contadorNegativo(itemProduto.id)}>-
                                                </button>
                                                <p id="numContador">{contadorItem[itemProduto.id] || 1}</p>
                                                <button
                                                    onClick={() => contadorPositivo(itemProduto.id)}>+</button>
                                            </div>
                                        </div>
                                        <p id="priceCardContador">R${
                                            (contadorItem[itemProduto.id] !== undefined ? (
                                                itemProduto.price * contadorItem[itemProduto.id]).toFixed(2) : itemProduto.price
                                            )}</p>

                                    </div>
                                )
                            })}
                        </div>
                        <div id="valorTotalHeader">
                            <p>Total</p>
                            <p id="p2">R${valorTotal.toFixed(2)}</p>
                        </div>
                        <button id="finalizarCompraHeader">
                            <p>Finalizar Compra</p>
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Cabecalho