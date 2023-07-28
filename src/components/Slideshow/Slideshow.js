import { useState } from 'react';
import './Slideshow.css';
import {RiArrowDropLeftLine} from "react-icons/ri";
import {RiArrowDropRightLine} from "react-icons/ri";



const Slideshow = (props) => {
 const [image, setImage ] = useState(`${props.title}`);
 
  return ( 
    <> 
        <div className='carousel'>
            <div className='icon_previous'>
                <RiArrowDropLeftLine style={{'fontSize':'100px'}}/>
            </div>
            <div className='image_container'>
              <p>{image}</p>
            </div>
            <div className='icon_next'>
                <RiArrowDropRightLine style={{'fontSize':'100px'}} />
            </div>

        
        </div>
    </>
  )
}

export default Slideshow