import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import { collection, onSnapshot, query } from "firebase/firestore";
import { FIREBASE_DB } from "@/firebaseconfig";
import Events from "./Events";
import Promotions from "./Promo";

const ImageScrollBox = () => {
  const [promotionImages, setPromotionImages] = useState<string[]>([]);

  const handleFetchPromotionImages = async () => {
    const promotionsRef = collection(FIREBASE_DB, "promotions");
    const querySnapshot = query(promotionsRef);

    onSnapshot(querySnapshot, {
      next: (snapshot) => {
        const images: string[] = [];
        snapshot.docs.forEach((doc) => {
          const imageUrl = doc.data().imageUrl;
          images.push(imageUrl);
        });
        console.log("Promotion Images: ", images);
        setPromotionImages(images);
      },
      error: (error) => {
        console.error("Error fetching promotion images:", error);
      },
    });
  };
  useEffect(() => {
    handleFetchPromotionImages();
  }, []);


  return (
    <>
      <View style={styles.container}>
        <View style={styles.navbar}>
          {/* <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'center', alignItems: 'center',width: 388, height: 400, bottom: -110, marginLeft: 0, borderRadius: 25, backgroundColor: "#2E77E5"}}></View> */}
        </View>
        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Promotions</Text>

            <TouchableOpacity style={styles.iconButton1}>
              <Link href="../Promotions">
                <Icon name="add-circle" size={35} color="black" />
              </Link>
            </TouchableOpacity>
          </View>

          <Promotions />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.calendarText}>Event Calendar</Text>
          <TouchableOpacity style={styles.iconButton2}>
            <Link href="../CreateEvents">
              <Icon name="add-circle" size={35} color="black" />
            </Link>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Events />
        </ScrollView>

    </View>

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7F4",
  },
  navbar: {
    height: 65,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E7F4",
  },
  navText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
     backgroundColor: '#E5E7F4',

  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 10,
    color: "black",

  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 10,
    margin: 3,
    marginLeft: 70,
    marginEnd: 60,
    bottom: -10,
  },
  imageUri: {
    width: 220,
    height: 220,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 6,
    marginEnd: 60,
    bottom: -6,
  },
  blackBox: {
    height: 130,
    width: 310,
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: 30,
    bottom: 10,
    
  },
  blackBoxImage1: {

    bottom: -10,
    width: 85,
    height: 110,
    borderRadius: 10,
    marginLeft: 12,
    
  },
  blackBoxImage2: {
    
    bottom: -10,
    width: 85,
    height: 110,
    borderRadius: 10,
    marginLeft: 8,
    
  },

  calendarText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 10,
    bottom: -30,
    color: 'black',
  },
  Date: {
    fontSize: 18,
    bottom: -20,
    marginLeft: 35,
    marginTop: 10,
    color: 'black',
  },
  DateDup: {
    fontSize: 18,
    
    marginLeft: 35,
    marginTop: 10,
    bottom: -140,
    color: 'black',
  },

  blackBoxText1: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 100,
    marginTop: -60,
    fontSize: 16,
    bottom: 25,
    
  },
  blackBoxText2: {
    
    color: 'black',
    marginLeft: 100,
    marginTop: -28,
    bottom: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
  blackBoxText3: {
    color: 'white',
    marginLeft: 100,
    marginTop: -28,
    bottom: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  gap: {
    height: 20,
  },
  iconButton1: {
    marginLeft: 154,
    bottom: -10,
  },
  iconButton2: {
    marginLeft: 135,
    bottom: -10,
  },
});

export default ImageScrollBox;
