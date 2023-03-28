import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function () {
  const SizesWidth = Dimensions.get('window').width;
  return (
    <View className="w-screen h-fit items-start justify-center bg-[#003D90] mt-10">
      <View className="flex-row p-2 w-full justify-around">
        <View className="w-[50%] items-start place-content-start justify-center">
          <TouchableOpacity>
            <Icon name="bars" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View className="w-[50%] items-end place-content-end justify-center">
          <TouchableOpacity>
            <Icon name="sign-out-alt" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row p-2">
        <View className="w-[100%] justify-evenly items-center border rounded bg-yellow-400">
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://www.iconfinder.com/icons/403019/download/png/512',
              }}
              className="w-[100] h-[100] mt-2"
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View className="flex-col w-full h-fit mt-3 items-center justify-center rounded-b bottom-3 bg-yellow-400">
            <Text className="text-xl font-bold text-center text-black">
              Koykoy200078
            </Text>
            <Text className="text-xm font-bold text-center text-black">
              Collector
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
