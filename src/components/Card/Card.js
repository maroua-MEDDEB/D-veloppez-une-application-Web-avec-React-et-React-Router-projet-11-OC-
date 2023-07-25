import './Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <>
    <div className='galorie_item'>
      <Link to="/logement">
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