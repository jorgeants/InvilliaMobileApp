import styled from 'styled-components/native';
import { theme } from '~/theme/globalStyle';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: ${theme.primary};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${theme.light};
`;
