import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discovermovie from "./src/Page/DiscoverMovie";
import Watchedlist from "./src/Page/WatchedList";
import Favourite from "./src/Page/Favourite";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Discover") {
                iconName = focused ? "apps-sharp" : "apps-outline";
              } else if (route.name === "Watched") {
                iconName = focused ? "ios-list-circle" : "ios-list";
              } else if (route.name === "Favourite") {
                iconName = focused ? "bookmark-outline" : "bookmark";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Discover" component={Discovermovie} />
          <Tab.Screen name="Watched" component={Watchedlist} />
          <Tab.Screen name="Favourite" component={Favourite} />
        </Tab.Navigator>
      </NavigationContainer>

      <ExpoStatusBar style="auto" />
    </Provider>
  );
}
