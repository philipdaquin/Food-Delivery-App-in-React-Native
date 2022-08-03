import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollViewBase, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { select_restaurant } from '../features/restaurant_slice';
import { remove_from_basket, select_basket_item, select_basket_total } from '../features/backet_slice';
import {XCircleIcon} from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter';


const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(select_restaurant);
  const items = useSelector(select_basket_item);
  const dispatch = useDispatch();
  const [groupItems, setGroupItems] = useState([])
  const total_basket = useSelector(select_basket_total);


  useMemo(() => {
    const group_item = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results
    }, {});

    setGroupItems(group_item)
  }, [items])

  console.log(groupItems)
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-gray-100 shadow bg-white shadow-xs  ">
          <View className="">
            <Text className="text-lg font-bold text-center text-black">Basket</Text>
            <Text className="text-xs font-regular text-center text-gray-500">{restaurant.title}</Text>
          </View>
          <TouchableOpacity 
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon size={50} color={"#00CCBB"}/>
          </TouchableOpacity>
        </View>  
        <View className="bg-white px-4 py-3 items-center flex-row space-x-4 my-5">
          <Image 
            className="h-7 w-7 bg-gray-300 rounded-full p-4"
            source={{uri: "https://links.papareact.com/wru"}}/>
          <Text className="flex-1">Delivery in 50-75</Text>
          <TouchableOpacity>
            <Text className="text-xs text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>      

        <ScrollView className="divide-y divide-gray-200 ">
            {
              Object.entries(groupItems).map(([key, items]) => ( 
                  <View key={key} className="flex-row space-x-4 items-center my-2 px-4 py-3 bg-white">
                    <Text className="text-[#00CCBB] text-left font-normal">{items.length} x </Text>
                    <Image 
                      source={{uri: items[0]?.image}}
                      className="h-12 w-12 rounded-full"
                    />   
                    <Text className="flex-1">{items[0]?.title}</Text>
                    <View className="space-x-3 items-center flex-row">
                      <Text className="font-normal">
                        <Currency quantity={items[0]?.price} currency="GBP"/>
                      </Text>
                      <TouchableOpacity onPress={() => dispatch(remove_from_basket({id: key}))}>
                        <Text className="text-xs text-[#00CCBB]">Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              ))
            }
        </ScrollView>
        
        <View className="bg-white px-4 py-4 pb-28 space-y-4">
          <View className="flex-row justify-between ">
            <Text className="text-xs font-regular text-center text-gray-500">Subtotal</Text>

            <Text className="text-xs font-medium text-center text-gray-400">
              <Currency quantity={-total_basket} currency="GBP"/>
            </Text>
          </View>

          <View className="flex-row justify-between text-xs font-regular text-center text-gray-500">
            <Text className="text-xs font-regular text-center text-gray-500">Delivery Fee</Text>

            <Text className="text-xs font-medium text-center text-gray-400">
              <Currency quantity={items[0]?.price/2} currency="GBP"/>
            </Text>
          </View>
          
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold ">
              <Currency quantity={-total_basket + (items[0]?.price/2)} currency="GBP"/>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingPage")} 
          className="mx-3 mt-6 bg-[#00CCBB] p-4 w-[95%] rounded-lg absolute bottom-7">
          <Text className="items-center flex justify-center text-xl font-bold text-white">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen