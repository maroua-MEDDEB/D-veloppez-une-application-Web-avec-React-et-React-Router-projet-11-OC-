import {appartList} from '../../datas/data';

function Card() {
  return (
    <>
    <div className='card_img'>
        <img src= {appartList.map((appart) => (
            <li key={appart.id}>{appart.cover}</li>
            ))} 
        alt='' />    
    </div>
    <ul>
        {appartList.map((appart) => (
            <li key={appart.id}>{appart.title}</li>
        ))}
    </ul>   
    </>
  )
}

export default Card