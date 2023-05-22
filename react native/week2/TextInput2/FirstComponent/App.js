import { View, Text, FlatList } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import TextInputFeedback from "./components/TextInputFeedback";
const gr = "#054838";
const ye = "#f5bf14";

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
      <Header />
      <TextInputFeedback />
      <Footer />
    </View>
  );
}
