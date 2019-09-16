import React, { Component } from 'react';
import PropsType from 'prop-types';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import RNGooglePlaces from 'react-native-google-places';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PlacesActions from '~/store/modules/places/actions';

import { MapWrappper, SearchPlacesContainer, SearchButton, TextButton } from './styles';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  openSearchModal = () => {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        const { loadPlacesRequest } = this.props

        this.mapView.animateToRegion(place.location, 1000);
        loadPlacesRequest(place);
      })
      .catch(error => console.log(error.message));
  };

  render() {
    const { region, places } = this.props;

    return (
      <MapWrappper
        ref={(ref) => this.mapView = ref}
        provider={PROVIDER_GOOGLE}
        region={{
          ...region,
          latitudeDelta: 0.0103,
          longitudeDelta: 0.0094,
        }}
        showsUserLocation
        loadingEnabled
      >
        {places.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
            title={marker.name}
            description={marker.vicinity}
          />
        ))}
        <SearchPlacesContainer>
          <SearchButton onPress={this.openSearchModal}>
            <TextButton>Buscar um novo endereço</TextButton>
          </SearchButton>
        </SearchPlacesContainer>
      </MapWrappper>
    );
  }
}

MapContainer.propsType = {
  region: PropsType.object.isRequired,
  places: PropsType.array.isRequired
}

const mapStateToProps = state => ({
  places: state.places.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlacesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
