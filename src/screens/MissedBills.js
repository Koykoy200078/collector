import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CustomInput1} from '../components/CustomInput';
import ModalPopup from '../components/ModalPopup';
import {useForm} from 'react-hook-form';
import FlashList from '@shopify/flash-list/dist/FlashList';

import moment from 'moment';

export default function ({navigation, route}) {
  const {missedcount} = route.params;
  const [viewAccount, setViewAccount] = useState(false);

  const date = moment().format('DD MMMM YYYY');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      pay: '',
      password: '',
    },
  });

  function viewInfo(viewAccount) {
    return (
      <ModalPopup
        visible={viewAccount}
        modalStyle="w-[90%] max-h-[65%] rounded-md bg-white z-20">
        <View className="h-fit w-fit">
          <View className="flex-row h-[30] items-center justify-between">
            <View />
            <View className="justify-between items-end mr-2">
              <TouchableOpacity onPress={() => setViewAccount(false)}>
                <Icon name="times" size={23} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-fit h-fit items-start justify-center p-1">
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Name</Text>
              </View>
              <View>
                <Text className="flex-shrink">Christian Franc M. Carvajal</Text>
              </View>
            </View>
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Address</Text>
              </View>
              <View>
                <Text className="flex-shrink">
                  6214, Guihulngan City Neg. Or.
                </Text>
              </View>
            </View>
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Due-date</Text>
              </View>
              <View>
                <Text className="flex-shrink">28 March 2023</Text>
              </View>
            </View>
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Unpaid balance</Text>
              </View>
              <View>
                <Text className="flex-shrink">₱ 1,000,000,000</Text>
              </View>
            </View>
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Penalty balance</Text>
              </View>
              <View>
                <Text className="flex-shrink">₱ 100</Text>
              </View>
            </View>
            <View className="flex-row p-1">
              <View className="w-[37%]">
                <Text className="flex-shrink font-bold">Total balance</Text>
              </View>
              <View>
                <Text className="flex-shrink">₱ 1,000,000,100</Text>
              </View>
            </View>
          </View>

          <View className="flex-row w-fit h-fit items-start justify-center p-2 ">
            <View className="w-[50%] h-[40%] items-start justify-center mx-2">
              <TextInput placeholder="100" className="w-full h-full border-b" />
            </View>

            <TouchableOpacity className="mt-3">
              <View className="w-[100%] items-center justify-center bg-blue-600 p-2 rounded-md">
                <Text className="text-base font-bold text-white w-[100] text-center">
                  Pay
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup>
    );
  }

  const renderHeader = () => {
    return (
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View className="flex-row items-center p-2 flex-shrink">
            <Icon name="chevron-left" size={23} color="#fff" />
            <Text className="text-white font-bold ml-2">Go back</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('filter')}>
          <View className="flex-row items-center p-2 flex-shrink">
            <Icon name="filter" size={23} color="#fff" />
            <Text className="text-white font-bold ml-2">Filter Lists</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View className="flex-row min-w-[100%] h-fit rounded-md bg-white my-2 p-2">
        <View className="w-[60%]">
          <View>
            <Text
              className="text-base text-black font-bold flex-shrink"
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.name}
            </Text>
          </View>
          <View className="mt-[-5]">
            <Text className="text-xm text-black flex-shrink">
              {item.address}
            </Text>
          </View>
          <View className="mt-2">
            <Text
              className="text-sm text-white text-center font-bold w-fit rounded p-2 flex-shrink"
              style={{backgroundColor: date >= item.due ? 'red' : '#4b5563'}}>
              Due: {item.due}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="w-[40%] items-center justify-center ml-[7] border-l-2 border-black">
          <View>
            <Text className="text-base text-black font-bold flex-shrink">
              ₱ {item.total}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView className="w-full h-full bg-[#003D90] p-2">
      <FlashList
        data={missedcount}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize={3}
      />
      {viewInfo(viewAccount, setViewAccount)}
    </SafeAreaView>
  );
}
