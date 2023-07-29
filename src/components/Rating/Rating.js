import './Rating.css';
import {RiStarFill, RiStarLine} from 'react-icons/ri';

const Rating = (props) => {

  return (
    <>
    {
      props.scale <= props.rating ? <RiStarFill style={{color: 'var(--color--primary)'}}/> : <RiStarLine />
    }
    
    </>
  )
}

export default Rating