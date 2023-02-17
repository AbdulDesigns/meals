import { View, Text, Pressable, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imagesUrl,
  affordability,
  duration,
  complexity,
  id,
}) => {
  const navigation = useNavigation();
  function mealDetailScreenhandler() {
    navigation.navigate("MealDetailScreen", { mealId: id });
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={mealDetailScreenhandler}
        android_ripple={{ color: "gray" }}
      >
        <View>
          <View>
            <Image style={styles.images} source={{ uri: imagesUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            duration={duration}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

//creating a sylesheet
const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#b1b1b1",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  images: {
    width: "100%",
    height: 200,
  },
  title: {
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
});
