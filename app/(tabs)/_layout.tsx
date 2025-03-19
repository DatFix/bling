import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { Tabs } from 'expo-router'
import { COLORS } from '@/constants/theme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0,
                    height: 40,
                    paddingBottom: 8
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => <FontAwesome name="home" size={size} color={color} />),
                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => <Ionicons name="bookmark-sharp" size={size} color={color} />),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => <Ionicons name="add-circle" size={size} color={COLORS.primary} />),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => <Ionicons name="heart" size={size} color={color} />),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => <FontAwesome6 name="circle-user" size={size} color={color} />),
                }}
            />

        </Tabs>
    )
}

export default TabLayout