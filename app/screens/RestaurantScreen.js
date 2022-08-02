import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';
import {ArrowLeftIcon, LocationMarkerIcon, QuestionMarkCircleIcon} from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {params: {
    id, 
    img,
    title, 
    rating, 
    genre,
    address, 
    short_description,
    dishes,
    long, 
    lat 
  }} = useRoute();
  
  useLayoutEffect(() => { 
    navigation.setOptions({ 
        headerShown: false
    })
  }, [])

  return (
    <ScrollView>
      <View classNam="relative">
        <Image source={{ 
            uri: img
        }} className="w-full h-56 bg-gray-300 p-4"/>
      </View>

      <TouchableOpacity 
        onPress={navigation.goBack}
        className="absolute top-5 left-5 bg-gray-100 rounded-full shadow-md p-2">
        <ArrowLeftIcon color={"#00CCBB"} opacity={0.5} size={20} className="font-medium"/>
      </TouchableOpacity>

      <View className="h-[50%] bg-white">
        <View className="px-4 pt-3">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22}/>
                    <Text className="text-green-500">{rating}  
                        <Text className="">• {genre}</Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon color="gray" opacity={0.4} size={18}/>
                    <Text className="text-xs font-medium flex ">
                        Nearby • {address}  
                    </Text>
                </View>
                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300 ">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen