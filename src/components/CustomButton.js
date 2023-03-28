import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from './configs';

export default function ({icon, size, onPress, text, type, disabled}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      className="flex-row"
      disabled={disabled}
      onPress={onPress}
      style={[styles[`container_${type}`]]}>
      <View className="mr-[5]">
        <Icon name={icon} size={size} />
      </View>
      <Text style={[styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = new StyleSheet.create({
  // LOGIN
  container_LOGIN: {
    backgroundColor: '#0071BC',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  text_LOGIN: {
    fontWeight: 'bold',
    color: COLORS.light,
  },

  // REGISTER
  container_REGISTER: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  text_REGISTER: {
    fontWeight: 'bold',
    color: COLORS.dark60,
  },

  // SEARCH
  container_SEARCH: {
    backgroundColor: '#0071BC',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '30.5%',

    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  text_SEARCH: {
    fontWeight: 'bold',
    color: COLORS.light,
  },
});
