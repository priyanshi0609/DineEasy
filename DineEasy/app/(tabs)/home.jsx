import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import restaurants from "../../store/restaurants";
import { LinearGradient } from 'expo-linear-gradient';
import uploadData from "../../config/bulkupload";

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();
  uploadData();

  const renderRestaurantItem = ({ item, index }) => (
    <TouchableOpacity 
      style={{
        width: width * 0.8,
        marginRight: 20,
        marginLeft: index === 0 ? 20 : 0,
      }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
      activeOpacity={0.9}
    >
      <View className="relative">
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          className="h-48 w-full"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          className="absolute bottom-0 left-0 right-0 h-24"
        />
        <View className="absolute top-3 right-3 bg-black/30 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-medium">⭐ 4.8</Text>
        </View>
        <View className="absolute bottom-4 left-4 right-4">
          <Text className="text-white text-xl font-bold mb-1" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className="text-white/80 text-sm" numberOfLines={1}>
            {item.address}
          </Text>
        </View>
      </View>
      
      <View className="p-5">
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <View className="w-3 h-3 bg-emerald-500 rounded-full mr-2" />
            <Text className="text-emerald-600 text-sm font-medium">
              Open Now
            </Text>
          </View>
          <Text className="text-gray-500 text-sm">
            {item.opening} - {item.closing}
          </Text>
        </View>
        
        <TouchableOpacity className="bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-2xl shadow-lg">
          <Text className="text-black text-center font-bold text-base">
            Reserve Table
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderSpecialItem = ({ item, index }) => (
    <TouchableOpacity 
      style={{
        width: width * 0.7,
        marginRight: 16,
        marginLeft: index === 0 ? 20 : 0,
      }}
      className="rounded-2xl overflow-hidden shadow-lg"
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-1"
      >
        <View className="bg-white rounded-2xl overflow-hidden">
          <View className="relative">
            <Image
              resizeMode="cover"
              source={{ uri: item.image }}
              className="h-32 w-full"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.6)']}
              className="absolute bottom-0 left-0 right-0 h-16"
            />
            <View className="absolute top-3 right-3 bg-red-500 px-3 py-1 rounded-full shadow-md">
              <Text className="text-white text-xs font-bold">30% OFF</Text>
            </View>
            <View className="absolute bottom-3 left-3 right-3">
              <Text className="text-white text-base font-bold" numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          </View>
          
          <View className="p-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-800 text-sm font-semibold">
                  Limited Offer
                </Text>
                <Text className="text-gray-500 text-xs">
                  Valid until tonight
                </Text>
              </View>
              <View className="bg-orange-100 px-3 py-2 rounded-full">
                <Text className="text-orange-600 text-xs font-bold">
                  GRAB NOW
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#f8fafc" },
        Platform.OS == "android" && { paddingBottom: 55 },
        Platform.OS == "ios" && { paddingBottom: 20 },
      ]}
      className="flex-1"
    >
      {/* Enhanced Header */}
      <View className="px-5 py-4">
        <LinearGradient
          colors={['#ffffff', '#f8fafc']}
          className="rounded-3xl shadow-lg p-6"
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              
              <Text className="text-gray-900 text-2xl font-bold mt-1">
                Welcome to DineEasy
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                Find your perfect dining experience
              </Text>
            </View>
            <View className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl items-center justify-center shadow-lg">
              <Text className="text-white text-2xl">🍽️</Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Enhanced Hero Section */}
        <View className="mx-5 mb-8">
          <LinearGradient
            colors={['#ff6b6b', '#ffa500', '#ff8c00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-3xl p-8 shadow-2xl"
          >
            <BlurView
              intensity={Platform.OS === "android" ? 30 : 15}
              tint="light"
              className="rounded-2xl p-6 bg-white/20 backdrop-blur-sm"
            >
              <Text className="text-center text-3xl font-bold text-white mb-3">
                Dine with your loved ones
              </Text>
              <Text className="text-center text-white/90 text-base leading-relaxed mb-4">
                Discover amazing restaurants and book your perfect table in just a few taps
              </Text>
              <TouchableOpacity className="bg-white/30 py-3 px-6 rounded-2xl self-center">
                <Text className="text-white font-bold text-base">
                  Explore Now
                </Text>
              </TouchableOpacity>
            </BlurView>
          </LinearGradient>
        </View>

        {/* Enhanced Special Offers Section */}
        <View className="mb-8">
          <View className="px-5 mb-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-3xl text-gray-900 font-bold">
                Special Offers
              </Text>
              <TouchableOpacity className="bg-orange-100 px-4 py-2 rounded-full">
                <Text className="text-orange-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-600 text-base">
              Exclusive deals you don't want to miss
            </Text>
          </View>

          {restaurants && restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderSpecialItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
              keyExtractor={(item, index) => `special-${index}`}
            />
          ) : (
            <View className="h-40 justify-center items-center">
              <ActivityIndicator size="large" color="#f97316" />
              <Text className="text-gray-500 mt-3 text-base">Loading exclusive offers...</Text>
            </View>
          )}
        </View>

        {/* Enhanced Popular Restaurants Section */}
        <View className="mt-4">
          <View className="px-5 mb-4">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-3xl text-gray-900 font-bold">
                Popular Restaurants
              </Text>
              <TouchableOpacity className="bg-orange-100 px-4 py-2 rounded-full">
                <Text className="text-orange-600 font-semibold">View All</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-600 text-base">
              Top-rated restaurants loved by diners
            </Text>
          </View>

          {restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderRestaurantItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
              keyExtractor={(item, index) => `restaurant-${index}`}
            />
          ) : (
            <View className="h-60 justify-center items-center">
              <ActivityIndicator size="large" color="#f97316" />
              <Text className="text-gray-500 mt-3 text-base">Loading amazing restaurants...</Text>
            </View>
          )}
        </View>

        {/* Quick Stats Section */}
        <View className="px-5 mt-10 mb-6">
          <View className="bg-white rounded-3xl p-6 shadow-lg">
            <Text className="text-xl font-bold text-gray-900 mb-4 text-center">
              Why Choose DineEasy?
            </Text>
            <View className="flex-row justify-around">
              <View className="items-center">
                <View className="w-12 h-12 bg-green-100 rounded-2xl items-center justify-center mb-2">
                  <Text className="text-green-600 text-xl">🏆</Text>
                </View>
                <Text className="text-gray-900 font-bold text-lg">500+</Text>
                <Text className="text-gray-500 text-sm">Restaurants</Text>
              </View>
              <View className="items-center">
                <View className="w-12 h-12 bg-blue-100 rounded-2xl items-center justify-center mb-2">
                  <Text className="text-blue-600 text-xl">⚡</Text>
                </View>
                <Text className="text-gray-900 font-bold text-lg">2 Min</Text>
                <Text className="text-gray-500 text-sm">Quick Booking</Text>
              </View>
              <View className="items-center">
                <View className="w-12 h-12 bg-purple-100 rounded-2xl items-center justify-center mb-2">
                  <Text className="text-purple-600 text-xl">💎</Text>
                </View>
                <Text className="text-gray-900 font-bold text-lg">4.9</Text>
                <Text className="text-gray-500 text-sm">User Rating</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}