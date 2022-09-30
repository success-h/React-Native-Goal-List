import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#0c1017",
  },

  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#77357a",
  },

  pressedItem: {
    opacity: 0.5,
  },

  pressButton: {
    opacity: 0.5,
  },

  homeAddButton: {
    backgroundColor: "#2d3540",
    shadowColor: "#ddd",
    padding: 8,
    textAlign: "center",
    borderRadius: 10,
  },

  input: {
    color: "black",
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderColor: "#e4d0ff",
    borderRadius: 6,
    fontSize: 16,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#161b22",
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
    backgroundColor: "#e4d0ff",
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
