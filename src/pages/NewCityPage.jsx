import { useState } from "react";
import { useDispatch} from 'react-redux';
import { addCity } from '../redux/citiesSlice';
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function NewCityPage() {

    //dichiaro il dispatch per pushiare la città
    const dispatch = useDispatch();
    //dichiaro la history per tornare indietro
    const navigate = useNavigate();
    //dichiaro lo stato del form
    const [formDate, setFormData] = useState(
        {
            name: "",
            country: "",
            description: "",
            image: "",
            visited: false
        }
    );
    //dichiaro la funzione per il submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formDate", formDate);
        dispatch(addCity(formDate));
        //torno alle città
        navigate('/cities');
    }
    //dichiaro la funzione per il change dei campi
    const handleChangeField = (event) => {
        const {type, name, value} = event.target;
        if(type === "checkbox"){
            setFormData(prevState => ({...prevState, [name]: event.target.checked}));
        }
        else{
            setFormData(prevState => ({...prevState, [name]: value}));
        }
    }

    return (
        <>
            <div className="my-section text-center">
                <h1 className="display-4 mb-3">Aggiungi una nuova città</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="cityName" className="form-label" >Nome</label>
                        <input type="text" className="form-control" id="cityName" name="name" onChange={handleChangeField}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityCountry" className="form-label" >Paese</label>
                        <input type="text" className="form-control" id="cityCountry" name="country" onChange={handleChangeField}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityDescription" className="form-label" >Descrizione</label>
                        <textarea className="form-control" id="cityDescription" rows="3" name="description" onChange={handleChangeField}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityImage" className="form-label" >Immagine</label>
                        <input type="text" className="form-control" id="cityImage" name="image" onChange={handleChangeField}/>
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-center">
                        <label className="form-check-label" htmlFor="cityVisited me-3">Hai visitato la citta</label>
                        <div className="ms-5">
                            <input type="checkbox" className="form-check-input border-dark" id="cityVisited" name="visited" onChange={handleChangeField}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Crea</button>
                </form>
            </div>
        </>
    )
}

export default NewCityPage