import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ShopCard from "@/components/BlackBox";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FIREBASE_DB } from '@/firebaseconfig';
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "All", value: null },
  { label: "Medical", value: "Medical" },
  { label: "Security", value: "Security" },
];

const SearchableShopList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [staffList, setStaffList] = useState<any[]>([]);

  const handleCategoryChange = (text: string | null) =>
    setSelectedCategory(text);

  const handleFetchStaff = async () => {
    const staffRef = collection(FIREBASE_DB, "staff");
    const querySnapshot = query(
      staffRef,
      where("service", "==", selectedCategory)
    );

    onSnapshot(selectedCategory === null ? staffRef : querySnapshot, {
      next: (snapshot) => {
        const staff: any[] = [];
        snapshot.docs.forEach((doc) => {
          staff.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("Staff List: ", staff);
        setStaffList(staff);
      },
    });
  };

  useEffect(() => {
    handleFetchStaff();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={{ fontSize: 12, paddingHorizontal: 15 }}
          selectedTextStyle={{ fontSize: 12, paddingHorizontal: 15 }}
          inputSearchStyle={{ height: 40, fontSize: 14 }}
          iconStyle={{ width: 20, height: 20, marginLeft:20 }}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Item"
          searchPlaceholder="Search..."
          value={selectedCategory}
          onChange={(item) => handleCategoryChange(item.value)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("Plus Icon Pressed")}>
          <Link href="../RegisterStaff">
            <AntDesign
              name="pluscircle"
              size={30}
              color="black"
              style={styles.plusIcon}
            />
          </Link>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {staffList.map((staff) => (
          <ShopCard
            id={staff.id}
            key={staff.id}
            name={staff.name}
            logo={staff.image}
            age={staff.age}
            category={staff.service}
            time={staff.mobile}
            edit={"Edit"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7F4",
    paddingTop: 20,
    
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  dropdown: {
    marginVertical: 12,
    height: 35,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
  },
  plusIcon: {
    marginLeft: -10,
    bottom: -10,

  },
});

export default SearchableShopList;
