import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';
import {
    ArrowLeftIcon, ChevronRightIcon,
    LocationMarkerIcon, QuestionMarkCircleIcon
} from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid';
import DishSelection from '../components/DishSelection';

const RestaurantScreen = () => {
    const navigation = useNavigation();

    const { params: {
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
    } } = useRoute();

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
                }} className="w-full h-56 bg-gray-300 p-4" />
            </View>

            <TouchableOpacity
                onPress={navigation.goBack}
                className="absolute top-5 left-5 bg-gray-100 rounded-full shadow-md p-2">
                <ArrowLeftIcon color={"#00CCBB"} opacity={0.5} size={20} className="font-medium" />
            </TouchableOpacity>

            <View className="bg-white">
                <View className="px-4 pt-3">
                    <Text className="font-bold text-3xl">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-green-500">{rating}</Text>
                            <Text className="text-xs text-gray-500 font-medium">• {genre}</Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <LocationMarkerIcon color="gray" opacity={0.4} size={18} />
                            <Text className="text-xs font-medium flex text-gray-500 ">
                                Nearby • {address}
                            </Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4 text-left">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300 ">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                    <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                    <ChevronRightIcon color={"#00CCBB"} size={16}/>
                </TouchableOpacity>
            </View>

            <Text className= "font-bold text-xl p-4 mt-1">Menu</Text>

            <DishSelection 
                id={1}
                title={"Peri-Peri Chicken"}
                description={"Crunchy almonds, cachews and macadamia nuts in a fiery PERi-PERi seasoning. Serves 2-3 "}
                price={4}
                image={"https://foodiesterminal.com/wp-content/uploads/2019/08/just-like-nandos-peri-peri-chicken.jpg"}
            />


        </ScrollView>
    )
}

export default RestaurantScreen