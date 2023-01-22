import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

type Props = {
  addGoalHandler: (text: string) => void;
  visible: boolean;
  endGoalHandler: () => void;
};

function GoalInput({ addGoalHandler, visible, endGoalHandler }: Props) {
  const [text, setText] = useState<string>("");

  function goalInputHandler(enterText: string) {
    setText(enterText);
  }

  function addGoal() {
    addGoalHandler(text);
    setText("");
  }

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          value={text}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#b1f0f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endGoalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
    color: "#fff",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
