import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
const gr = "#054838";
const ye = "#f5bf14";
export default function Footer() {
  return (
    <View style={footerStyle.footerContainer}>
      <Text>All rights reserved</Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  footerContainer: {
    backgroundColor: ye,
    flex: 0.05,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
