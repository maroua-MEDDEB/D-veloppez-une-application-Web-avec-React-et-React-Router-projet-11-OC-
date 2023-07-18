import './Collapse.css';
import { RiArrowDownSLine } from "react-icons/ri";


//collapse fermé
const Collapse = (props) =>  {
  return (
    <> 
    <div className="collapse_primary">
        <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">
            <div> {props.children} </div>
            <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>
    </div>
    </>
   
  )
}

export default Collapse