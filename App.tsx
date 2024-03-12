import { StyleSheet, Text, View } from "react-native";
import Calendar from "./components/Calendar/Calendar";

export default function App() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginTop:'13%'
  },
});
