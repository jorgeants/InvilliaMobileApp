import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@invilliamobileapp:token';

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};

export const isAuthenticated = async () => {
  const token = await getToken();
  return token !== null;
};

export const saveToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};
