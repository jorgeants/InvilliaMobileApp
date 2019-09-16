import React from 'react';
import PropsType from 'prop-types';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MapWrappper } from './styles';

const MapContainer = ({ region, places }) => {
  return (
    <MapWrappper
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
    </MapWrappper>
  );
}

MapContainer.propsType = {
  region: PropsType.object.isRequired,
  places: PropsType.array.isRequired
}

export default MapContainer;
