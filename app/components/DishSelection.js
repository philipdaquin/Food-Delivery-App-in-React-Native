import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {ArrowLeftIcon, PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter';

const DishSelection = ({
    id, 
    title, 
    description, 
    price, 
    image
}) => {

  const [Plus, setPlus] = useState(false)  
  const [Orders, setOrders] = useState(0);

  return (
    <>
        <TouchableOpacity 
            onPress={() => setPlus(!Plus)} 
            className={`bg-white p-4 border border-gray-200 ${Plus && "border-b-0"}`}
        >
            <View className="flex-row">
                <View className = "flex-1 pr-1">
                    <Text className="font-medium text-lg mb-1">{title}</Text>
                    <Text className="text-xs text-gray-500 ">{description}</Text>
                    <Text className ="text-gray-400 mt-2 font-medium">
                        <Currency quantity={price} currency="GBP"/>
                    </Text>
                </View>
                <View>
                    <Image 
                        className="h-20 w-20 bg-gray-300 p-4"
                        style={{
                            borderWidth: 1,
                            borderColor: "#F3F3F4"
                        }}
                        sources={{uri: {image}}}/>    
                </View>
            </View>
        </TouchableOpacity>
        {
            Plus &&  (
                <View className ="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity >
                            <MinusCircleIcon color={"#00CCBB"} size={40}
                                // color={items.length > 0 ? "#00CCBB" :  "gray"}
                            />
                        </TouchableOpacity>
                        <Text>{Orders}</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <PlusCircleIcon color={"#00CCBB"} size={40}/>
                        </TouchableOpacity>
                    </View>
                </View>
            ) 
        }
    </>
  )
}

export default DishSelection


