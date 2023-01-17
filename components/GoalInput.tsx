import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

type Props = {
  addGoalHandler: (text: string) => void;
};

function GoalInput({ addGoalHandler }: Props) {
  const [text, setText] = useState<string>("");

  function goalInputHandler(enterText: string) {
    setText(enterText);
  }

  function addGoal() {
    addGoalHandler(text);
    setText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
