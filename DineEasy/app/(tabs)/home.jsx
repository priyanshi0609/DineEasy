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

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  const renderRestaurantItem = ({ item, index }) => (
    <TouchableOpacity 
      style={{
        width: width * 0.75,
        marginRight: 16,
        marginLeft: index === 0 ? 16 : 0,
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      activeOpacity={0.8}
    >
      <View className="relative">
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          className="h-40 w-full"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          className="absolute bottom-0 left-0 right-0 h-20"
        />
        <View className="absolute bottom-2 left-3 right-3">
          <Text className="text-white text-lg font-bold" numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>
      
      <View className="p-4">
        <View className="flex-row items-center mb-2">
          <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          <Text className="text-gray-600 text-sm flex-1" numberOfLines={1}>
            {item.address}
          </Text>
        </View>
        
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-orange-500 text-xs font-medium">
              {item.opening} - {item.closing}
            </Text>
          </View>
          <View className="bg-orange-50 px-2 py-1 rounded-full">
            <Text className="text-orange-600 text-xs font-semibold">
              Book Now
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSpecialItem = ({ item, index }) => (
    <TouchableOpacity 
      style={{
        width: width * 0.6,
        marginRight: 12,
        marginLeft: index === 0 ? 16 : 0,
      }}
      className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl overflow-hidden shadow-md"
      activeOpacity={0.8}
    >
      <View className="relative">
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          className="h-24 w-full opacity-80"
        />
        <View className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-full">
          <Text className="text-white text-xs font-bold">20% OFF</Text>
        </View>
      </View>
      
      <View className="p-3">
        <Text className="text-white text-sm font-bold" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-orange-100 text-xs mt-1" numberOfLines={1}>
          Limited Time Offer
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#fafafa" },
        Platform.OS == "android" && { paddingBottom: 55 },
        Platform.OS == "ios" && { paddingBottom: 20 },
      ]}
      className="flex-1"
    >
      {/* Header */}
      <View className="px-4 py-3">
        <View className="bg-white rounded-2xl shadow-sm p-4 flex-row justify-between items-center">
          <View>
            <Text className="text-gray-500 text-sm">Good Morning!</Text>
            <Text className="text-gray-800 text-lg font-bold">
              Welcome to DineEasy
            </Text>
          </View>
          <View className="w-12 h-12 bg-orange-100 rounded-full items-center justify-center">
            <Text className="text-orange-600 text-xl">🍽️</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Hero Section */}
        <View className="mx-4 mb-6">
          <LinearGradient
            colors={['#ff7e5f', '#feb47b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-2xl p-6 shadow-lg"
          >
            <BlurView
              intensity={Platform.OS === "android" ? 50 : 20}
              tint="light"
              className="rounded-xl p-4 bg-white/20"
            >
              <Text className="text-center text-2xl font-bold text-white mb-2">
                Dine with your loved ones
              </Text>
              <Text className="text-center text-white/90 text-sm">
                Discover amazing restaurants and book your perfect table
              </Text>
            </BlurView>
          </LinearGradient>
        </View>

        {/* Special Discounts Section */}
        <View className="mb-4">
          <View className="px-4 mb-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-gray-800 font-bold">
                Special Offers
              </Text>
              <TouchableOpacity>
                <Text className="text-orange-500 font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-500 text-sm mt-1">
              Limited time deals you don't want to miss
            </Text>
          </View>

          {restaurants && restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderSpecialItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 16 }}
              keyExtractor={(item, index) => `special-${index}`}
            />
          ) : (
            <View className="h-32 justify-center items-center">
              <ActivityIndicator size="large" color="#f97316" />
              <Text className="text-gray-500 mt-2">Loading offers...</Text>
            </View>
          )}
        </View>

        {/* Our Restaurants Section */}
        <View className="mt-6">
          <View className="px-4 mb-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl text-gray-800 font-bold">
                Popular Restaurants
              </Text>
              <TouchableOpacity>
                <Text className="text-orange-500 font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-500 text-sm mt-1">
              Highly rated restaurants near you
            </Text>
          </View>

          {restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderRestaurantItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 16 }}
              keyExtractor={(item, index) => `restaurant-${index}`}
            />
          ) : (
            <View className="h-48 justify-center items-center">
              <ActivityIndicator size="large" color="#f97316" />
              <Text className="text-gray-500 mt-2">Loading restaurants...</Text>
            </View>
          )}
        </View>

        {/* Categories Section */}
        <View className="px-4 mt-8 mb-4">
          <Text className="text-xl text-gray-800 font-bold mb-4">
            Browse by Category
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {[
              { name: 'Fine Dining', emoji: '🍷', color: 'bg-purple-100' },
              { name: 'Fast Food', emoji: '🍔', color: 'bg-yellow-100' },
              { name: 'Cafe', emoji: '☕', color: 'bg-orange-100' },
              { name: 'Bar', emoji: '🍻', color: 'bg-blue-100' },
            ].map((category, index) => (
              <TouchableOpacity
                key={index}
                className={`${category.color} rounded-xl p-4 mb-3`}
                style={{ width: '48%' }}
                activeOpacity={0.7}
              >
                <Text className="text-2xl mb-2">{category.emoji}</Text>
                <Text className="text-gray-700 font-semibold">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}