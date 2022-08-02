import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const CategoryCard = ({img, title}) => {
  return (
    <TouchableOpacity className="relative mr-2 ">
       <Image source={{uri: img}} className="h-20 w-20 rounded-md"/>
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard