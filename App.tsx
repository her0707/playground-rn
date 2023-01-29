import Main from "./views/game/main";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import InGame from "./views/game/in-game";
import Colors from "./constants/colors";
import EndGame from "./views/game/end-game";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState();

  const [isLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  function selectNumber(number: number) {
    setUserNumber(number);
    setGameOver(false);
  }

  function endGame(round: number) {
    setGameOver(true);
    setRounds(round);
  }

  function newGame() {
    setUserNumber(undefined);
  }

  let screen = <Main onSelectNumber={selectNumber} />;

  if (userNumber) {
    screen = <InGame userNumber={userNumber} onEndGame={endGame} />;
  }

  if (gameOver && userNumber) {
    screen = (
      <EndGame userNumber={userNumber} rounds={rounds} onNewGame={newGame} />
    );
  }

  return (
    <>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.main}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.main}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.main}>{screen}</SafeAreaView>
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
