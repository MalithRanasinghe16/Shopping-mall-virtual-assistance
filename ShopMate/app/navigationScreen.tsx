import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList, View } from 'react-native';
import ShopCard from '@/components/ShopCard'; 
import { Ionicons } from '@expo/vector-icons';

const SearchableShopList = () => {
  const [searchText, setSearchText] = useState('');
  
  // Shop data
  const shops = [
    { id: 1, name: 'Shop 1', logo: require("../assets/images/Kickspot.jpeg"), rating: '4.5', category: 'Clothing' },
    { id: 2, name: 'Shop 2', logo: require("../assets/images/ice-cream.png"), rating: '5.0', category: 'Electronics' },
    { id: 3, name: 'Shop 1', logo: require("../assets/images/Kickspot.jpeg"), rating: '4.5', category: 'Clothing' },
    { id: 4, name: 'Shop 2', logo: require("../assets/images/ice-cream.png"), rating: '5.0', category: 'Electronics' },
    { id: 5, name: 'Shop 1', logo: require("../assets/images/Kickspot.jpeg"), rating: '4.5', category: 'Clothing' },
    { id: 6, name: 'Shop 2', logo: require("../assets/images/ice-cream.png"), rating: '5.0', category: 'Electronics' },
    { id: 7, name: 'Shop 1', logo: require("../assets/images/Kickspot.jpeg"), rating: '4.5', category: 'Clothing' },
    { id: 8, name: 'Shop 2', logo: require("../assets/images/ice-cream.png"), rating: '5.0', category: 'Electronics' },
    
  ];

  // Filter shops based on search text
  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View className='flex-1 paddingTop-20'>
        <View className='flex-row alignItems-center height-40 borderColor-gray-300 border-2 rounded-lg px-1 py-2 width-50% alignSelf-center' >
    <Ionicons className='margin-10 flex-row' name="search" size={24} color="gray"/>
      <TextInput
        className='flex-1 height-100% width-70% fontSize-16 ' 
        placeholder="Search shops..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      </View>
      <FlatList
        data={filteredShops}
        renderItem={({ item }) => (
          <ShopCard
            key={item.id}
            name={item.name}
            logo={item.logo}
            rating={item.rating}
            category={item.category}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
    
  );
};


export default SearchableShopList;


