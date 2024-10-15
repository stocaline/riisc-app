import JsonView from '@/components/JsonView';
import { icons } from '@/constants';
import { Form } from '@/types/type';
import { router, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ViewForm() {
  const { formData } = useLocalSearchParams();
  const data: Form = JSON.parse(formData as string)
  console.log(data)

  function handleBack() {
    router.back()
  };

  return (
    <SafeAreaView>
      <JsonView data={data} />
      <View className='w-full justify-center items-center'>
        <TouchableOpacity onPress={handleBack} className="flex-row items-center rounded-full gap-1 px-4 py-2 bg-slate-300">
          <Image source={icons.backArrow} className='w-4 h-4' />
          <Text className='text-neutral-500'>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

