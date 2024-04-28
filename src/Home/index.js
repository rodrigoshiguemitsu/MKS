import { ContadorProvider } from '../Contexto/ContextoCount';

import Corpo from "../components/Body"
import Footer from "../components/Footer"
import Cabecalho from "../components/Header"





function Home(){
    return(
        <ContadorProvider>
            <Cabecalho/>
            <Corpo/>
            <Footer/>
        </ContadorProvider>
    )
}
export default Home