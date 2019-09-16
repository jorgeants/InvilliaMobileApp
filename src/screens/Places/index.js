import React, { Component } from 'react';
import { PermissionsAndroid, Platform, Text, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MapContainer from '~/components/MapContainer';

import { Container, Button, ButtonText } from './styles';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  hasLocationPermission = async () => {
    if (
      Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)
    ) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG
      );
    }

    return false;
  };

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({ location: position.coords, loading: false });
          console.tron.log(position);
        },
        error => {
          this.setState({ location: error, loading: false });
          console.tron.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 4000,
          maximumAge: 2000,
          distanceFilter: 50,
          forceRequestLocation: true,
        }
      );
    });
  };

  render() {
    const { loading, location } = this.state;

    return (!loading ? <MapContainer region={location} /> : <Text>'Carregando...'</Text>);
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Places);
