import React from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps';

import { MapWrappper } from './styles';

export default function MapContainer() {
  return (
    <MapWrappper
      provider={PROVIDER_GOOGLE}
      loadingEnabled
      initialRegion={{
        latitude: -22.5502904,
        longitude: -44.115015,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      zoom={16}
    />
  );
}
