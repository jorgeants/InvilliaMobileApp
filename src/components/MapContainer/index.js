import React from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps';

import { MapWrappper } from './styles';

export default function MapContainer({ region }) {
  return (
    <MapWrappper
      provider={PROVIDER_GOOGLE}
      region={{
        ...region,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }}
      showsUserLocation
      loadingEnabled
    />
  );
}
