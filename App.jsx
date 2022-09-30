import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { styles } from "./AppStyles";
import { GoalInput } from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modal, setModel] = useState(false);

  function toggleModal() {
    setModel(!modal);
  }

  function addGoalHandler(input) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: input, id: currentCourseGoals.length + 1 },
    ]);
    toggleModal();
  }

  function deleteGoalFunction(id) {
    console.log(id);
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.goalButton}>
        <Button title="ADD Your Goal" color="#174e78" onPress={toggleModal} />
      </View>
      <GoalInput
        visible={modal}
        addGoal={addGoalHandler}
        toggleModal={toggleModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemdata) => {
            const {
              item: { text, id },
            } = itemdata;
            return (
              <GoalItem onDeleteItem={deleteGoalFunction} text={text} id={id} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </View>
  );
}
