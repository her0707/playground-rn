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
import GoalItem from "../../components/GoalItem";
import GoalInput from "../../components/GoalInput";
import { StatusBar } from "expo-status-bar";

function Main() {
  const [goalsList, setGoalsList] = useState<GoalData[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(text: string) {
    setGoalsList((prev) => [...prev, { text, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function removeGoalHandler(id: string) {
    setGoalsList((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          endGoalHandler={endAddGoalHandler}
        />

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
    </>
  );
}

export default Main;

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
