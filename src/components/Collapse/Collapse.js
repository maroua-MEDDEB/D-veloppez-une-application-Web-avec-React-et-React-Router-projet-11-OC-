import './Collapse.css';
import { RiArrowDownSLine } from "react-icons/ri";
import {RiArrowDropUpLine} from "react-icons/ri"
import { useState } from "react";

//collapse fermé
const Collapse = (props) =>  {

  //définisser notre état par défaut
  const[open, setOpen] = useState(false);

  const displayCollapseText = () => {
    setOpen(!open);
    
  }

  return (
    <> 
    <div className="collapse_default">
        <button  className="bouttonDown" type="button" onClick={displayCollapseText}>
          <span> {props.title} </span>
          <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>

        {open &&(
          <>
          <button  className="bouttonUp" type="button">
            <span> {props.title} </span>
            <RiArrowDropUpLine style={{'color':'var(--color--light)'}}/>
          </button>
          <div className="collapse_text">
            {props.text}
          </div> 
          </>
          
        )}

       
    </div>
    </>
  )
}

export default Collapse