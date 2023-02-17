// import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  //extracting data using route
  const catId = route.params.categoryId;

  //--debugging--
  //here we are getting category id successfully
  console.log(catId);

  //rendering meals
  const displayedMeals = MEALS.filter((mealData) => {
    //here we are checking the index of category id
    //doubt - recheck the logic again
    return mealData.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    //getting categories title
    //using the find method
    //--here we forgot to return the value which caused the undefined object error--
    const catTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    }).title;

    //using navigation prop which has setOptions method
    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  //function to render flatlist data
  function renderMealItem(itemData) {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imagesUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        duration={itemData.item.duration}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
