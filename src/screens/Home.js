import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/layouts/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ROUTES} from '../components/configs';

export default function ({navigation}) {
  return (
    <>
      <Header />

      <View className="flex-row p-2 bg-[#003D90]">
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.DUE_DATE)}>
          <View className="w-[100%] p-2 items-start border rounded bg-white">
            <View className="flex-row items-center justify-center">
              <Image
                source={{
                  uri: 'https://www.iconfinder.com/icons/2682803/download/png/512',
                }}
                className="w-[50] h-[50]"
                resizeMode="contain"
              />
              <View className="w-[85%]">
                <Text className="ml-1 text-base font-bold text-center">
                  You have 1 missed bills, review here.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="w-screen h-fit items-center justify-center bg-[#003D90]">
          <View className="flex-row p-2 mt-3">
            <View className="w-[100%] p-2 items-start border rounded bg-white">
              <View className="flex-row items-center justify-center">
                <Image
                  source={{
                    uri: 'https://www.iconfinder.com/icons/2620522/download/png/512',
                  }}
                  className="w-[50] h-[50]"
                  resizeMode="contain"
                />
                <View className="mb-2">
                  <Text className="ml-2 text-xl font-bold text-left">
                    Due-date Accounts
                  </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.DUE_DATE)}>
                    <View className="ml-2 rounded w-[90%] items-center justify-center bg-[#DA4E4E]">
                      <Text className="text-base font-bold text-white">
                        View More
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="border-2 h-[1] w-[100%]" />
              <View className="my-2">
                <Text className="text-base font-bold">Account Name</Text>
                <Text className="text-base font-bold">Account Number</Text>
                <Text className="text-base font-bold">Due Date</Text>
              </View>
            </View>
          </View>

          <View className="flex-row p-2 mt-3">
            <View className="w-[100%] p-2 items-start border rounded bg-white">
              <View className="flex-row items-center justify-center">
                <Image
                  source={{
                    uri: 'https://www.iconfinder.com/icons/897245/download/png/512',
                  }}
                  className="w-[50] h-[50]"
                  resizeMode="contain"
                />
                <View className="mb-2">
                  <Text className="ml-2 text-xl font-bold text-left">
                    Unpaid Accounts
                  </Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.DUE_DATE)}>
                    <View className="ml-2 rounded w-[90%] items-center justify-center bg-[#DA4E4E]">
                      <Text className="text-base font-bold text-white">
                        View More
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="border-2 h-[1] w-[100%]" />
              <View className="my-2">
                <Text className="text-base font-bold">Account Name</Text>
                <Text className="text-base font-bold">Account Number</Text>
                <Text className="text-base font-bold">Due Date</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
