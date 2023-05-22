import { View, Text } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
const green = "#054838";
const yellow = "#f5bf14";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        height: 100,
        backgroundColor: "#2F2B2A",
      }}
    >
      <Header />

      <MenuItems />

      <Footer />
    </View>
  );
}
