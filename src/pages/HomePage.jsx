import "./HomePage.css"
import {Link} from "react-router-dom"
function HomeComponent () {
    return (
        <>
            <header className="text-center my-section">
                <h1 className="display-4">Benvenuto al Blog delle Città</h1>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, soluta!</p>
            </header>
            <main className="my-section">
                <div className="row">
                <div className="col-md-6 mb-4">
                    <h2 className="display-4">Scopri Nuove Destinazioni</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus ipsa quod iste animi quis quae, praesentium rem, temporibus recusandae expedita rerum fugiat aliquid perspiciatis dignissimos atque consequuntur illum perferendis molestiae quidem?</p>
                </div>
                <div className="col-md-6 mb-4">
                    <h2 className="display-4">Esperienze Autentiche</h2>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio exercitationem nesciunt, mollitia, a iure atque id, accusamus assumenda porro vel dignissimos.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <h2 className="display-4">Salva le Tue Avventure</h2>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, iusto quis consequuntur magni possimus, dignissimos omnis aspernatur</p>
                </div>
                </div>
                <div className="text-center mt-5">
                    <Link to={"/cards"}>
                        <button type="button" className="btn btn-primary btn-lg pd-1 center">Vai alle tue città</button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default HomeComponent