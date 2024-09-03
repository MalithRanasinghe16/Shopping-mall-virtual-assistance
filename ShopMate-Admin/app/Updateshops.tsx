// import React, { useState } from 'react';
// ;import { StyleSheet, TextInput,ScrollView, FlatList, View,Text,TouchableOpacity  } from 'react-native';
// import ShopCard from '@/components/ShopCard'; 
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { AntDesign } from '@expo/vector-icons';

// const SearchableShopList = () => {
//   const [searchText, setSearchText] = useState('');
  
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   // Shop data
//   interface Shop {
//     id: number;
//     name: string;
//     logo: string;
//     rating: string;
//     category: string;
//   }
//   const shops = [
//     { id: 1, name: 'Shop 1', logo: require("../assets/images/Shop1.jpeg"), rating: '4.5', category: 'Clothing' },
//     { id: 2, name: 'Shop 2', logo: require("../assets/images/Shop2.jpeg"), rating: '5.0', category: 'Electronics' },
//     { id: 3, name: 'Shop 3', logo: require("../assets/images/Shop3.jpeg"), rating: '4.5', category: 'Clothing' },
//     { id: 4, name: 'Shop 4', logo: require("../assets/images/Shop4.jpeg"), rating: '5.0', category: 'Electronics' },
//     { id: 5, name: 'Shop 5', logo: require("../assets/images/Shop5.jpeg"), rating: '4.5', category: 'Clothing' },
    
    
//   ];

//   // Filter shops based on search text
  
//   const filteredShops = shops.filter((shop: any) =>
//   (shop.name as string).toLowerCase().includes(searchText.toLowerCase()) &&
//   (selectedCategory === null || (shop.category as string).toLowerCase() === selectedCategory.toLowerCase())
// );

//   return (

    
    
//     <View style={{ flex: 1, paddingTop: 20, marginTop: 50 }}>
      
//         <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' , bottom: 30 }}>Update Shops</Text>
      
//         <View className='flex-row alignItems-center height-40 borderColor-gray-300 border-2 rounded-lg px-1 py-2 width-50% alignSelf-center ' >
          
//     <Ionicons className='margin-10 flex-row' name="search" size={24} color="gray"/>
//       <TextInput
     
//         className='flex-1 height-100% width-40% fontSize-16' 
//         placeholder="Search shops..."
//         onChangeText={text => setSearchText(text)}
//         value={searchText}
//       />
//       <Picker
//           selectedValue={selectedCategory || undefined}
//           style={{ height: 50, width: 50 }}
//           onValueChange={(itemValue: string, itemIndex: number) => setSelectedCategory(itemValue)}>
          
//         </Picker>
//       </View>
      
//       <View>
//       <TouchableOpacity onPress={() => console.log('Plus Icon Pressed')}>
//         <AntDesign name="pluscircle" size={30} color="black" style={{marginLeft: 10,bottom: -10,}} />
//     </TouchableOpacity>
//     </View>
      

//     <ScrollView>
//       {filteredShops.map((shop) => (
//           <ShopCard
//             key={shop.id}
//             name={shop.name}
//             logo={shop.logo}
//             rating={shop.rating}
//             category={shop.category}
//           />
//         ))}
//       </ScrollView>
//     </View>
    
//   );
// };


// export default SearchableShopList;


