import zombieImg from '../assets/drinks/zombie.jpg'
import bloodyMary from '../assets/drinks/bloodyMary.jpg'
import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg' 
import sexBeach from '../assets/drinks/sexBeach.jpg' 
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg' 
import whiskeySour from '../assets/drinks/whiskeySour.jpg'
import { Navbar, Caroseul, Footer, Cards, PrincipalCard, TextDay,  } from '../components/Model'

export function Home() {
    return (
        <div>
            <Navbar />
            <Caroseul />
            <section className="container-fluid m-5 p-5 mb-0">
                <h1 className="title m-5">Drink da semana</h1>
                <div className="row justify-content-center align-items-center">
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem' />
                    <Cards src={martinez} alt="Martinez" title='Martinez' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                    <Cards src={pinacolada} alt="Pinacolada" title='Pinacolada' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                    <Cards src={tequilaSunrise} alt="tequila Sunrise" title='tequila Sunrise' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                </div>
            </section>
            <section className="container-fluid p-5 mt-5 mb-0 bg-dark">
                <div className="row d-flex justify-content-center align-items-center">
                    <h1 className="title m-5">Drink em Destaque</h1>
                    <PrincipalCard 
                        /*Image*/
                        src={sexBeach} 
                        /*alternitave Text*/
                        alt='Sex on the Beach' 
                        /*Drinks' Name*/
                        title='Sex on the Beach' 
                        /*Descripton Text*/
                        descripton='Bloody Mary is a cocktail made with vodka, tomato juice, lemon juice, Worcestershire sauce, Tabasco, and pepper. This popular drink is typically served over ice and garnished with celery or other vegetables, and is often enjoyed as a brunch or morning cocktail.
                        The origins of the Bloody Mary are somewhat disputed, but it is generally believed to have been created in the early 20th century.'
                        /*Ingredients - Split item using semicolon(;)*/
                        itens='45 ml Vodka;90 ml Tomato Juice;15 ml Fresh Lemon Juice;2 dashes Worcestershire Sauce;Tabasco, Celery Salt, Pepper (Up to taste)' 
                        /*Preparation method*/
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium voluptas non! Cupiditate recusandae consectetur eligendi dolorem vel harum iusto, ad a veritatis et quos nostrum enim libero impedit iure.' 
                    />
                </div>
                
            </section>
            <section className="container-fluid mt-5 p-5 mb-0">
                <h1 className="title m-5">Curiosidade Do Dia</h1>
                <div className="row justify-content-center align-items-center bg-dark text-white">
                    <TextDay text='Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.' />
                </div>
            </section>
            <Footer/>   
        </div>
    );
}