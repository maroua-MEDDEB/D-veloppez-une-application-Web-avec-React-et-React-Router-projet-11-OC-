import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

import "../../Sections/Housing_container/Housing_container.css";

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
          <div className="icon_previous">
            <RiArrowDropLeftLine
              style={{ fontSize: "100px" }}
              onClick={() => updatePicture(false)}
            />
          </div>

          <div className="icon_next">
            <RiArrowDropRightLine
              style={{ fontSize: "100px" }}
              onClick={() => updatePicture(true)}
            />
          </div>
        </nav>
      ) : (
        ""
      )}

      {pictures.length > 1 ? (
        <div className="carousel__counter">
          {currentPictureIndex + 1}/{pictures.length}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Carousel;
