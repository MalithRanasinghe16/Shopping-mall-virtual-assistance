import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "@/Firebaseconfig";

import Eventcaendercomp from "../../components/Eventcaendercomp";
import Promotioncomp from "../../components/Promotioncomp";


export default function TabTwoScreen() {
  const [fName, setFName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const Snapshot = await getDocs(collection(FIREBASE_DB, "users"));
        Snapshot.forEach((doc) => {
          setFName(doc.data().first); // Set fName from Firestore data
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{flexDirection: "row",marginTop: 10,}}>
            <View>
              <Image
                style={{height: 50,width: 50,marginLeft: 30,}}
                source={require("@/assets/images/Profile_photo.png")}/>
            </View>
            <View>
              <Text
                style={{fontSize: 25,fontWeight: "bold",marginLeft: 10,marginTop: 5,}}>
                Hello {fName} !
              </Text>
            </View>
          </View>
          <Text
            style={{fontSize: 17,fontWeight: "bold",marginLeft: 30,marginTop: 20,}}>
            Promotions
          </Text>

          {/* add promotion component */}
          <Promotioncomp /> 

          <Text
            style={{fontSize: 17,fontWeight: "bold",marginTop: 30,marginLeft: 30,}}>
            Event calendar
          </Text>

          {/* add event calender component */}
          <Eventcaendercomp />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

});
