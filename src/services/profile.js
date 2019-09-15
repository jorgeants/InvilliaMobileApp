import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@viabrasil:profile';

export const getProfile = async () => {
  const profile = await AsyncStorage.getItem(TOKEN_KEY);
  return JSON.parse(profile);
};

export const saveProfile = async (profile) => {
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(profile));
};

export const removeProfile = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};
