import './Collapse.css';
import { RiArrowDownSLine } from "react-icons/ri";
import {RiArrowDropUpLine} from "react-icons/ri"
import { useState } from "react";

//collapse fermé
const Collapse = (props) =>  {

  //définisser notre état par défaut
  const[open, setOpen] = useState(false);

  const displayCollapseText = () => { setOpen(true)}; // fonction qui affiche le textDeCollpase
  const unDisplayCollapseText = () => { setOpen(false) } ;// fonction qui désaffiche le textDeCollpase

  return (
    <> 
    <div className="collapse_default">
    {
      //si l'état du bouton n'est pas ouvert (fermé)   alors on affiche le bouton avec icon downSLine
      (!open) ?
        <button  className="bouttonDown" type="button" onClick={displayCollapseText}>
          <span> {props.title} </span>
          <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>
      :
      //si non alors on affiche le bouton avec icon dropUpLine
      <>
      <button  className="bouttonUp" type="button" onClick={unDisplayCollapseText}>
        <span> {props.title} </span>
        <RiArrowDropUpLine style={{'color':'var(--color--light)'}}/>
      </button>
      <div className="collapse_text">
        {props.text} 
      </div> 
      </>
    } 
  </div>
  </>
  )
}

//collapse qui affiche la descrition du logement
const CollapseDescription = (props) =>  {

  //définisser notre état par défaut
  const[open, setOpen] = useState(false);

  const displayCollapseText = () => { setOpen(true)}; // fonction qui affiche le textDeCollpase
  const unDisplayCollapseText = () => { setOpen(false) } ;// fonction qui désaffiche le textDeCollpase

  return (
    <> 
    <div className="collapse_default">
    {
      //si l'état du bouton n'est pas ouvert (fermé)   alors on affiche le bouton avec icon downSLine
      (!open) ?
        <button  className="bouttonDown" type="button" onClick={displayCollapseText}>
          <span> Description </span>
          <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>
      :
      //si non alors on affiche le bouton avec icon dropUpLine
      <>
      <button  className="bouttonUp" type="button" onClick={unDisplayCollapseText}>
        <span> Description </span>
        <RiArrowDropUpLine style={{'color':'var(--color--light)'}}/>
      </button>
      <div className="collapse_text">
        {props.description} 
      </div> 
      </>
    } 
  </div>
  </>
  )
}

//collapse qui affiche la descrition du logement
const CollapseEquipments = (props) =>  {

  //définisser notre état par défaut
  const[open, setOpen] = useState(false);

  const displayCollapseText = () => { setOpen(true)}; // fonction qui affiche le textDeCollpase
  const unDisplayCollapseText = () => { setOpen(false) } ;// fonction qui désaffiche le textDeCollpase

  return (
    <> 
    <div className="collapse_default">
    {
      //si l'état du bouton n'est pas ouvert (fermé)   alors on affiche le bouton avec icon downSLine
      (!open) ?
        <button  className="bouttonDown" type="button" onClick={displayCollapseText}>
          <span> Equipements </span>
          <RiArrowDownSLine style={{'color':'var(--color--light)'}}/>
        </button>
      :
      //si non alors on affiche le bouton avec icon dropUpLine
      <>
      <button  className="bouttonUp" type="button" onClick={unDisplayCollapseText}>
        <span> Equipements </span>
        <RiArrowDropUpLine style={{'color':'var(--color--light)'}}/>
      </button>
      <div className="collapse_text" style={{display:'flex', flexDirection:'column', height:'100px'}}>
        {props.equipments} 
      </div> 
      </>
    } 
  </div>
  </>
  )
}

export default Collapse 
export {CollapseDescription}
export {CollapseEquipments}