import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';
import { Dimensions } from 'react-native';

const deviceWidth = `${Dimensions.get('window').width}px`;

export const Frame = styled.View`
  width: ${deviceWidth};
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.secondary};
`;

export const ImageContainer = styled.View`
  margin: 0 0 30px 0;
`;

export const Description = styled.Text`
  color: ${theme.light};
  font-size: 24px;
  padding: 0 20px;
  margin: 30px 0;
  text-align: center;
  line-height: 28px;
`;

export const Button = styled.TouchableOpacity`
  padding: 15px 25px;
  background-color: ${theme.primary};
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: ${theme.light};
  font-weight: 700;
`;

export const Pagination = styled.View`
  padding: 0 100px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Page = styled.View`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 5px;
  border: 2px solid #FFF;
  justify-content: space-around;
  background-color: ${props => (props.active ? '#FFF' : 'transparent')};
`;
