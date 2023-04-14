import React, { Component, ChangeEvent } from 'react';
import { Cards } from '../components/Cards';

/*Images of drinks*/

import zombieImg from '../assets/drinks/zombie.jpg'
import bloodyMary from '../assets/drinks/bloodyMary.jpg'
import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg'
import sexBeach from '../assets/drinks/sexBeach.jpg'
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg'
import whiskeySour from '../assets/drinks/whiskeySour.jpg'

interface propsSearchModule {
  keyword: string;
  actuallyDiv: JSX.Element | null;
}

class SearchModule extends Component<{}, propsSearchModule> {
  constructor(props: {}) {
    super(props);
    this.state = {
      keyword: '',
      actuallyDiv: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ keyword: event.target.value });
  };

  viewDiv = (): void => {
    const keyword = this.state.keyword.toLowerCase();
    let div: JSX.Element;
    if (keyword === 'zombie') {
      div = 
      <section className="container-fluid m-5 mt-0 p-5 mb-0">
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
      </section>;
    } else if (keyword === 'bloody mary' || keyword === 'bloodymary') {
      div = 
      <section className="container-fluid m-5 mt-0 p-5 mb-0">
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
      </section>;
    } else {
      div = <p className='title text-danger'>drink inexistente</p>;
    }
    this.setState({ actuallyDiv: div });
  };

  render() {
    return (
      <div>
        <form className="form-floating">
          <input className='form-control' id='drink' type="text" onChange={this.handleChange} />
        </form>
        <button className='btn btn-secondary d-block my-5' onClick={this.viewDiv}>Procurar Drink</button>
        {this.state.actuallyDiv}
      </div>
    );
  }
}

export default SearchModule;