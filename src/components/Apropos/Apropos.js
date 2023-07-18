import { Header } from "../../Sections";
import { Banner_apropos } from "../../components/index";
import Collapse from "../Collapse/Collapse";
import { collapsesList } from "../../datas/collapsesData";

const Apropos = () => {
    const collapses = collapsesList.map((collapse) => {
        return <Collapse key={collapse.id} title={collapse.title} text={collapse.text}/>
    });
    return(
        <>
        <Header />
        <div> <Banner_apropos> </Banner_apropos> </div>
        <div className="dropdowns">
            {/* <Collapse>
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
            </Collapse> */}
            {collapses}
        </div> 
        </>
    );
}

export default Apropos;