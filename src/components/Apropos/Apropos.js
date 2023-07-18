import { Header } from "../../Sections";
import { Banner_apropos } from "../../components/index";
import Collapse from "../Collapse/Collapse";


const Apropos = () => {
    return(
        <>
        <Header />
        <div> <Banner_apropos> </Banner_apropos> </div>
        <div className="dropDownLarge">
            <Collapse>
                <span>Fiabilité</span>
            </Collapse>

            <Collapse>
                <span>Respect</span>
            </Collapse>
        
            <Collapse>
                <span>Service</span>
            </Collapse>
    
            <Collapse>
                <span>Sécurité</span>
            </Collapse>
        </div> 
        </>
    );
}

export default Apropos;