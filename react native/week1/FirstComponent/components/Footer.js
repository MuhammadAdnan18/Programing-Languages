import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={footerStyle.footerContainer}>
      <Text>All rights reserved</Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#C88C73",
    flex: 0.05,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
