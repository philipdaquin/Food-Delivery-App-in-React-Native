import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingPage = () => {
  const navigation = useNavigation();

  useEffect(() => { 
    // After couple seconds switch to the next screen 
    setTimeout(() => { 
        navigation.navigate("DeliveryPage")
    }, 5000)
  })


  return (
    <SafeAreaView className="bg-[#00CCBB] justify-center flex-1 items-center">
        <Animatable.Image 
            source={require("../assets/loading.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-96 w-96"
        />
        <Animatable.Text 
            animation="fadeInUp"
            iterationCount={1}
            iterationDelay={1000}
            className="text-white font-bold text-center text-lg my-10 "
        >
            Waiting for the Restaurant to accept your order!
        </Animatable.Text>
        {/* <Progress.Circle 
            size={60} 
            indeterminate={true} 
            color="white"
            fill="None"
            thickness={4}
        /> */}
        <Animatable.View
            animation="fadeIn"
            iterationCount={1}
            iterationDelay={2000}
        >
        <Progress.Bar indeterminate={true} width={300} color="white"/>
        </Animatable.View>

    </SafeAreaView>
  )
}

export default PreparingPage