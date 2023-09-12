import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ id, title, cover }) => {
  // transmettre l'id du Housing d'une carte sur l'accueil vers la page Housing.
  let locationDetails = `/Housing/${id}`;

  return (
    <>
      <div className="grid_item">
        <div className="the_item">
          <Link to={locationDetails}>
            <div className="the_item_img">
              <img src={cover} alt="" />
            </div>
            <div className="the_item_text">{title}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default Card;
