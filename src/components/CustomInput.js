import {View, Text, TextInput, Animated, Easing} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import {Controller} from 'react-hook-form';

const CustomInput1 = ({
  label,
  onFocus,

  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,

  errorStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || control._formValues !== undefined ? 1 : 1,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View>
            <TextInput
              className="p-[10] border-[#B9C4CA] border rounded text-base mb-[20] w-[100%] h-[50] text-black"
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              onBlur={event => {
                setIsFocused(false);
                onBlur?.(event);
              }}
              onFocus={event => {
                setIsFocused(true);
                onFocus?.(event);
              }}
            />

            <Animated.View
              className="absolute left-[5] top-[12] px-[8] bg-white rounded"
              style={{
                top: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, -12],
                }),
                transform: [
                  {
                    scale: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [6, 0],
                    }),
                  },
                ],
              }}>
              <Text
                className="text-base font-bold w-[100%]"
                style={{
                  color: isFocused ? '#121212' : '#B9C4CA',
                }}>
                {label}
              </Text>
            </Animated.View>
          </View>

          {error && (
            <View className={errorStyle}>
              <Text className="items-stretch text-red-700">
                {error.message || 'Error'}
              </Text>
            </View>
          )}
        </>
      )}
    />
  );
};

const CustomInput2 = ({
  label,
  onFocus,

  value,
  onChange,

  placeholder,
  secureTextEntry,

  onBlur,
  errorStyle,

  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value !== undefined ? 1 : 1,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused]);
  return (
    <>
      <View>
        <TextInput
          className="p-[10] border-[#B9C4CA] border rounded text-base mb-[20] w-[100%] h-[50] text-black"
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          onBlur={event => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onFocus={event => {
            setIsFocused(true);
            onFocus?.(event);
          }}
        />

        <Animated.View
          className="absolute left-[5] top-[12] px-[8] bg-white rounded"
          style={{
            top: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [12, -12],
            }),
            transform: [
              {
                scale: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                }),
              },
              {
                translateY: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0],
                }),
              },
              {
                translateX: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [6, 0],
                }),
              },
            ],
          }}>
          <Text
            className="text-base font-bold w-[100%]"
            style={{
              color: isFocused ? '#121212' : '#B9C4CA',
            }}>
            {label}
          </Text>
        </Animated.View>
      </View>

      {error && (
        <View className={errorStyle}>
          <Text className="items-stretch text-red-700">
            {error || error.message || 'Error'}
          </Text>
        </View>
      )}
    </>
  );
};

export {CustomInput1, CustomInput2};
