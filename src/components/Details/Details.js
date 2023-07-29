import { useEffect, useState } from 'react';
import './Details.css';
import { Tag } from '../../components/index';
import { Rating } from '../../components/index';

const Details = (props) => {

  //tabbleau des tags
  const tab = props.tags.map((item, index) => (
    <Tag tag={item}  key={`item-${index}`} />
  ))
  console.log(props.tags, props.rating)

  //tableau des rating qui comporte le numero de chaque star_favorite
 
  const ratingNmbers = [1,2,3,4,5];
  const tabRating = ratingNmbers.map((item, index) => {
    return <Rating rating={props.rating} key={`item-${index}`} scale={item}/>
  });
  console.log(ratingNmbers, tabRating)

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
          {tabRating}
        </div>
      </div>
    </div>
    </>
  )
}

export default Details