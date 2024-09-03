import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";



export default function Start() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.Shopmate}>
          <Text
            style={{
              fontSize: 64,
              fontWeight: "500",
              flexDirection: "column",
              textAlign: "right",
              color: "white",
            }}
          >
            Shop
          </Text>
        </View>

        <View style={styles.Shopmate}>
          <Text
            style={{
              fontSize: 64,
              color: "black",
              fontWeight: "500",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            Mate
          </Text>
        </View>
      </View>

      <Image
        style={styles.image}
        source={require("../assets/images/home.png")}
      />

      <Text style={styles.midtext}>"Shop. Explore. Enjoy."</Text>

      <TouchableOpacity
        style={styles.createbtn}
        onPress={()=>router.replace("./LogIn")}
      >
        <Text
          style={{color: "white",fontSize: 18,fontWeight: "bold",}}>
          Log IN
        </Text>
      </TouchableOpacity>
{/* 
      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
        Already have an account?
      </Text>

      <TouchableOpacity
        style={styles.loginbtn}
        onPress={() => router.replace("./auth/LogIn")}
      >
        <Text
          style={{fontSize: 18,color: "#1164C4",fontWeight: "bold",}}>
          Log In
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCBCBC",
    flex: 1,
  },
  Shopmate: {
    flex: 1,
    height: 200,
    width: 200,
    paddingTop: 50,
  },
  image: {
    width: 338,
    height: 326,
    marginTop: -25,
    marginHorizontal: 10,
  },
  midtext: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 20,
    fontWeight: "bold",
  },
  createbtn: {
    backgroundColor: "black",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  loginbtn:{
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
    marginHorizontal: 40,
    borderRadius: 10,
  }
});