import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  content,
  background,
  color,
  customClass,
  fontSize,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, { backgroundColor: background, ...customClass }]}
    onPress={() => onPress(content)}
  >
    <Text style={[styles.btnText, { color: color, fontSize: fontSize }]}>
      {content}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});

Button.defaultProps = {
  content: "1",
  onPress: () => console.log("Button Pressed"),
  background: "#fff",
  fontSize: 32,
};

export default Button;
