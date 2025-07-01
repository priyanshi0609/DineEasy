import { View,Text, Platform, ScrollView } from "react-native";
import React ,{use, useState, useEffect,useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { db } from "../../config/firebaseConfig";
import { collection, query, where,getDocs } from "firebase/firestore";




export default function Restaurant(){
    const {restaurant} =useLocalSearchParams();
    const [restaurantData, setRestaurantData] = useState({});
    const [carouselData, setCarouselData] = useState({});
    const[slotsData,setSlotsData] = useState({});
    
    const getRestaurantData = async () => {
        try{
            const restaurantQuery= query(collection(db,"restraunts"),where("name","==",restaurant));
            const restaurantSnapshot= await getDocs(restaurantQuery);
            if(restaurantSnapshot.empty){
               console.log("No matching restaurant found");
               return;
            } 

            for (const doc of restaurantSnapshot.docs){
                const restaurantData= doc.data();
                setRestaurantData(restaurantData);

                const carouselQuery = query(collection(db,"carousel"),where("res_id","==",doc.ref));
                const carouselSnapshot= await getDocs(carouselQuery);

                const carouselImages=[];
                if(carouselImages.length === 0){
                    console.log("No carousel images found for this restaurant");
                    return;
                }
                carouselSnapshot.forEach((carousalDoc)=>{
                    carouselImages.push(carousalDoc.data());

                });
                

                setCarouselData(carouselImages);

                const slotsQuery= query(collection(db,"slots"),where("res_id","==",doc.ref));
                const slotsSnapshot= await getDocs(slotsQuery);
                const slotsData = [];
                if(slotsData.length === 0){
                    console.log("No slots data found for this restaurant");
                    return;
                }
                slotsSnapshot.forEach((slotDoc) => {
                    slotsData.push(slotDoc.data());
                });
                
                setSlotsData(slotsData);
                    
              }
                
            
        }
        catch(error){
            console.error("Error fetching restaurant data:", error);
        }
    }

    useEffect(() => {
        getRestaurantData();
    },[])
    console.log( restaurantData);
    console.log( carouselData);
    console.log( slotsData);

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