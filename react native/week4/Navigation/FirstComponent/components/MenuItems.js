import * as react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const gr = "#054838";
const ye = "#f5bf14";
//a flatlist has two parameters 1)data(whole array or from where data will be taken) and 2)renderItems(items to be rednered:a new constant wil be sued for this which will store inly those items from array which need to be rendered on flatlist)

const MenuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];

const Item = ({ name, price }) => (
  <View style={menuStyle.innercontainer}>
    <Text style={menuStyle.innerText}>{name}</Text>
    <Text style={menuStyle.innerText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  return (
    <View style={menuStyle.container}>
      <Text style={menuStyle.headerText}>Veiw Menu</Text>
      <FlatList
        data={MenuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};

const menuStyle = StyleSheet.create({
  container: { paddingTop: 78, flex: 0.9 },

  scroll: { backgroundColor: gr },

  innerText: {
    color: ye,
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
  innercontainer: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MenuItems;
