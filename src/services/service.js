import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@invilliamobileapp:currentService';

export const getCurrentServiceOnStorage = async () => {
  const service = await AsyncStorage.getItem(TOKEN_KEY);
  return JSON.parse(service);
};

export const hasCurrentService = async () => {
  const service = await getCurrentServiceOnStorage();
  return service !== null;
};

export const persistService = async service => {
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(service));
};

export const destroyService = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};
