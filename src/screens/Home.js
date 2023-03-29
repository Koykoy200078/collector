import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/layouts/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {IMAGES, ROUTES} from '../components/configs';
import Cards from '../components/layouts/Cards';

export default function ({navigation}) {
  const aa = [
    {
      id: 1,
      title: 'AaA',
    },
    {
      id: 2,
      title: 'BbB',
    },
    {
      id: 3,
      title: 'CcC',
    },
    {
      id: 4,
      title: 'DdD',
    },
  ];
  const slicedData = aa.slice(0, 3);

  return (
    <View className="w-full h-full bg-[#003D90]">
      <View>
        <Header />
      </View>

      <TouchableOpacity>
        <View className="w-full h-[45] p-2 flex-row items-center justify-center">
          <Image
            source={{
              uri: IMAGES.warning,
            }}
            className="w-[30] h-[30]"
            resizeMode="contain"
          />

          <View className="w-[85%]">
            <Text className="ml-1 text-base font-bold text-center text-white">
              You have 1 missed bills, review here.
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Cards
            logo={IMAGES.dueDate_image}
            name="Due-date Accounts"
            buttonLabel="View More"
            data={slicedData}
            onPress={() => navigation.navigate(ROUTES.DUE_DATE)}
          />

          <Cards
            logo={IMAGES.unpaidBalance_image}
            name="Unpaid Balance Accounts"
            buttonLabel="View More"
            data={slicedData}
            onPress={() => navigation.navigate(ROUTES.DUE_DATE)}
          />
        </ScrollView>
      </View>
    </View>
  );
}
