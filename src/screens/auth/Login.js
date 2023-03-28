import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {CustomInput1, CustomInput2} from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useForm} from 'react-hook-form';
import {ROUTES} from '../../components/configs';

export default function ({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View className="flex-1 w-screen h-full bg-white">
      <View className="w-[330] h-[60] top-[80] items-center justify-center mx-3">
        <Image
          source={{
            uri: 'https://barbazampc.coop/wp-content/uploads/2019/11/coop-logo.png',
          }}
          className="w-full h-full"
          resizeMode="cover"
          resizeMethod="scale"
        />
      </View>

      <View className="items-center justify-center top-20">
        <View className="my-5 items-center justify-center">
          <Text className="font-bold text-center text-base">Welcome</Text>
          <Text className="font-bold text-center text-xs">
            By signing in you are agreeing our Terms and Privacy Policy.
          </Text>
        </View>

        <View className="w-[90%] h-fit">
          <View className="h-[80]">
            <CustomInput1
              name="email"
              placeholder="Email Address"
              label="Email Address"
              control={control}
              rules={{required: 'Email Address is required'}}
              errorStyle="w-fit mt-[-20] mb-[20] bg-white"
            />
          </View>
          <View className="h-[80]">
            <CustomInput1
              name="password"
              placeholder="Password"
              label="Password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should minimum 8 characters long',
                },
              }}
              secureTextEntry={true}
              errorStyle="w-fit mt-[-20] mb-[20] bg-white"
            />
          </View>

          <View className="items-center justify-center">
            <View className="place-items-center justify-items-center w-[60%] h-[40]">
              <CustomButton
                text={isLoading ? 'Loading . . .' : 'Login'}
                disabled={isLoading}
                // text={'Login'}
                type="LOGIN"
                icon="sign-in-alt"
                size={20}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
