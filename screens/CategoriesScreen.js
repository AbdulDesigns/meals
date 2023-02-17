//importing data from categories
import { View, Text, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES, MEALS } from "../data/dummy-data";

//using special prop navigation
const CategoriesScreen = ({ navigation }) => {
  //we are using this method to feed the data to FlatList
  const renderCategoryItem = (itemData) => {
    //function to send the data to child prop
    function pressHandler() {
      //here we will get extra object which accepts parameters to pass to target screen
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        pressableProp={pressHandler}
      />
    );
  };

  return (
    // <View>
    //   <Text>Hello</Text>
    // </View>

    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
