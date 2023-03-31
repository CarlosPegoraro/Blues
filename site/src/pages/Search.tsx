import zombieImg from '../assets/drinks/zombie.jpg'
import bloodyMary from '../assets/drinks/bloodyMary.jpg'
import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg'
import sexBeach from '../assets/drinks/sexBeach.jpg'
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg'
import whiskeySour from '../assets/drinks/whiskeySour.jpg'

/*Imports*/
import { useState } from 'react';
import { Navbar, Footer } from '../components/Model'
import { Cards } from '../components/Cards'

export function Search() {
    const [nome, setNome] = useState('');

    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        alert(`Nome: ${nome}`);
    }
    return (
        <div>
            <Navbar />
            <form className='container-fluid m-5 mb-0 p-5 pb-0' onSubmit={handleSubmit}>
                <h1 id='popular' className="title my-5">Pesquisar Drink</h1>
                <label className='form-label'>
                    Palavra-chave:
                    <input className='form-control text-second' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <button className='btn btn-primary mx-5' type="submit">Enviar</button>
            </form>
            <section className="container-fluid m-5 mt-0 p-5 mb-0">
                <h1 id='popular' className="title my-5">Resultados da Pesquisa</h1>
                <div className="row justify-content-center align-items-center">
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet." width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet." width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet." width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet." width='18rem' />
                </div>
            </section>
            <Footer />
        </div>
    );
}
