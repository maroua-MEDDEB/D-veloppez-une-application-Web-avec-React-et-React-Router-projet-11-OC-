import './Collapse.css';
import { RiArrowDownSLine } from "react-icons/ri";


//collapse fermé
const Collapse = (props) =>  {
  return (
    <> 
    <div className="collapse_primary">
        <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">
            <span> {props.title} </span>
            <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>
        <div className="collapse_text">
          {props.text}
        </div> 
    </div>
    </>
   
  )
}

export default Collapse