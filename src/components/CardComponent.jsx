import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function CardComponent({ name, description, image, country, visited, index }) {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-5' key={index}>
            <Link to={`/cards/${index}`} className="text-decoration-none" >
            <div className="card">
                <figure className="position-relative">
                    <img src={image} className="card-img-top my-card-img" alt={"immagine di" + name}  />
                        {
                            visited ?
                                    <div className="visited my-badge">
                                        <i className="fa-solid fa-check fa-xl"></i>
                                    </div>
                                :
                                    <div className="not-visited my-badge">
                                        <i className="fa-solid fa-xmark fa-xl"></i>
                                    </div>
                        }   
                    
                </figure>
                <div className="card-body">
                    <h5 className="card-title">{name} - {country} </h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
}

CardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired, 
    visited: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
};

export default CardComponent;
