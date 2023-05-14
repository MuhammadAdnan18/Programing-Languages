import * as react from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const MenuItemsToDisplay = [
  "biryani\nplao\nchickenTikka\nbeef\nroll\n cocacola\nfish\nchickenKarahi\ndalksd\nfadsfsa\nsafsaf\ndsdad\ngdfas\nrwaf\nfdgfdh\nhegewrg\nsaaw\nhkhkj\njlkhkjh\nhklhlkhk\nhjhkj\nlkjhjhkv]\nhgdhf\nftdfjkj\nuliu\noijkhlkj\njkjhjdrd\nesshfd\nggkbiryani\nplao\nchickenTikka\nbeef\nroll\n cocacola\nfish\nchickenKarahi\ndalksd\nfadsfsa\nsafsaf\ndsdad\ngdfas\nrwaf\nfdgfdh\nhegewrg\nsaaw\nhkhkj\njlkhkjh\nhklhlkhk\nhjhkj\nlkjhjhkv]\nhgdhf\nftdfjkj\nuliu\noijkhlkj\njkjhjdrd\nesshfd\nggk",
];

const MenuItems = () => {
  return (
    <View style={menuStyle.container}>
      <ScrollView
        horizontal={false}
        indicatorStyle={"yellow"}
        style={menuStyle.scroll}
      >
        <Text style={menuStyle.headerText}>Items to Display</Text>
        <Text style={menuStyle.innerText}>{MenuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const menuStyle = StyleSheet.create({
  container: { paddingTop: 78, flex: 0.9 },

  scroll: { backgroundColor: "#2F2B2A" },

  innerText: {
    color: "#C88C73",
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: 20,
  },

  headerText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
