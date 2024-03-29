function UpdateCityComponent({setFlagShowUpdate}) {
    
    return(
        <>
            <div>UpdateCityPage</div>
            <button className="btn btn-danger me-3" onClick={() => setFlagShowUpdate(false)}>Annulla</button>
        </>
    )
}
export default UpdateCityComponent;