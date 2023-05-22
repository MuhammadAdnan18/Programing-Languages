import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
const gr = "#054838";
const ye = "#f5bf14";
export default function Header() {
  return (
    <View style={headerStyle.headerContainer}>
      <Text style={{ fontSize: 27 }}>Little Lemon</Text>
    </View>
  );
}
const headerStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: ye,
    paddingTop: 40,
    position: "absolute",
    flex: 0.05,
    alignItems: "center",
    width: "100%",
  },
});
