import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function RoundsItem({ roundNumber, guess }: any) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Oppenent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
