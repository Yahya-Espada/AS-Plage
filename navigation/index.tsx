

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import ManageBooking from "../screens/ManageBooking";
import AccountManagement from "../screens/AccountManagement";
import VisualizePositions from "../screens/VisualizePositions";
import MakeClaim from "../screens/MakeClaim";
import HomePage from "../screens/HomePage";

import { RootStackParamList } from "../types";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ManageBooking" component={ManageBooking} />
      <Stack.Screen name="AccountManagement" component={AccountManagement} />
      <Stack.Screen name="VisualizePositions" component={VisualizePositions} />
      <Stack.Screen name="MakeClaim" component={MakeClaim} />
    </Stack.Navigator>
  );
}