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

export default function () {
  const [viewAccount, setViewAccount] = useState(false);
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

  const renderItem = ({item}) => {
    return (
      <View className="w-[100%] h-[50] items-start rounded bg-white my-2">
        <View className="flex-row items-center justify-between w-[100%]">
          <View className="p-2">
            <View className="">
              <Text className="text-base text-black font-bold flex-shrink">
                {item.title}
              </Text>
            </View>
            <View className="mt-[-5]">
              <Text className="text-xm text-black flex-shrink">
                6214, Guihulngan City
              </Text>
            </View>
            <View className="">
              <Text className="text-sm text-white text-center font-bold bg-gray-600 w-fit rounded p-2 flex-shrink">
                Due: 28 March 2023
              </Text>
            </View>
          </View>

          <View className="p-2 items-end justify-center">
            <Text className="text-base text-black font-bold flex-shrink">
              ₱ 1,000,000,000
            </Text>
          </View>
        </View>

        <View className="p-1 w-[100%]">
          <View className="border-2 h-[1] w-[100%]" />
        </View>

        <View className="flex-row w-[100%] items-end justify-between">
          <View />
          <View className="flex-row mx-2 h-[35] mt-[-5] items-center justify-center">
            <TouchableOpacity onPress={() => setViewAccount(true)}>
              <View className="flex-row">
                <Text className="text-sm text-black font-bold mr-2 flex-shrink">
                  Next
                </Text>
                <Icon name="chevron-right" size={20} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView className="w-full h-full items-center justify-center bg-[#003D90] p-2">
      <FlashList
        data={aa}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize={3}
      />
      {viewInfo(viewAccount, setViewAccount)}
    </SafeAreaView>
  );
}
