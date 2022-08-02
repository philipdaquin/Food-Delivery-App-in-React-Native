import { View, Text, Image, ViewBase, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
const FeaturedCard = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="text-lg font-bold">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        {/* Subtitle */}
        <Text className="px-4 text-sm font-regular text-gray-400 flex ">{description}</Text>
        
        {/* Items */}
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            <View className = "flex-row ">
                <RestaurantCard 
                    id={123}
                    img={"https://assets.nandos.com.au/Nandos-Australia/images/Group-Shot-2-Eat-Healthy-For-under-500-calaries-COMP-H-1500x1500.jpg"}
                    title={"Nando's"} 
                    rating ={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={""}
                    dishes={""}
                    long={""}
                    lat ={""}
                />
                <RestaurantCard 
                    id={123}
                    img={"https://assets.nandos.com.au/Nandos-Australia/images/Group-Shot-2-Eat-Healthy-For-under-500-calaries-COMP-H-1500x1500.jpg"}
                    title={"Nando's"} 
                    rating ={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={""}
                    dishes={""}
                    long={""}
                    lat ={""}
                />
                <RestaurantCard 
                    id={123}
                    img={"https://assets.nandos.com.au/Nandos-Australia/images/Group-Shot-2-Eat-Healthy-For-under-500-calaries-COMP-H-1500x1500.jpg"}
                    title={"Nando's"} 
                    rating ={4.8}
                    genre={"Offers"}
                    address={"Clink Street"}
                    short_description={""}
                    dishes={""}
                    long={""}
                    lat ={""}
                />
             
            </View>

        </ScrollView>
    </View>
    
    

  )
}

export default FeaturedCard