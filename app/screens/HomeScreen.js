import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import {ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Welcome insert username here 👋",
            headerShown: false
        })

    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="px-2 flex-row pb-3 items-center space-x-2">
                <Image source={{ uri: 'https://links.papareact.com/wru'}}
                    className="p-4 w-7 h-7 bg-gray-300 rounded-full"/>
                <View className = "flex-1">
                    <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-xl flex items-center">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" className=""/>
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" className="flex"/>
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-2">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 px-3 items-center">
                    <SearchIcon color="gray" size={20}/>
                    <TextInput 
                        placeholder='Search Restaurants and cuisines' 
                        className="w-[100%] py-3  rounded-sm text-md font-medium outline-none border-none"
                    />
                </View>
                <AdjustmentsIcon size={35} color="#00CCBB"/>
            </View>
            <ScrollView 
                className="bg-gray-100 mx-2"
                contentContainerStyle ={{ 
                    paddingBottom: 100
                }}>   
                {/* Component  */}
                <Categories/>
   
                {/* Featured Items */}
                <FeaturedRows/>
            </ScrollView>
        </SafeAreaView>
    )
}
