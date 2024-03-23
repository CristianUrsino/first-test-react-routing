import "./HomePage.css"
import {Link} from "react-router-dom"
function HomeComponent () {
    return (
        <>
            <header className="text-center">
                <h1 className="display-4">Benvenuto al Blog delle Città</h1>
                <p className="lead">Esplora, scopri e condividi le meraviglie delle città di tutto il mondo.</p>
            </header>
            <main className="mt-5 home-main">
                <div className="row">
                <div className="col-md-6 mb-4">
                    <h2 className="display-4">Scopri Nuove Destinazioni</h2>
                    <p className="lead">Il nostro blog offre una vasta gamma di articoli e guide su città di tutti i continenti, dalla vibrante New York alla storica Roma, passando per le esotiche Bangkok e Tokyo.</p>
                </div>
                <div className="col-md-6 mb-4">
                    <h2 className="display-4">Esperienze Autentiche</h2>
                    <p className="lead">Scopri le esperienze autentiche e i consigli locali per rendere il tuo viaggio unico e indimenticabile. Dai consigli sui migliori ristoranti ai luoghi nascosti da visitare, siamo qui per guidarti.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <h2 className="display-4">Salva le Tue Avventure</h2>
                    <p className="lead">Se sei un viaggiatore appassionato e desideri condividere le tue avventure con una community globale, unisciti a noi! Puoi contribuire con i tuoi articoli e le tue foto e ispirare altri viaggiatori.</p>
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