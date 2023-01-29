import { View, Image, StyleSheet, Text } from "react-native";
import PrimaryButton from "../../components/ui/primary-button";
import Title from "../../components/ui/title";
import Colors from "../../constants/colors";

export default function EndGame({ rounds, userNumber, onNewGame }: any) {
  return (
    <View style={styles.wrapper}>
      <Title>End Game!</Title>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.summaryText}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.summaryText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGame}>새로운 게임!</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
