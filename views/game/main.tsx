import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../../components/primary-button";

function Main() {
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
  }

  return (
    <>
      <View style={styles.inputWrapper}>
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
            <PrimaryButton onPress={validateInputValue}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

export default Main;

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
