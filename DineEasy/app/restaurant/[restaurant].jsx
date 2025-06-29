import { View,Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";



export default function Restaurant(){
    const {restaurant} =useLocalSearchParams();
    return(
        <SafeAreaView
           style={[
            {backgroundColor:"2b2b2b"}
           ]}>
            <Text>
               {restaurant}
            </Text>

        </SafeAreaView>
           
    )
}