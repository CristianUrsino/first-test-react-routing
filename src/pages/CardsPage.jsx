import { useDispatch, useSelector } from 'react-redux';
import "./CardsPage.css"
function CardsComponent() {
    const cities = useSelector(state => state.cities.value);
    console.log(cities);
    const dispatch = useDispatch()
    return (
        <>
            <div className='my-section text-center'>
                <h1 className='display-4 mb-3'>CardsPage</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quasi ad aspernatur provident libero, natus dicta sed saepe sunt sequi sit, necessitatibus impedit, facilis soluta a voluptatem officiis corrupti delectus magni suscipit doloremque? Nostrum veritatis deserunt qui ipsa voluptatem optio?</p>
            </div>
            <div className='my-section'>
                <div className='row'>
                    {
                        cities.map((city, index) => {
                            return (
                                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-5' key={index}>
                                    <div className="card">
                                        <img src={city.image} className="card-img-top my-card-img" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{city.name}</h5>
                                            <p className="card-text">{city.description}</p>
                                        </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CardsComponent