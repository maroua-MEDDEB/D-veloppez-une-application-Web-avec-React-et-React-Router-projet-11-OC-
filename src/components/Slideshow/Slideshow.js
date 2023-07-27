import './Slideshow.css';
import {RiArrowDropLeftLine} from "react-icons/ri";
import {RiArrowDropRightLine} from "react-icons/ri";



const Slideshow = (props) => {
    
  return ( 
    <>
        <div className='carousel'>
            <div className='icon_previous'>
                <RiArrowDropLeftLine style={{'fontSize':'100px'}}/>
            </div>
            <div className='image_container'>
               
                    <p>{props.title}</p>
              
            </div>
            <div className='icon_next'>
                <RiArrowDropRightLine style={{'fontSize':'100px'}} />
            </div>

        
        </div>
    </>
  )
}

export default Slideshow