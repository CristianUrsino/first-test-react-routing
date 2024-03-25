import { useDispatch, useSelector } from 'react-redux';
import "./CardsPage.css"
import  CardComponent from "../components/CardComponent";
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
                                <CardComponent
                                name={city.name}
                                description={city.description}
                                image={city.image}
                                country={city.country}
                                visited={city.visited}
                                key={index}
                                />        
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CardsComponent