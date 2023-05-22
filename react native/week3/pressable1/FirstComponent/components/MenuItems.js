import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet, FlatList } from "react-native";
const gr = "#054838";
const ye = "#f5bf14";
//first import pressable from react native
//a pressable component to make veiw menu button
//import usestate
//now define a satet for on presss action of the presable
//use state is set to false by default so menu items dont show on the main screen directly now we make it true on presseable

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
  const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  return (
    <View style={menuStyle.container}>
      {!showMenu && (
        <Text style={menuStyle.innerText}>
          Little lemon is a world wiled known brand famous for its healthy and
          delicious food items, We dont compromise on qualiuty of food and
          customer satisfaction is our number one priority,Welcome anytime!
        </Text>
      )}

      <Pressable
        style={menuStyle.btn}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={menuStyle.headerText}>
          {showMenu ? "Home" : "Veiw Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <FlatList
          data={MenuItemsToDisplay}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        ></FlatList>
      )}
    </View>
  );
};

const menuStyle = StyleSheet.create({
  container: { marginTop: 76, flex: 1, backgroundColor: gr },

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
  btn: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: ye,
    borderColor: gr,
    borderWidth: 2,
    borderRadius: 22,
  },
});
export default MenuItems;
