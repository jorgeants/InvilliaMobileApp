import React from 'react';

import Carrousel from '~/components/Carrousel';

import { render, fireEvent } from '@testing-library/react-native';

const state = {
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

describe('Carrousel component', () => {
  it('should be able to render component', () => {
    const { getByTestId } = render(<Carrousel items={state.items} />);

    // fireEvent.

    // expect(getByTestId('welcome-carousel')).toBeTruthy();
    expect(getByTestId('welcome-carousel')).toContainElement(getByTestId('welcome-carousel'));
  })
})
