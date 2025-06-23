import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../../assets/colors";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.light.tabIconDefault,
                tabBarStyle: {
                    backgroundColor: Colors.light.surface,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    borderTopWidth: 1,
                    borderTopColor: Colors.light.border,
                    shadowColor: Colors.light.shadow,
                    shadowOffset: { width: 0, height: -3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 8,
                    paddingBottom: 25,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 2,
                },
                tabBarIconStyle: {
                    marginTop: 2,
                }
            }}
        >
            <Tabs.Screen 
                name='home' 
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            name="restaurant-outline" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='history' 
                options={{
                    title: "History",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            name="time-outline" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name='profile' 
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            name="person-outline" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabLayout;