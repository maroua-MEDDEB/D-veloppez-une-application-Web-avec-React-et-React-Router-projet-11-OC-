import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // transmettre l'id du logement d'une carte sur l'accueil vers la page logement.
  let locationDetails=`/logement/${props.id}`;

  return (
    <>
    <div className='galorie_item'>
      <Link to={locationDetails}> 
        <div className='card_img'>
          <img src={props.cover} alt=''/>
        </div>
        <div className='card_text'>
          {props.title}
        </div>
      </Link>
    </div>
    </>
  )
}

export default Card