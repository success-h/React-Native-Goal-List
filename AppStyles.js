import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#174e78",
  },

  pressedItem: {
    opacity: 0.5,
  },

  input: {
    color: "#fff",
    borderWidth: 1,
    padding: 8,
    width: "100%",
    borderColor: "#fff",
  },

  inputContainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#3d79a1",
    padding: 16,
  },

  goalsContainer: {
    flex: 5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",

    marginHorizontal: 8,
    margin: 16,
  },

  button: {
    backgroundColor: "#ddd",
    marginHorizontal: 8,
    width: "40%",
    borderRadius: 6,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    marginTop: 100,
  },
  goalButton: {
    marginVertical: 50,
  },
});
