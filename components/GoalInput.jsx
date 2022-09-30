import { useState } from "react";
import { TextInput, View, Button, Modal, Image } from "react-native";
import { styles } from "../AppStyles";

export const GoalInput = ({ addGoal, visible, toggleModal }) => {
  const [input, setInput] = useState("");

  function goalInputHandler(text) {
    setInput(text);
  }
  const addGoalHandler = () => {
    if (input !== "") {
      addGoal(input);
      setInput("");
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="Your course goal"
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#174e78" />
          </View>
          <View style={styles.button}>
            <Button onPress={toggleModal} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
