import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid'
import {LocationMarkerIcon} from 'react-native-heroicons/outline'

const RestaurantCard = ({ 
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
}) => {
  return (
    <TouchableOpacity className="bg-white mr-2 shadow-md">
        {/* <View className= "bg-white p-28 mr-2"> */}
            <Image source={{uri: img}} className="h-36 w-64 rounded-sm" />
        {/* </View> */}
        <View className="p-3 ">
            <Text className="font-bold text-lg">{title}</Text>
            <View className="flex-row space-x-1">
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="text-xs font-medium flex items-center text-gray-500">
                    <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
            </View>
            <View className="flex-row space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22}/>
                <Text className="text-xs font-medium flex items-center text-gray-500">
                    Nearby • {address}  
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard