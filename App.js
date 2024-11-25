import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Details from "./pages/Details";
import EditionPage from "./pages/EditionPage";
import AddItemPage from "./pages/AddItemPage";

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerTintColor: "#000",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{ title: "UCU Planetary" }} />
          <Stack.Screen name="Details" component={Details} options={{ title: "Planet Details" }} />
          <Stack.Screen name="EditionPage" component={EditionPage} options={{ title: "Change Planet" }} />
          <Stack.Screen name="AddItemPage" component={AddItemPage} options={{ title: "Add a new Planet" }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
