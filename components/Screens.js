import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Gallery from "./gallery";
import FullImage from "./FullImage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Gallery"
          component={Gallery}
        />
        <Stack.Screen
          name="Full Image"
          options={({ route }) => ({ title: route.params.title })}
          component={FullImage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
