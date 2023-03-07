import { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

const ToggleBtn = ({ theme, setTheme }) => {
  const [left, setLeft] = useState(6);
  const [background, setBackground] = useState("#fff");
  const [btnBackground, setBtnBackground] = useState("#d2d3da");

  const handleOnPress = () => {
    setLeft((left) => (left === 6 ? 54 : 6));
    if (theme === "light") {
      setTheme("dark");
      setBackground("#2E2F38");
      setBtnBackground("#4e505f");
    } else if (theme === "dark") {
      setTheme("light");
      setBackground("#fff");
      setBtnBackground("#d2d3da");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Feather name="moon" size={24} color="#1e90ff" />
        <Feather name="sun" size={24} color="coral" />
        <View
          style={[styles.btn, { left: left, backgroundColor: btnBackground }]}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    top: 30,
    left: "40%",
    width: 90,
    height: 40,
    borderRadius: 50,
    paddingHorizontal: 8,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#4E505F",
  },
});

export default ToggleBtn;
