import React, { useEffect, useState } from "react";
import {
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import ShopCard from "@/components/ShopCard";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FIREBASE_DB } from '@/firebaseconfig';
import { Dropdown } from "react-native-element-dropdown";
import { Link } from "expo-router";


const data = [
  { label: "All", value: null },
  { label: "Clothing", value: "Clothing" },
  { label: "Electronics", value: "Electronics" },
];

const SearchableShopList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (text: string | null) =>
    setSelectedCategory(text);

  const [shopList, setShopList] = useState<any[]>([]);

  const handleFetchStaff = async () => {
    const shopRef = collection(FIREBASE_DB, "shop");
    const querySnapshot = query(
      shopRef,
      where("category", "==", selectedCategory)
    );

    onSnapshot(selectedCategory === null ? shopRef : querySnapshot, {
      next: (snapshot) => {
        const staff: any[] = [];
        snapshot.docs.forEach((doc) => {
          staff.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("Shop List: ", staff);
        setShopList(staff);
      },
    });
  };

  useEffect(() => {
    handleFetchStaff();
  }, [selectedCategory]);

  return (
    <View style={{ flex: 1, paddingTop: 20, marginTop: -1, backgroundColor: '#E5E7F4' }}>
      {/* <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          bottom: 30,
        }}
      >
        Shops
      </Text> */}

      <View className="flex-row items-center align-middle justify-center  ">
      <Ionicons className="flex-row" name="search" size={24} color="gray"  />
        <Dropdown
          style={{
            marginVertical: 12,
            height: 35,
            width: 300,
            backgroundColor: "white",
            
            borderRadius: 10,
            
          }}
          placeholderStyle={{ fontSize: 12, paddingHorizontal: 15, color: 'gray' }}
          selectedTextStyle={{ fontSize: 12, paddingHorizontal: 15 }}
          inputSearchStyle={{ height: 40, fontSize: 14 }}
          iconStyle={{ width: 20, height: 20,}}
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

      <View className="ml-3">
        <TouchableOpacity onPress={() => console.log("Plus Icon Pressed")}>
          <Link href="../CreateShop">
            <AntDesign
              name="pluscircle"
              size={30}
              color="black"
              
            />
          </Link>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {shopList.map((shop) => (
          <ShopCard
            key={shop.id}
            id={shop.id}
            name={shop.name}
            logo={shop.image}
            rating={shop.rating}
            category={shop.category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchableShopList;
