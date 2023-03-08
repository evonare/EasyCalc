import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Button from "./Button";
import ToggleBtn from "./ToggleBtn";

const Calculator = () => {
  const [statement, setStatement] = useState([]);
  const [result, setResult] = useState(null);
  const [theme, setTheme] = useState("light");

  const row1 = ["C", "x²", "%"];
  const row2 = ["1", "2", "3"];
  const row3 = ["4", "5", "6"];
  const row4 = ["7", "8", "9"];
  const row5 = [
    ".",
    "0",
    <Feather
      name="delete"
      size={30}
      color={theme === "light" ? "black" : "white"}
    />,
  ];

  const handlePress = (val) => {
    setResult(null);
    if (val === "C") {
      setStatement([]);
      setResult(null);
    } else if (typeof val === "object") {
      let len = statement.length;
      setStatement((statement) => statement.slice(0, len - 1));
      setResult(null);
    } else if (val === "x²") {
      let num = statement.join("");
      const result = Math.pow(Number(num), 2);
      let formattedAnswer = parseFloat(result.toFixed(4));
      setResult(formattedAnswer);
    } else if (val === "=") {
      let str = statement.join("");
      let result = eval(str);
      let formattedAnswer = parseFloat(result.toFixed(4));
      setResult(formattedAnswer);
    } else {
      if (val === "_") {
        val = "-";
      }
      setStatement((statement) => [...statement, val]);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#F1F2F3" : "#17171C" },
      ]}
    >
      <ToggleBtn theme={theme} setTheme={setTheme} />
      <View style={styles.calculation}>
        <ScrollView
          style={{
            width: "100%",
            marginTop: 75,
            marginBottom: 5,
          }}
          contentContainerStyle={{
            alignItems: "flex-end",
            paddingTop: 10,
          }}
        >
          <Text
            style={[
              styles.operation,
              { color: theme === "light" ? "#0006" : "#ccc" },
            ]}
          >
            {statement}
          </Text>
        </ScrollView>
        <ScrollView style={{ maxHeight: 80 }}>
          <Text
            style={[
              styles.result,
              { color: theme === "light" ? "#000" : "#fff", lineHeight: 65 },
            ]}
          >
            {result}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.row}>
          {row1.map((item, i) => (
            <Button
              onPress={handlePress}
              background={theme === "light" ? "#d2d3da" : "#4E505F"}
              color={theme === "light" ? "#000" : "#fff"}
              content={item}
              key={i}
            />
          ))}
          <Button
            onPress={handlePress}
            background="#1e90ff"
            color="#fff"
            content="/"
          />
        </View>
        <View style={styles.row}>
          {row2.map((item, i) => (
            <Button
              onPress={handlePress}
              background={theme === "light" ? "#fff" : "#2E2F38"}
              color={theme === "light" ? "#000" : "#fff"}
              content={item}
              key={i}
            />
          ))}
          <Button
            onPress={handlePress}
            background="#1e90ff"
            color="#fff"
            content="*"
            customClass={{ paddingTop: 10 }}
          />
        </View>
        <View style={styles.row}>
          {row3.map((item, i) => (
            <Button
              onPress={handlePress}
              background={theme === "light" ? "#fff" : "#2E2F38"}
              color={theme === "light" ? "#000" : "#fff"}
              content={item}
              key={i}
            />
          ))}
          <Button
            onPress={handlePress}
            background="#1e90ff"
            color="#fff"
            content="_"
            customClass={{ paddingBottom: 27 }}
          />
        </View>
        <View style={styles.row}>
          {row4.map((item, i) => (
            <Button
              onPress={handlePress}
              background={theme === "light" ? "#fff" : "#2E2F38"}
              color={theme === "light" ? "#000" : "#fff"}
              content={item}
              key={i}
            />
          ))}
          <Button
            onPress={handlePress}
            background="#1e90ff"
            color="#fff"
            content="+"
          />
        </View>
        <View style={styles.row}>
          {row5.map((item, i) => {
            let fontSize = 32;
            let customClass;
            if (item === ".") {
              fontSize = 50;
              customClass = { paddingBottom: 25 };
            }
            return (
              <Button
                onPress={handlePress}
                background={theme === "light" ? "#fff" : "#2E2F38"}
                color={theme === "light" ? "#000" : "#fff"}
                content={item}
                key={i}
                fontSize={fontSize}
                customClass={customClass}
              />
            );
          })}
          <Button
            onPress={handlePress}
            background="#1e90ff"
            color="#fff"
            content="="
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  calculation: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  operation: {
    fontSize: 45,
  },
  result: { fontSize: 60 },
  btnContainer: {
    flex: 5,
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderTopColor: "#d2d3da",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Calculator;
