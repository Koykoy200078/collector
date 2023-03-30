import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/layouts/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {IMAGES, ROUTES} from '../components/configs';
import Cards from '../components/layouts/Cards';
import moment from 'moment';

export default function ({navigation}) {
  const date = moment().format('DD MMMM YYYY');

  const aa = [
    {
      id: 1,
      name: 'Christian Franc M. Carvajal',
      address: '6214, Guihulngan City, Negros Oriental',
      due: '28 March 2023',
      unpaid: '1,000',
      penalty: '100',
      total: '1,100',
    },
    {
      id: 2,
      name: 'Koykoy200078',
      address: '6214, Guihulngan City, Negros Oriental',
      due: '30 March 2023',
      unpaid: '1,000',
      penalty: '10',
      total: '1,100',
    },
    {
      id: 3,
      name: 'Cristian',
      address: '6214, Guihulngan City, Negros Oriental',
      due: '1 February 2023',
      unpaid: '10,000',
      penalty: '15',
      total: '10,015',
    },
    {
      id: 4,
      name: 'CrisTian',
      address: '6214, Guihulngan City, Negros Oriental',
      due: '7 April 2023',
      unpaid: '100',
      penalty: '1',
      total: '101',
    },
    {
      id: 5,
      name: 'Cris',
      address: '6214, Guihulngan City, Negros Oriental',
      due: '7 October 2023',
      unpaid: '100',
      penalty: '1',
      total: '101',
    },
  ];
  const slicedData = aa.slice(0, 3);

  const missedcount = aa.filter(item => {
    const dueDate = item.due;
    return date >= dueDate;
  });

  const length = missedcount.length;

  return (
    <View className="w-full h-full bg-[#003D90]">
      <View>
        <Header />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.MISSBILL, {missedcount})}>
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
              You have {length} missed bills, review here.
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
            onPress={() => navigation.navigate(ROUTES.DUE_DATE, {aa})}
          />

          <Cards
            logo={IMAGES.unpaidBalance_image}
            name="Unpaid Balance Accounts"
            buttonLabel="View More"
            data={slicedData}
            onPress={() => navigation.navigate(ROUTES.DUE_DATE, {aa})}
          />
        </ScrollView>
      </View>
    </View>
  );
}
