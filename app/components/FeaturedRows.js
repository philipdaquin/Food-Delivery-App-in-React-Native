import { View, Text } from 'react-native'
import React from 'react'
import FeaturedCard from './FeaturedCard'

const FeaturedRows = () => {
  return (
    <View className="flex gap-6 pt-2">
      {/* <Text className="h-1 font-bold text-xl px-1"></Text> */}
      {/* <Text className="text-sm font-regular text-gray-400 flex px-1"></Text> */}
      <FeaturedCard id="" title="Offers near you!" description="Why not support your local restaurant tonight!"/>
      <FeaturedCard id="" title="Featured" description="Paid placements from our partners"/>
      <FeaturedCard id="" title="Tasty Discounts" description="Paid placements from our partners"/>
      <FeaturedCard id="" title="Offers near you!" description="Why not support your local restaurant tonight!"/>

    </View>
  )
}

export default FeaturedRows