import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

class Places extends Component {
  render() {
    return <View>
      <Text>Places</Text>
    </View>;
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Places);
