import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../../components/ui/primary-button";
import Colors from "../../constants/colors";
import Title from "../../components/ui/title";
import Card from "../../components/ui/card";
import InstructionText from "../../components/ui/instruction-text";

type Props = {
  onSelectNumber: (number: number) => void;
};

function Main({ onSelectNumber }: Props) {
  const [number, setNumber] = useState<string>("");

  function resetNumber() {
    setNumber("");
  }

  function validateInputValue() {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("다시 입력해주세요", "1 에서 99 사이의 숫자여야 합니다", [
        { text: "확인", style: "destructive", onPress: resetNumber },
      ]);
      return;
    }
    onSelectNumber(chosenNumber);
  }

  return (
    <>
      <View style={styles.wrapper}>
        <Title>숫자를 맞춰보세요</Title>
        <Card>
          <InstructionText>숫자를 입력하세요</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={number}
            onChangeText={(text) => setNumber(text)}
          />
          <View style={styles.buttonsWrapper}>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={validateInputValue}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

export default Main;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
  },
});
