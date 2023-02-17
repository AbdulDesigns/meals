import { StyleSheet, View, Text } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

//creatiing a stylesheet
const styles = StyleSheet.create({
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
});
