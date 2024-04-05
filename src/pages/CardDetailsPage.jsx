import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from "../redux/citiesSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import UpdateCityComponent from "../components/UpdateCityComponent";
import "./CardDetails.css"
function CardDetails() {
    //definisco l'id della città 
    const {id} = useParams();

    //definisco la Navigate per tornare indietro se cancello una citta
    const navigate = useNavigate();

    //definisco la variabile per mostrare l'update
    const [flagShowUpdate, setFlagShowUpdate] = useState(false);

    //definisco le variabili per le città
    const cities = useSelector(state => state.cities.value);
    const dispatch = useDispatch()

    //funzione per cancellare una citta
    const handleDelete = () => {
        //cancello la citta
        dispatch(deleteCity(id));
        //torno indietro
        navigate('/cities');
    }

    //funzione per mostrare update city
    const ShowUpdate = () => {
        setFlagShowUpdate(true);
    }

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
                <div className="mt-4 text-center">
                    <button className="btn btn-danger me-3" onClick={handleDelete}>Cancella</button>
                    <button className="btn btn-info" onClick={ShowUpdate}>Modifica</button>
                </div>
            </div>

            {flagShowUpdate && 
                <div>
                    <UpdateCityComponent 
                    setFlagShowUpdate={setFlagShowUpdate}
                    city = {cities[id]}
                    idCity = {id}
                    />
                </div>
            }
        </>
    )
}

export default CardDetails;