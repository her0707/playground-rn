import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState<GoalData[]>([]);

  function addGoalHandler(text: string) {
    setGoalsList((prev) => [...prev, { text, id: Math.random().toString() }]);
  }

  function removeGoalHandler(id: string) {
    setGoalsList((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={({ item }) => {
            return (
              <GoalItem data={item} removeGoalHandler={removeGoalHandler} />
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
