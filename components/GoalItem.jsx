import { Text, View, Pressable } from "react-native";
import { styles } from "../AppStyles";

function GoalItem({ text, onDeleteItem, id }) {
  const deleteItem = () => {
    onDeleteItem(id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#0597e6" }}
        onPress={deleteItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
