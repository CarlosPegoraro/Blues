import { HorizontalCard } from '../../components/Cards';
import { Navbar, Footer } from '../../components/Model'
import { LongText } from '../../components/Texts';

/*Drink Image*/
import aperol from '../../assets/drinks/aperol.jpg'

export function Cosmopolitan() {

    document.title = "Cosmopolitan - Blues"

    return (
        <div>
            <Navbar />
            <section className="container-fluid my-5 p-5">
                <h1 className="title text-secondary m-5">Aperol</h1>
                <HorizontalCard src={aperol} alt={'aperol'}
                    itens={'hshshshshsh;shhshshshshhshsh;skskksksksks;hehyeydeasasas;asasasasasassaas;asasassaassasa;asassasaassaas;sa;sassasa;sasasasa;assasasa;assasaas;assaassa;assasasa;assasasa;assasasas;sasasasasa;sasasasa;assasasaas;asasasas;'}
                    text={'hhabxuhgbvgvyvrtfvasasasasasasasguvyfr6hbutf6rfubbrfftft'} />
            </section>
            <LongText title='Sobre o drink' text='nybybybvygtvtygvtbyuhtbyuuvuvugguhugvvhvvvhvvvvvhuhvvhvvhvvhvhvhvhvvvvvhvvhvvhvhvhvhuvhhvuvhhvhvhv'/>
            <Footer />
        </div>
    );
}