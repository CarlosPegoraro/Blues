import logoSlim from '../assets/logoSlim.svg'
import whiskeyImgL from '../assets/drinks/caroseul/whiskey.jpg'
import negroniImgL from '../assets/drinks/caroseul/negroni.jpg'
import cosmopolitanImgL from '../assets/drinks/caroseul/cosmopolitan.jpg'
import mojitoImgL from '../assets/drinks/caroseul/mojito.jpeg'

/*Imports*/
import { useRef } from 'react';

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
                                <a className="nav-link" aria-current="page" href="#"><i className="bi bi-house-fill"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-stars"></i>  populares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-share-fill"></i> compartilhar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-search"></i> procurar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-puzzle-fill"></i> Curiosidades</a>
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
    text: string;
    href: string;
}

export function CaroseulItem(props: CaroseulProps) {
    return (
        <div className="carousel-item active">
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
        <main>
            <section>
                <div id='carouselBox' className="container-fluid text-center bg-dark md">
                    <div id="myCarousel" className="carousel slide mt-5 mx-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <CaroseulItem src={mojitoImgL} href="#" alt="Mojito" text='Mojito' />
                            <CaroseulItem src={whiskeyImgL} href="#" alt="Whiskey" text='Whiskey' />
                            <CaroseulItem src={cosmopolitanImgL} href="#" alt="Cosmopolitan" text='Cosmopolitan' />
                            <CaroseulItem src={negroniImgL} href="#" alt="Negroni" text='Negroni' />
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
            <div className="card" style={{ width: props.width }}>
                <img src={props.src} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Ver mais</a>
                </div>
            </div>
        </div>
    );
}

type principalCardProps = {
    src: string;
    alt: string;
    title: string;
    descripton: string;
    itens: string;
    text: string
}


export function PrincipalCard(props: principalCardProps) {
    const listRef = useRef(null);

    function renderListItems(items: any[]) {
        return items.map((item, index) => <li key={index}>{item}</li>);
    }

    const { itens } = props;
    const arrayData = itens.includes(';') ? itens.split(';') : [itens];

    return (
        <div className="card card-lg">
            <img src={props.src} className="card-img-top card-img-top-lg" alt={props.alt} />
            <div className="card-body justify-content-center text-center">
                <h5 className="card-title mt-3 mb-5">{props.title}</h5>
                <div className="row">
                    <h5 className="card-title">Descrição</h5>
                    <p className="card-text text-dark">
                        {props.descripton}
                    </p>
                    <h5 className="card-title">Ingredientes</h5>
                    <p className="card-text">
                        <ul className='list-unstyled card-text text-dark' ref={listRef}>
                            {renderListItems(arrayData)}
                        </ul>
                    </p>
                    <h5 className="card-title">Modo de Preparo</h5>
                    <p className="card-text text-dark">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}
type TextDay = {
    text: string
}


export function TextDay(props: TextDay) {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={logoSlim} alt="logo"/>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{props.text}</p>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div className="container-fluid bg-dark rounded-0">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logoSlim} id="logoFooter" alt="logo" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2023 Blues - The Drink Society</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter text-white"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram text-white"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-tiktok text-white"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
