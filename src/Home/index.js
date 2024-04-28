import { ContadorProvider } from '../Contexto/ContextoCount';

import Corpo from "../components/Body"
import Footer from "../components/Footer"
import Cabecalho from "../components/Header"





function Home(){
    return(
        <div>
        
            <Cabecalho/>
            <Corpo/>
            <Footer/>
       
        </div>
    )
}
export default Home