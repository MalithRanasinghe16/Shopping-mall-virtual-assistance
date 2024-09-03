// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { router } from "expo-router";

// export default function Authenticate() {
//   return (
//     <ScrollView style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row",
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//           }}
//         >
//           <TouchableOpacity>
//             <MaterialIcons
//               name="arrow-back-ios"
//               size={24}
//               color="black"
//               top={10}
//               left={3}
//               onPress={() => {
//                 router.push("/LogIn");
//               }}
//             />
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             flex: 2.2,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 24,
//               alignItems: "flex-start",
//               fontWeight: "bold",
//             }}
//           >
//             Authentication
//           </Text>
//         </View>
//       </View>

//       <View style={{ alignItems: "center" }}>
//         <Text
//           style={{
//             fontSize: 24,
//             marginTop: 20,
//             marginHorizontal:30,
//           }}
//         >
//           Enter authentication code
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             marginHorizontal:30,
//             marginTop: 5,
//           }}
//         >
//         Enter the 4-digit that we have sent via the email xxx@gmail.com
//         </Text>
//       </View>

//       <View style={{ 
//         flexDirection: "row",
//         marginTop: 20,
//         justifyContent: 'space-evenly',
//         marginHorizontal: 40,
//         }}>
//         <TextInput style={styles.Textinput}>      7</TextInput> 
//         <TextInput style={styles.Textinput}>      8</TextInput>
//         <TextInput style={styles.Textinput}>      2</TextInput>
//         <TextInput style={styles.Textinput}>      6</TextInput>
//       </View>

      

//       <TouchableOpacity style={{
//         backgroundColor:'black',
//         height:45,
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:360,
//         marginHorizontal:40,
//         borderRadius:10,
//         }} onPress={() => router.push("/(tabs)/two")}>
//           <Text style={{
//             color:'white',
//             fontSize:18,
//             fontWeight:'400'
//           }}>Continue</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={{
//         height:45,
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:-1,
//         marginHorizontal:40,
//         borderRadius:10,
//         }} onPress={() => console.log('Resend OTP')}>
//           <Text style={{
//             fontSize:16,
//           }}>{'Resend OTP'}</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: StatusBar.currentHeight,
//     flex: 1,
//   },
//   Textinput: {
//     backgroundColor:'#AEAEAE',
//     borderWidth:2,
//     borderRadius:100,
//     height:50,
//     width:50,     
//   }
// });


