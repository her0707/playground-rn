import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../../components/ui/title";
import { useState, useEffect } from "react";
import NumberContainer from "../../components/game/number-container";
import PrimaryButton from "../../components/ui/primary-button";
import InstructionText from "../../components/ui/instruction-text";
import Card from "../../components/ui/card";
import { Ionicons } from "@expo/vector-icons";
import RoundsItem from "../../components/game/rounds-item";

type Props = {
  userNumber: number;
  onEndGame: (rounds: number) => void;
};

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return exclude;
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function InGame({ userNumber, onEndGame }: Props) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onEndGame(rounds.length);
    }
  }, [currentGuess, userNumber, onEndGame]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function newGuessNumber(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("거짓말!", "넌 잘못되었다는 걸 알고 있어", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    switch (direction) {
      case "lower":
        maxBoundary = currentGuess;
        break;
      case "greater":
        minBoundary = currentGuess + 1;
        break;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      userNumber
    );

    setCurrentGuess(newRandomNumber);
    setRounds((prev) => [newRandomNumber, ...prev]);
  }

  const guessRoundsLength = rounds.length;

  return (
    <View style={styles.screnn}>
      <Title>Oppenent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsWrapper}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={() => newGuessNumber("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={() => newGuessNumber("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listWrapper}>
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <RoundsItem
              roundNumber={guessRoundsLength - index}
              guess={item}
            ></RoundsItem>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screnn: {
    flex: 1,
    padding: 24,
  },
  buttonsWrapper: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listWrapper: {
    flex: 1,
    padding: 16,
  },
});
