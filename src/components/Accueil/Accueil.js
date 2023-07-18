import { Footer, Header } from '../../Sections';
import {Accueil_Container} from '../index';

function Accueil(props) {
    return(
        <>
        <Header />
        <Accueil_Container background='{--color--light}'/>
        <Footer />
        </>
  
    );
}

export default Accueil;