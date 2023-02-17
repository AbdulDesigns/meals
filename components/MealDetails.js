import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.subTextContainer, style]}>
      <Text style={[styles.subText, textStyle]}> {duration}m</Text>
      <Text style={[styles.subText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.subText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  subTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
  },
  subText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    paddingHorizontal: 4,
  },
});
