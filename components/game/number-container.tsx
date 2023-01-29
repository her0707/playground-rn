import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

type Props = {
  children: number;
};

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.continaer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continaer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignContent: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
