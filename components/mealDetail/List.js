import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((cur) => (
    <View key={cur} style={styles.listItem}>
      <Text style={styles.itemText}>{cur}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#eddbc7",
    elevation: 4,
    shadowColor: "brown",
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
