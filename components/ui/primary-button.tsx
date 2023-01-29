import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

type Props = {
  children: any;
  onPress: () => void;
};

function PrimaryButton({ children, onPress }: Props) {
  return (
    <View style={styles.buttonOuterWrapper}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerWrapper]
            : styles.buttonInnerWrapper
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterWrapper: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerWrapper: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
