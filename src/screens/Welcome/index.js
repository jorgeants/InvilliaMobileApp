import React, { Component } from 'react';
import Carrousel from '~/components/Carrousel';

import { Container } from './styles';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          position: 1,
          image: 'maker',
          description:
            'Bem-vindo o PlacerApp, sua principal fonte de informações de locais',
          startButton: false,
        },
        {
          position: 2,
          image: 'planet',
          description:
            'Se encontre em qualquer lugar do mundo, da sua maneira, do seu jeito',
          startButton: false,
        },
        {
          position: 3,
          image: 'location',
          description:
            'Não esqueça de ativar e perimtir sua localização para uma melhor experiência, e divirta-se',
          startButton: true,
        },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Carrousel items={items} />
      </Container>
    );
  }
}

export default Welcome;
