import Main from "./views/game/main";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.main}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.main}
          imageStyle={styles.backgroundImage}
        >
          <Main />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
