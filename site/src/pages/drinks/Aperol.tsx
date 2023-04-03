import { HorizontalCard } from '../../components/Cards';
import { Caroseul } from '../../components/Carousel';
import { Navbar, Footer } from '../../components/Model'
import aperol from '../../assets/drinks/aperol.jpg'

export function AperolPage() {
    return (
        <div>
            <Navbar />
            <section className="container-fluid my-5 py-5">
                <HorizontalCard src={aperol} alt={'aperol'} title={'Aperol'} itens={'hshshshshsh;shhshshshshhshsh;skskksksksks;hehyeydeasasas;asasasasasassaas;asasassaassasa;asassasaassaas;sa'} text={'hhabxuhgbvgvyvrtfvasasasasasasasguvyfr6hbutf6rfubbrfftft'}/>
            </section>
            <Footer/>
        </div>
    );
}