import './Slideshow.css';
import {RiArrowDropLeftLine} from "react-icons/ri";
import {RiArrowDropRightLine} from "react-icons/ri";
import { appartListData } from '../../datas/cardsData';



const Slideshow = () => {
    const img_slide = appartListData.forEach((el) => {
        // console.log(el.pictures.length);
    });
 
  return ( 
    <>
        <div className='carousel'>
            <div className='icon_previous'>
                <RiArrowDropLeftLine style={{'fontSize':'100px'}}/>
            </div>
            <div className='image_container'>
               <img src='' alt=''/>
            </div>
            <div className='icon_next'>
                <RiArrowDropRightLine style={{'fontSize':'100px'}} />
            </div>
        </div>
    </>
  )
}

export default Slideshow