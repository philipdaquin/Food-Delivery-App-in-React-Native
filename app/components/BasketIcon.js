import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { select_basket_item, select_basket_total } from '../features/backet_slice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';


const BasketIcon = () => {
  const items = useSelector(select_basket_item);
  const navigation = useNavigation();
  const basket_total = useSelector(select_basket_total);

  return (
      <View className="mx-5 bg-[#00CCBB] py-5 w-[95%] rounded-lg shadow-md absolute bottom-10 z-50 ">
        <TouchableOpacity 
          onPress={() => { 
            navigation.navigate("Basket", {})
          }}
          className=" rounded-md 
            space-x-4
            px-5 
            items-center 
            flex-row 
            justify-between 
            font-medium 
            text-md text-white
            ">
          
          <Text className="text-white 
            font-extrabold rounded-md 
            text-lg shadow-inner 
            bg-[#01A296] 
            px-3 py-1 ">{items.length}</Text>
          <Text className="flex-1 text-white font-extrabold text-lg">View Basket</Text>
          <Text className="text-white font-extrabold text-lg">
            <Currency quantity={-basket_total} currency="GBP"/>
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default BasketIcon