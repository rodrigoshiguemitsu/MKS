import{useState, useEffect} from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { useContador } from '../../Contexto/ContextoCount';
import apiLocal from '../../Services/api'
import './Body.scss'


function Corpo(){

    const {incrementarContador} = useContador()
    const [produtoSelecionado,setProdutoSelecionado]=useState([])
    const [gravarProduto,setGravarProduto] = useState([{}])

    useEffect(()=>{
        async function handleMKS(){
            const respostaMKS = await apiLocal.get('/products',{
                params:{
                    page:1,
                    rows:6,
                    sortBy:'id',
                    orderBy:'DESC'
                }
            })
            setGravarProduto(respostaMKS.data.products)
           
            console.log(respostaMKS.data.products)
        }handleMKS()
    },[])

    const EnviarLocalStorage=(item)=>{
        try {
            const produtoExistente = produtoSelecionado.find(produto => produto.id === item.id)
            if(!produtoExistente){
            
            const produtoAtualizado = [...produtoSelecionado,item];
            setProdutoSelecionado(produtoAtualizado);
            
            localStorage.setItem('produtoSelecionado', JSON.stringify(produtoAtualizado))
            console.log('produto salvo no localStorage',item)
            incrementarContador()
        }else{
            alert('Produto já esta selecionado')
        }
    } catch (error) {
            console.error('Erro ao salvar o produto no localStorage',error)
        }
    }

    return(
        <body>
            <section id='bodyCards'>
                {gravarProduto.map((item)=>{
                    return(
                        <div  id='alturaCard'>
                            
                            <img
                            src={item.photo} alt='imagens'/>
                            
                            
                            <div id='nomePreco'>
                            <p>{item.name}</p>
                            <h2>
                               R${item.price}
                            </h2>
                            </div>
                            <div id='descProduto'>
                                <p>Redesigned from scratch and completely revised</p>
                            </div>
                            <button onClick={()=>EnviarLocalStorage(item)} id='botaoComprar'>
                            <FiShoppingBag id='bagComprar' /><p>COMPRAR</p>
                            </button>
                        </div>
                    )
                })

                }
            </section>
        </body>
    )
}
export default Corpo