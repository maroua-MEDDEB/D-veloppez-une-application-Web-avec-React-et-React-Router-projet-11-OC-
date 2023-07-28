import React, { useState } from "react";
import PropTypes from "prop-types";
import {RiArrowDropLeftLine} from "react-icons/ri";
import {RiArrowDropRightLine} from "react-icons/ri";

import "./Carousel.css";

function Carousel({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  /**
   * Update the current picture state
   * @param {number} newIndex
   */
  const updateCurrentPicture = (newIndex) => {
    setCurrentPictureIndex(newIndex);
  };

  /**
   *
   * @param {boolean} nextClicked  true by default
   */
  const updatePicture = (nextClicked = true) => {
    const current = currentPictureIndex;
    const quantity = pictures.length;
    const pictureToDisplayIndex = nextClicked
      ? (current + 1) % quantity
      : (current + quantity - 1) % quantity;
    updateCurrentPicture(pictureToDisplayIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel__pictures-box">
        {pictures.length > 0 ? (
          <img
            className="carousel__picture"
            src={pictures[currentPictureIndex]}
            alt=""
          />
        ) : (
          <p className="carousel__no-pic-message">Aucune image disponible</p>
        )}
      </div>

      {pictures.length > 1 ? (
        <nav className="carousel__nav">
          {/* <i
            className="fas fa-chevron-left"
            onClick={() => updatePicture(false)}
          ></i>
          <i
            className="fas fa-chevron-right"
            onClick={() => updatePicture(true)}
          ></i> */}
           <div className='icon_previous' >
              <RiArrowDropLeftLine style={{'fontSize':'100px'}} onClick={() => updatePicture(false)}/>
            </div>
            <div className='icon_next'>
              <RiArrowDropRightLine style={{'fontSize':'100px'}} onClick={() => updatePicture(true)} />
            </div>
        </nav>
      ) : (
        ""
      )}

      {pictures.length > 0 ? (
        <div className="carousel__counter">
          {currentPictureIndex + 1}/{pictures.length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel;



































// import { useState } from 'react';
// import './Carousel.css';
// import {RiArrowDropLeftLine} from "react-icons/ri";
// import {RiArrowDropRightLine} from "react-icons/ri";
// import { PropTypes } from 'prop-types';


// const Carousel = ({ pictures, ...rest }) => {

//  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);


//  /**
//   * Mettre à jour (update) l'état actuel de l'image 
//   * @param {number} newIndex 
//   */
//  const updateCurrentPicture = (newIndex) => {
//   setCurrentPictureIndex(newIndex)
//  }
// /**
//  * 
//  * @param {boolean} nextClicked true par défaut
//  */
//   const updatePicture = (nextClicked = true) => {
//     const current = currentPictureIndex;
//     const quantity = pictures.length;
//     const pictureToDisplayIndex = nextClicked
//       ? (current + 1) % quantity
//       : (current + quantity - 1) % quantity;
//     updateCurrentPicture(pictureToDisplayIndex);
//   };

//   return (  
//     <> 
//       <div className='carousel'>
//         {pictures.length > 1 ? (
//           <nav className='carousel__nav'>
//             {/* icon précédente */}
//             <div className='icon_previous' >
//               <RiArrowDropLeftLine style={{'fontSize':'100px'}} onClick={() => updatePicture(false)}/>
//             </div>

//             <div className='picture_numerotation'>
//               {/* élément des pictures */}
//               <div className="carousel__pictures">
//                 {pictures.length > 0 ? (
//                   <img
//                     className="carousel__picture"
//                     src={pictures[currentPictureIndex]}
//                     alt=""
//                   />
//                 ) : 
//                 (
//                   <p className="carousel__no-pic-message">Aucune image disponible</p>
//                 )
//                 }
//               </div>

//               {/* numérotation de chaque picture affiché */}
//               {pictures.length > 0 ? (
//               <div className="carousel__counter">
//                 {currentPictureIndex + 1}/{pictures.length}
//               </div>
//               ) : (
//                 ""
//               )}
//             </div>

//             {/* icon suivante */}
//             <div className='icon_next'>
//                 <RiArrowDropRightLine style={{'fontSize':'100px'}} onClick={() => updatePicture(true)} />
//             </div>
//           </nav>) : (
//           ""
//           )
//         } 
//       </div>
//     </>
//   );
//   }

//   Carousel.propTypes = {
//     pictures: PropTypes.arrayOf(PropTypes.string),
//   };

// export default Carousel