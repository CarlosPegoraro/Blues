import { Navbar, Caroseul, Footer, Cards, PrincipalCard, Informations,  } from '../components/Model'

export function Information() {
    return (
        <div>
            <Navbar />
            <section className="container-fluid mt-5 mb-3 p-5 mb-0">
                <h1 className="title m-5">Curiosidades sobre os drinks</h1>
                <div className="row justify-content-center align-items-center bg-dark text-white">
                    <Informations title='Sobre os whiskeys John Walker'
                        text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        ' 
                        />
                </div>
            </section>
            <section className="container-fluid mb-5 px-5">
                <div className="row justify-content-center align-items-center bg-dark text-white">
                    <Informations title='Sobre os whiskeys John Walker'
                        text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        ' 
                        />
                </div>
            </section>
            <section className="container-fluid mb-3 px-5">
                <div className="row justify-content-center align-items-center bg-dark text-white">
                    <Informations title='Sobre os whiskeys John Walker'
                        text='
                        Você é capaz de conquistar tudo o que deseja se mantiver o foco e a determinação no seu caminho.
                        ' 
                        />
                </div>
            </section>
            <Footer/>   
        </div>
    );
}