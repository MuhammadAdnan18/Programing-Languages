import "react-native-gesture-handler";
import { View, Text, FlatList } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import TextInputFeedback from "./components/TextInputFeedback";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Nvigation:It is defined as how we move through the diffrent secreens of the app (back forward etc)
//first of all we need to install dependencies for react navigation
//Now intsall the expo  module:npx install-expo-modules@latest
//In the terminal type following commands:
//1)npm install @react-navigation/native
//2)npx expo install react-native-screens react-native-safe-area-context
//now import it by:import { NavigationContainer } from '@react-navigation/native';

//Now lets start navigation with a basic lobrary :stack Navigator
//Dont forget:use yarn navigaytion instead of npm
const gr = "#054838";
const ye = "#f5bf14";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        height: 100,
        backgroundColor: gr,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" compnent={TextInputFeedback} />
          <Stack.Screen name="menu" compnent={MenuItems} />
        </Stack.Navigator>
      </NavigationContainer>

      <Header />
      <Footer />
    </View>
  );
}
