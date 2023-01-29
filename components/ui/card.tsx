import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }: any) {
  return <View style={styles.inputWrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
