import {
  StyleSheet,
  View,
  Text,
  ListRenderItemInfo,
  Pressable,
} from "react-native";

type Props = {
  data: GoalData;
  removeGoalHandler: (text: string) => void;
};

function GoalItem({ data, removeGoalHandler }: Props) {
  return (
    <Pressable
      onPress={() => removeGoalHandler(data.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.listContainer}>
        <Text>{data.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
