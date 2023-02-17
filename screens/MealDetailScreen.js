import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconBtn from "../components/IconBtn";

const MealDetailScreen = ({ route, navigation }) => {
  //this id is getting from mealitem where we set mealId
  const mealId = route.params.mealId;

  //recheck the logic and understand it
  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  function headerBtnHandler() {
    console.log("clicked");
  }

  //using the useLayoutEffect hook
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconBtn icon={"star"} data={headerBtnHandler} color="white" />;
      },
    });
  }, [navigation, headerBtnHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title} </Text>
        <View>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity.toUpperCase()}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          />
        </View>
        <View style={styles.listContainer}>
          <Subtitle>hello</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

//creatiing a stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginVertical: 8,
    padding: 16,
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },

  subtitle: {
    color: "#EDDBC7",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 8,
    marginHorizontal: 24,
    marginVertical: 16,
    borderBottomColor: "#EDDBC7",
    borderBottomWidth: 1,
  },
  bodyText: {
    color: "white",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  listContainer: {
    Width: "70%",
  },
});
