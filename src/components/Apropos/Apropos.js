import { Footer, Header } from "../../Sections/index";
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
            {collapses}
        </div> 
        <Footer />
        </>
    );
}

export default Apropos;