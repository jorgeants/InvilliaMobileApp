import React from 'react';
import { ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import { navigate } from '~/services/navigation';

import {
  Button,
  ButtonText,
  Description,
  Frame,
  ImageContainer,
  Page,
  Pagination,
} from './styles';

import MakerIcon from '~/assets/maker_icon.svg';
import Planet from '~/assets/planet.svg';
import LocationService from '~/assets/location_service.svg';

const Carrousel = ({ items }) => {
  const goToLogin = () => {
    navigate('Places');
  };

  const imageSVG = image => {
    let imageComponent;

    switch (image) {
      case 'maker':
        imageComponent = <MakerIcon width={160} height={160} />;
        break;
      case 'planet':
        imageComponent = <Planet width={160} height={160} />;
        break;
      case 'location':
        imageComponent = <LocationService width={150} height={150} />;
        break;
      default:
        imageComponent = <MakerIcon width={160} height={160} />;
        break;
    }

    return imageComponent;
  };

  const startButton = () => {
    return (
      <Button onPress={goToLogin}>
        <ButtonText>Começar</ButtonText>
      </Button>
    );
  };

  const pagination = position => {
    return (
      <Pagination>
        <Page active={position === 1} />
        <Page active={position === 2} />
        <Page active={position === 3} />
      </Pagination>
    );
  };

  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {items.map(item => (
        <Frame key={item.position}>
          <ImageContainer>{imageSVG(item.image)}</ImageContainer>
          <Description>{item.description}</Description>
          {item.startButton && startButton()}
          {pagination(item.position)}
        </Frame>
      ))}
    </ScrollView>
  );
};

Carrousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carrousel;
