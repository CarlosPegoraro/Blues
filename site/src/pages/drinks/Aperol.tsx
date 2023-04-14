import { HorizontalCard } from '../../components/Cards';
import { Navbar, Footer } from '../../components/Model'
import { LongText } from '../../components/Texts';

/*Drink Image*/
import aperol from '../../assets/drinks/aperol.jpg'

export function Aperol() {

    document.title = "Aperol - Blues"

    return (
        <div>
            <Navbar />
            <section className="container-fluid my-5 p-5">
                <h1 className="title text-secondary m-5">Aperol</h1>
                <HorizontalCard src={aperol} alt={'aperol'}
                    itens={'3 partes de Prosecco (cerca de 90 ml);2 partes de Aperol (cerca de 60 ml);1 parte de água com gás (cerca de 30 ml);Gelo;Fatia de laranja para decorar'}
                    text={'Coloque alguns cubos de gelo em um copo grande. Adicione o Aperol, o Prosecco e a água com gás no copo. Misture gentilmente os ingredientes com uma colher longa ou palito. Decore com uma fatia de laranja e sirva'} />
            </section>
            <LongText title='Sobre o drink' text='O Aperol é um aperitivo italiano criado em 1919 pela empresa Barbieri em Pádua. É feito a partir de uma mistura de ervas e raízes, incluindo laranja amarga, ruibarbo, genciana e casca de cinchona, que dão ao Aperol um sabor amargo e doce característico.

O Aperol é frequentemente usado para fazer o famoso coquetel Spritz, que é uma mistura de Aperol, Prosecco e água com gás. O Spritz de Aperol tornou-se particularmente popular nos últimos anos, especialmente durante os meses quentes de verão, como uma bebida refrescante e com baixo teor alcoólico.

Além disso, o Aperol também pode ser usado em uma variedade de outros coquetéis, como o Negroni, que é feito com partes iguais de gin, vermute doce e Aperol, e o Aperol Sour, que é uma mistura de Aperol, suco de limão e xarope de açúcar.

Como um aperitivo, o Aperol também pode ser servido com gelo e uma fatia de laranja ou como parte de um aperitivo italiano tradicional com queijos, carnes curadas e azeitonas. O Aperol é uma bebida versátil e saborosa que pode ser apreciada de várias maneiras.'/>
            <Footer />
        </div>
    );
}