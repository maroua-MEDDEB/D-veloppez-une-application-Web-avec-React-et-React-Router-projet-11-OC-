import { Footer, Header } from '../../Sections/index';
import {Accueil_Container} from '../index';

function Accueil() {
    return(
        <>
        <Header />
        <Accueil_Container background='{--color--light}'/>
        <Footer />
        </>
  
    );
}

export default Accueil;