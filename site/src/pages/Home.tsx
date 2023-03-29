import zombieImg from '../assets/drinks/zombie.jpg'
import bloodyMary from '../assets/drinks/bloodyMary.jpg'
import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg' 
import sexBeach from '../assets/drinks/sexBeach.jpg' 
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg' 
import whiskeySour from '../assets/drinks/whiskeySour.jpg'
import { Navbar, Caroseul, Footer, Cards,  } from '../components/Model'

export function Home() {
    return (
        <div>
            <Navbar />
            <Caroseul />
            <section className="container-fluid m-5 p-5 mb-0">
                <div className="row justify-content-center align-items-center">
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="ncbeyucbyuegcyugeycwgwyecywcyegcyecygywgecygcwewecyycwe" width='18rem'/>
                </div>
            </section>
            <Footer/>   
        </div>
    );
}