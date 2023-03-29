import logoSlim from '../assets/logoSlim.svg'
import whiskeyImgL from '../assets/drinks/caroseul/whiskey.jpg'
import negroniImgL from '../assets/drinks/caroseul/negroni.jpg'
import cosmopolitanImgL from '../assets/drinks/caroseul/cosmopolitan.jpg'
import mojitoImgL from '../assets/drinks/caroseul/mojito.jpeg'

export function Navbar() {
    return (
        <header className="container-fluid position-fixed top-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img id="headerLogo" src={logoSlim} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-absolute top-0 end-0 mt-3 me-5"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">compartilhar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">procurar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Curiosidades</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

type CaroseulProps = {
    src: string;
    alt: string;
    text: string
}

export function CaroseulItem(props: CaroseulProps) {
    return (
        <div className="carousel-item">
            <img src={props.src} className="caroseulImg" alt={props.alt} />
            <div className="container">
                <div className="carousel-caption">
                    <a href="#" className="caroseulTxt">{props.text}</a>
                </div>
            </div>
        </div>
    );
}


export function Caroseul() {
    return (
        <main className="bg-gray-black">
            <section className="pt-5">
                <div className="container-fluid text-center mt-5 pt-5">
                    <div id="myCarousel" className="carousel slide mx-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <CaroseulItem src={whiskeyImgL} alt="whiskey" text='whiskey'/>
                            <CaroseulItem src={mojitoImgL} alt="mojito" text='mojito'/>
                            <CaroseulItem src={cosmopolitanImgL} alt="cosmopolitan" text='cosmopolitan'/>
                            <CaroseulItem src={negroniImgL} alt="negroni" text='negroni'/>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}



type CardsProps = {
    src: string;
    alt: string;
    title: string;
    text: string;
    width: string;
}

export function Cards(props: CardsProps) {
    return (
        <div className="col m-3">
            <div className="card" style={{width: props.width}}>
                <img src={props.src} className="card-img-top" alt={props.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Ver mais</a>
                </div>
            </div>
        </div>
    );
}

export function Footer(){
    return (
        <div className="container-fluid bg-light">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={logoSlim} alt=""/>
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2023 Blues - The Drink Society</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-tiktok"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
    );
}
