import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discovermovie from './DiscoverMovie';
import Watchedlist from './WatchedList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name='Discover' component={Discovermovie} />
          <Tab.Screen name='Watched' component={Watchedlist} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
