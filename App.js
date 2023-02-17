import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "../meals/screens/Favourites";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//creating the stack using createNativeStackNavigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//creating a drawer using createDrawerNavigator
const Drawer = createDrawerNavigator();
export default function App() {
  //creating a component that holds the Drawer Navigation
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "white",
          sceneContainerStyle: {
            backgroundColor: "#3f2f25",
          },
          //------------------
          //styling the drawer
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="apps-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourite"
          component={Favourites}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />

          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
            //one method to add button to header
            // options={{
            //   headerRight: () => {
            //     return (
            //       <Button
            //         title="MORE"
            //         onPress={() => {
            //           Alert.alert("clicked");
            //         }}
            //       />
            //     );
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
});
