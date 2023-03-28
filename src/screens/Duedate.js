import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function () {
  return (
    <View className="w-full h-full items-center justify-center bg-[#003D90] p-2">
      <View className="w-[100%] h-fit items-start border rounded bg-white">
        <View className="flex-row items-center justify-between w-[100%]">
          <View className="p-2">
            <Text className="text-base text-black font-bold">
              6214, Guihulngan City
            </Text>
            <Text className="text-base text-black font-bold">
              Christian Franc Carvajal
            </Text>
            <Text className="text-sm text-white text-center font-bold bg-gray-600 w-fit rounded p-2">
              Due: 28 March 2023
            </Text>
          </View>

          <View className="p-2 items-end justify-center">
            <Text className="text-xl text-black font-bold">₱ 1000</Text>
          </View>
        </View>

        <View className="p-2 w-[100%]">
          <View className="border-2 h-[1] w-[100%]" />
        </View>

        <View className="flex-row w-[100%] items-end justify-between">
          <View />
          <View className="flex-row mx-2">
            <Text className="text-sm text-black font-bold">Mark as paid?</Text>
            <TouchableOpacity>
              <View className="ml-10">
                <Text>Paid</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
