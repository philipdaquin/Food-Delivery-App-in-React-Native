import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import CategoryCard from './CategoryCard'



const Categories = () => {
  return (
    <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15, 
        paddingTop: 10 
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}>

      {/* Category Cards  */}
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>
      <CategoryCard img="https://links.papareact.com/wru" title="testing new feature"/>

    </ScrollView>

  )
}

export default Categories