import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';
import AnimatedRegion from 'react-native-maps';

export const MapWrappper = styled(AnimatedRegion)`
  flex: 1;
`;

export const SearchPlacesContainer = styled.View`
  height: 60px;
  position: relative;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 15px 25px;
  background-color: ${theme.primary};
  border-radius: 6px;
  margin: 0 20px;
  position: absolute;
  top: 50px;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: ${theme.light};
  font-weight: 700;
  top: 50px;
  left: 25px;
`;
