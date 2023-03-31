import whiskeyImgL from '../assets/drinks/caroseul/whiskey.jpg'
import negroniImgL from '../assets/drinks/caroseul/negroni.jpg'
import cosmopolitanImgL from '../assets/drinks/caroseul/cosmopolitan.jpg'
import mojitoImgL from '../assets/drinks/caroseul/mojito.jpg'

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
                    <button className='btn btn-second'><a href="#" className="caroseulTxt">{props.text}</a></button>
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