import * as React from "react";
import { View, Text } from "react-native";

export default function OldComponent1() {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 30,
          paddingTop: 230,
        }}
      >
        Welcome to Little Lemon
      </Text>

      <Text style={{ textAlign: "center", paddingTop: 120 }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
