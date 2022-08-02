import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import {} from 'react-native-heroicons/'
const DishSelection = () => {
  return (
    <View className="bg-white">
        <View className = "ml-4">
            <Image sources={"https://media-cdn.tripadvisor.com/media/photo-s/13/80/cc/e5/peri-peri-nuts.jpg"}/>
            <Text className="font-medium text-lg ">Peri-Peri Nuts</Text>
            <Text className="text-xs text-gray-500 ">Crunchy almonds, cachews and macadamia nuts in a fiery 
                PERi-PERi seasoning. Serves 2-3 
            </Text>
        </View>
        <Text>$3.75</Text>

        <View>
            <Button></Button>
        </View>
    </View>
  )
}

export default DishSelection