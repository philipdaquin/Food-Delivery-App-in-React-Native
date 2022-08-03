import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {ArrowLeftIcon, PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_basket, remove_from_basket, select_basket_item, select_basket_item_with_id } from '../features/backet_slice';

const DishSelection = ({
    id, 
    title, 
    description, 
    price, 
    image
}) => {

  const [Plus, setPlus] = useState(false);
  const items = useSelector(state => select_basket_item_with_id(state, id));
  const dispatch = useDispatch(); 

  const add_item_basket = () => { 
    dispatch(add_to_basket({ 
        id, 
        title, 
        description, 
        price, 
        image
    }))
  }
  const remove_item_basket = () => { 
    if (!items.length) return ;  
    dispatch(remove_from_basket({ id }))
  }


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
                        source={{uri: image}}/>    
                </View>
            </View>
        </TouchableOpacity>
        {
            Plus &&  (
                <View className ="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity onPress={remove_item_basket}>
                            <MinusCircleIcon color={"#00CCBB"} size={40}
                                // color={items.length > 0 ? "#00CCBB" :  "gray"}
                            />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={add_item_basket}>
                            <PlusCircleIcon 
                                color={"#00CCBB"} 
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) 
        }
    </>
  )
}

export default DishSelection


