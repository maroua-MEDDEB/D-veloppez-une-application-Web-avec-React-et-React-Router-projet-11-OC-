import { Link } from 'react-router-dom';

const Card = (props) => {
  // transmettre l'id du logement d'une carte sur l'accueil vers la page logement.
  let locationDetails=`/logement/${props.id}`;

  return (
    <>
    <div className='grid_item'>
      <div className='the_item'>
        <Link to={locationDetails}> 
          <div className='the_item_img'>
            <img src={props.cover} alt=''/>
          </div>
          <div className='the_item_text'>
            {props.title}
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Card