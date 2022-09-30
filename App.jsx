import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { styles } from "./AppStyles";
import { StatusBar } from "expo-status-bar";
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
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.goalButton}>
          <Pressable
            onPress={toggleModal}
            style={({ pressed }) => pressed && styles.pressButton}
            android_ripple={{ color: "#0597e6" }}
          >
            <View style={styles.homeAddButton}>
              <Text style={{ textAlign: "center", color: "purple" }}>
                Add your goals
              </Text>
            </View>
          </Pressable>
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
                <GoalItem
                  onDeleteItem={deleteGoalFunction}
                  text={text}
                  id={id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </View>
    </>
  );
}
