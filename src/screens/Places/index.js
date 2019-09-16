import React, { Component } from 'react';
import { PermissionsAndroid, Platform, Text, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PlacesActions from '~/store/modules/places/actions';

import MapContainer from '~/components/MapContainer';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      error: null,
      loading: false,
      places: [],
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
        'Ative a localização para uma melhor experiência.',
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Permita que aplicativo use sua localização para uma melhor experiência.',
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

          this.getNearbyPlaces(position);
        },
        error => {
          this.setState({ location: error, loading: false });
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

  getNearbyPlaces = async position => {
    const { loadPlacesRequest } = this.props

    await loadPlacesRequest(position);
  };

  render() {
    const { loading, location } = this.state;
    const { places } = this.props

    return (!loading ? <MapContainer region={location} /> : <Text>'Carregando...'</Text>);
  }
}

const mapStateToProps = state => ({
  places: state.places.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlacesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places);
