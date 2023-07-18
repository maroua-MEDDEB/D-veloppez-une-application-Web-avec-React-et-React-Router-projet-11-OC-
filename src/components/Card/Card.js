import './Card.css';

function Card(props) {
  return (
    <>
    <div className='galorie_item'>
      <div className='card_img'>
        <img src={props.cover} alt=''/>
      </div>
      <div className='card_text'>
        {props.title}
      </div>
    </div>
 
 
    </>
  )
}

export default Card