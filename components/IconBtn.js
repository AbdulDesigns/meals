import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconBtn = ({ icon, color, data }) => {
  return (
    <Pressable
      onPress={data}
      style={({ pressed }) => pressed && styles.pressable}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.5,
  },
});
