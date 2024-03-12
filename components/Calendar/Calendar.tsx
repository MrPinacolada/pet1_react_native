import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const NUM_COLUMNS = 2;

export default function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const numDays = new Date(year, month, 0).getDate();
  const numRows = Math.ceil(numDays / NUM_COLUMNS);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.calendar}>
        {[...Array(numRows)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {[...Array(NUM_COLUMNS)].map((_, colIndex) => {
              const dayNumber = rowIndex * NUM_COLUMNS + colIndex + 1;
              return dayNumber <= numDays ? (
                <LinearGradient
                  key={dayNumber}
                  colors={[
                    "#ab0fa3",
                    "#d61c8d",
                    "#ff7068",
                    "#ffc06e",
                    "#ffe187",
                  ]}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={styles.calendar_item}
                >
                  <Text style={styles.calendar_item_text}>{dayNumber}</Text>
                </LinearGradient>
              ) : null;
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    rowGap: 10,
    paddingHorizontal: "3%",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    columnGap: 5,
  },
  calendar_item: {
    width: "50%",
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "red",
  },
  calendar_item_text: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
});
