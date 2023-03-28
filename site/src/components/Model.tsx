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

export function Caroseul() {
    return (
        <main className="bg-gray-black">
            <section className="pt-5">
                <div className="container-fluid text-center mt-5 pt-5">
                    <div id="myCarousel" className="carousel slide mx-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src={whiskeyImgL} className="caroseulImg" alt="" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <a href="#" className="caroseulTxt">whiskey</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={negroniImgL} className="caroseulImg" alt="" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <a href="#" className="caroseulTxt">Negroni</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <img src={cosmopolitanImgL} className="caroseulImg" alt="" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <a href="#" className="caroseulTxt">Cosmopolitan</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <img src={mojitoImgL} className="caroseulImg" alt="" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <a href="#" className="caroseulTxt">Mojito</a>
                                    </div>
                                </div>
                            </div>
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