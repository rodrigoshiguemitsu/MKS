import { ContadorProvider } from '../Contexto/ContextoCount';

import Corpo from "../components/Body"
import Footer from "../components/Footer"
import Cabecalho from "../components/Header"





function Home(){
    return(
        <div>
            <ContadorProvider>
            <Cabecalho/>
            <Corpo/>
            <Footer/>
            </ContadorProvider>
       
        </div>
    )
}
export default Home