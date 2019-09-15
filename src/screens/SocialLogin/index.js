import React, { Component } from 'react';

import { Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { navigate } from '~/services/navigation';

import { Container, Button, ButtonText } from './styles';

class SocialLogin extends Component {
  goToPlaces = () => {
    navigate('Places');
  };

  render() {
    return (
      <Container>
        <Text>Social Login</Text>
        <Button onPress={this.goToPlaces}>
          <ButtonText>Places</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SocialLogin);
