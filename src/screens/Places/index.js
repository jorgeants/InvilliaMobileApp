import React, { Component } from 'react';

import { Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapContainer from '~/components/MapContainer';

import { Container, Button, ButtonText } from './styles';

class Places extends Component {
  render() {
    return (
      <MapContainer />
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Places);
