import React, * as Reaxt from "react";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Alert,
} from "react-native";
const gr = "#054838";
const ye = "#f5bf14";
export default function TextInputFeedback() {
  const [name, Onchangename] = React.useState("");
  const [problem, Onchangeproblem] = React.useState("");
  const [date, Onchangedate] = React.useState("");
  return (
    <View style={menuStyle.container}>
      <KeyboardAvoidingView>
        <Text style={menuStyle.innerText}>Welcome to Little lemon</Text>
        <Text style={menuStyle.innerText}>Sign in to continue</Text>
        <TextInput
          value={name}
          onChangeText={Onchangename}
          style={menuStyle.input}
          placeholder="name"
          maxLength={20}
        />
        <TextInput
          value={date}
          onChangeText={Onchangedate}
          style={menuStyle.input}
          placeholder="password"
          maxLength={10}
          secureTextEntry={true}
          onFocus={Alert.alert("password should be no more than 10 digits ")}
        />

        <TextInput
          value={problem}
          onChangeText={Onchangeproblem}
          style={menuStyle.problem}
          placeholder="problem"
          multiline={true}
          clearButtonMode={"always"}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const menuStyle = StyleSheet.create({
  container: { paddingTop: 78, flex: 0.9 },

  problem: {
    height: 120,
    margin: 20,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: ye,
    borderColor: "black",
  },
  scroll: { backgroundColor: gr },

  innerText: {
    color: ye,
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 20,
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: ye,
    borderColor: "black",
  },

  headerText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  innercontainer: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
