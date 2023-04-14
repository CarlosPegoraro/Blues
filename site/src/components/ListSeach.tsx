import { Cards } from "./Cards";
import zombieImg from '../assets/drinks/zombie.jpg'

export function ZombieList() {
    return (
        <div>
            <h1 className="title my-5">Resultados da Pesquisa</h1>
                <div className='row'>
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/zombie' width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet." 
                        href="/drinks/zombie" width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/zombie' width='18rem' />
                    <Cards src={zombieImg} alt="zombie" title='Zombie' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/zombie' width='18rem' />
                </div>
        </div>
    );
}

/*Bloody Mary*/

import bloodyMary from '../assets/drinks/bloodyMary.jpg'

export function BloodyMaryList() {
    return (
        <div>
            <h1 className="title my-5">Resultados da Pesquisa</h1>
                <div className='row'>
                    <Cards src={bloodyMary} alt="bloody Mary" title='bloody Mary' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/bloodymary' width='18rem' />
                    <Cards src={bloodyMary} alt="bloody Mary" title='bloody Mary' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/bloodymary' width='18rem' />
                    <Cards src={bloodyMary} alt="bloody Mary" title='bloody Mary' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/bloodymary' width='18rem' />
                    <Cards src={bloodyMary} alt="bloody Mary" title='bloody Mary' text="The quick brown fox jumps over the lazy dog, showcasing all 26 letters of the alphabet."
                        href='/drinks/bloodymary' width='18rem' />
                </div>
        </div>
    );
}