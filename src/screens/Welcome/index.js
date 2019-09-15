import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { navigate } from '~/services/navigation';

import { Container, Button, ButtonText } from './styles';

class Welcome extends Component {
  _goToLogin = () => {
    navigate('SocialLogin');
  };

  render() {
    return (
      <Container>
        <Text>Welcome</Text>
        <Button onPress={this._goToLogin}>
          <ButtonText>Começar</ButtonText>
        </Button>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(Welcome);

export default Welcome;
