import { View,Text, Platform, ScrollView } from "react-native";
import React ,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";



export default function Restaurant(){
    const {restaurant} =useLocalSearchParams();
    const [restaurantData, setRestaurantData] = useState({});
    const[carouselData, setCarouselData] = useState({});
    const[slotsData,setSlotsData] = useState({});


    return(
        <SafeAreaView
           style={[
            {backgroundColor:"#2b2b2b" },
            Platform.OS =="android" && {paddingBottom: 55},
            Platform.OS =="ios" && {paddingBottom: 20},
           ]}
        >
            <ScrollView className="h-full">
                <View className="flex-1 my-2 p-2">
                   <Text className="text-xl text-[#f49b33] mr-2 font-semibold">
               {restaurant}
            </Text> 
            <View className="border-b border-[#f49b33] my-2"/>
                </View>
            </ScrollView>
         </SafeAreaView>
           
    )
}