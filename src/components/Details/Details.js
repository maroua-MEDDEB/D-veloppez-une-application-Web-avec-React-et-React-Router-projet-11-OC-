import { useEffect, useState } from 'react';
import './Details.css';
import { Tag } from '../../components/index';
import { Star_Favorite } from '../../components/index';

const Details = (props) => {

  const tab = props.tags.map((tag, index) => {
    return <Tag key={index} index = {index}  />
  });

  // const[color, setColor] = useState(false);
  // const isColor = () => { setColor(true)}; // fonction qui affiche le une star coloré

  return (
    <>
    <div className='details'>
      <div className='details_localisation'>
        <div className='title'>{props.title}</div>
        <div className='location'>{props.location}</div>
        <div className='tags'>
          {tab}
        </div>
      </div>

      <div className='details_host'>
        <div className='profil'>
          <div className='profil_name'>{props.hostName}</div>
          <div className='profi_picture'>
            <img src={props.hostPicture} alt='' />
          </div>
        </div>
        <div className='host_icon'>
          <span> {props.nmbrRating}</span>
          <Star_Favorite></Star_Favorite>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Details