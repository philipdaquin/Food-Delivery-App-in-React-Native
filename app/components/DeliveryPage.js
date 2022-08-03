import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { select_restaurant } from '../features/restaurant_slice';
import {XIcon} from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'


const DeliveryPage = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(select_restaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
            <View className=" flex-row justify-between mx-4 mt-7 items-center">      
                <TouchableOpacity>
                    <XIcon color={"white"} onPress={() => navigation.navidate("Home")}/>
                </TouchableOpacity>
                <Text className="text-white text-lg font-normal">Order Help</Text>
            </View>

            <View className="p-6 mx-5 my-4 z-50  bg-white shadow-sm rounded-md ">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-4xl font-bold">44-55 Minutes</Text>
                    </View>
                    <Image
                        source={{
                            uri: "https://links.papareact.com/fls"
                        }}
                        className="h-20 w-20"
                    />
                </View>
                <Progress.Bar indeterminate={true} width={200} color="#00CCBB"/>
                <Text className="mt-3 text-gray-500">
                    You order at {restaurant.title} is being prepared
                </Text>
            </View>
        </SafeAreaView>
        {/* Map */}
        
    </View>
  )
}

export default DeliveryPage