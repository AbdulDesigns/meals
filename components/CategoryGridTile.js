import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
// //navigation hook
// import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ title, color, pressableProp }) => {
  //using hook return a navigation object
  // const navigation = useNavigation();
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#CDE990" }}
        style={(stats) =>
          stats.pressed
            ? [styles.buttonStyle, styles.buttonIos]
            : styles.buttonStyle
        }
        onPress={pressableProp}
      >
        <View style={[styles.innerContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonStyle: {
    flex: 1,
  },

  buttonIos: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 18,
  },
});

//------------------------Issue you can face----------------------
//here i have faced an issue where the text is disappeared because i have added inner container with flex:1, so you can easily fix this by adding the flex:1 to parent container
