import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlashList} from '@shopify/flash-list';

export default function ({logo, name, address, buttonLabel, onPress, data}) {
  const renderItem = ({item}) => {
    console.log('item ==> ', item);
    return (
      <View className="mt-1 w-full h-fit">
        <TouchableOpacity onPress={() => console.log(item.title)}>
          <View className="rounded-md p-1 mt-1 flex-row items-center justify-between w-full">
            <View className="items-start justify-center">
              <Text className="text-base font-bold">{item.title}</Text>
            </View>

            <View className="items-end justify-center">
              <Icon name="chevron-right" size={20} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-row p-2">
      <View className="w-[100%] p-2 items-start rounded-md bg-white">
        <View className="flex-row items-center justify-center">
          <Image
            source={{uri: logo}}
            className="w-[50] h-[50]"
            resizeMode="contain"
          />
          <View className="mb-2">
            <Text className="ml-2 text-xl font-bold text-left">{name}</Text>

            <TouchableOpacity onPress={onPress}>
              <View className="ml-2 rounded w-[90%] items-center justify-center bg-[#DA4E4E]">
                <Text className="text-base font-bold text-white">
                  {buttonLabel}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-2 h-[1] w-[100%]" />
        <View className="mt-1 w-full h-[120]">
          <FlashList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            estimatedItemSize={3}
          />
        </View>
      </View>
    </View>
  );
}
