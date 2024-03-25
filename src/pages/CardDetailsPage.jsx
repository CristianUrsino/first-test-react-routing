import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./CardDetails.css"
function CardDetails() {
    const {id} = useParams();

    const cities = useSelector(state => state.cities.value);
    const dispatch = useDispatch()

    return (
        <>
            <div className="my-section text-center">
                <h1 className="display-4 mb-1">{cities[id].name}</h1>
                <p className="lead mb-5">{cities[id].country}</p>
                <figure className="my-img-details mb-3"><img src={cities[id].image} alt={"immagine di" +cities[id].name} /></figure>
                {
                    cities[id].visited ? 
                        <div className="text-success">Hai visitato {cities[id].name}</div> 
                    : 
                        <div className="text-danger">Non hai visitato {cities[id].name}</div> 

                }
                <p className="lead mt-4">{cities[id].description}</p>
            </div>
        </>
    )
}

export default CardDetails;