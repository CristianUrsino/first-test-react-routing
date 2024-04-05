import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCity } from "../redux/citiesSlice";
function UpdateCityComponent({setFlagShowUpdate, city, idCity}) {
    //dichiaro il discatch per richiamare la funzione update
    const dispatch = useDispatch();
    //campi del form
    const [formDate, setFormData] = useState(
        {
            name: city.name,
            country: city.country,
            description: city.description,
            image: city.image,
            visited: city.visited
        }
    );

    //stati per la validazione
    const [nameError, setNameError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [imageError, setImageError] = useState(false);

    //dichiaro la funzione per il submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formDate", formDate);
        //verifico i campi obbligatori
        if(formDate.name === ""){
            setNameError(true);
        }else{
            setNameError(false);
        }
        if(formDate.country === ""){
            setCountryError(true);
        }else{
            setCountryError(false);
        }
        if(formDate.description === ""){
            setDescriptionError(true);
        }else{
            setDescriptionError(false);
        }
        if(formDate.image === ""){
            setImageError(true);
        }else{
            setImageError(false);
        }
        if((formDate.name !== "" && formDate.country !== "" && formDate.description !== "" && formDate.image !== "") &&
            (formDate.name !== city.name || formDate.country !== city.country || formDate.description !== city.description || formDate.image !== city.image || formDate.visited !== city.visited)){
            console.log(formDate);
            dispatch(updateCity({formDate:formDate, id: idCity}));
            setFlagShowUpdate(false);
        }
        
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
    return(
        <>
            <div className="my-section">
                <div className="text-center">
                    <button className="btn btn-danger my-3" onClick={() => setFlagShowUpdate(false)}>Annulla</button>
                </div>
                <h1 className="display-4 mb-3">Aggiungi una nuova città</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="cityName" className="form-label" >Nome</label>
                        <input value={formDate.name} type="text" className="form-control" id="cityName" name="name" onChange={handleChangeField}/>
                        {
                            nameError && <div className="text-danger">Inserisci il nome della citta</div>
                        }                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityCountry" className="form-label" >Paese</label>
                        <input value={formDate.country} type="text" className="form-control" id="cityCountry" name="country" onChange={handleChangeField}/>
                        {
                            countryError && <div className="text-danger">Inserisci il paese della citta</div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityDescription" className="form-label" >Descrizione</label>
                        <textarea value={formDate.description} className="form-control" id="cityDescription" rows="3" name="description" onChange={handleChangeField}></textarea>
                        {
                            descriptionError && <div className="text-danger">Inserisci la descrizione della citta</div>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityImage" className="form-label" >Immagine</label>
                        <input value={formDate.image} type="text" className="form-control" id="cityImage" name="image" onChange={handleChangeField}/>
                        {
                            imageError && <div className="text-danger">Inserisci l'immagine della citta</div>
                        }
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-center">
                        <label className="form-check-label" htmlFor="cityVisited me-3">Hai visitato la citta</label>
                        <div className="ms-5">
                            <input type="checkbox" className="form-check-input border-dark" id="cityVisited" name="visited" checked={formDate.visited} onChange={handleChangeField}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Crea</button>
                </form>
            </div>
        </>
    )
}
export default UpdateCityComponent;