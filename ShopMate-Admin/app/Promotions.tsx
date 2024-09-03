import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { router } from 'expo-router';
import { FIREBASE_DB } from '@/firebaseconfig';

const Promotions = () => {
  const [selectedImage] = useState(null); 
   const [promoImageUri, setPromoImageUri] = useState<string | null>(null);

   const handleImagePick = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

    if (!result.canceled) {
      // setImageUri(result.assets[0].uri);
      const { uri, fileName } = result.assets[0];
      const storage = getStorage();
      const storageRef = ref(storage, `promotions-pics/${new Date()}`);

      // get the blob of the image
      const blobRes = await fetch(uri);
      const blob = await blobRes.blob();

      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setPromoImageUri(url);
            console.log(url);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const handleAddPromo = () => {
    // You can handle registration logic here
    console.log("Shop Create button clicked");

    if ( !promoImageUri) {
      console.log("Please fill in all the required fields");
      Alert.alert("Please fill in all the required fields");
      return;
    }

    const doc = addDoc(collection(FIREBASE_DB, "promotions"), {
      
      image: promoImageUri,
    });

    console.log("DOC: ", doc);
    Alert.alert("Successfully Created");
    router.navigate("/(tabs)/two");

  
    setPromoImageUri("");
  };


  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* <Text style={styles.navText}>Update Promotions</Text> */}
      </View>
      <View  style={styles.scrollContainer}>
        <View style={styles.imageBox}>
        <View style={styles.imageBox}>
          {promoImageUri ? (
            <Image
              source={{ uri: promoImageUri }}
              style={styles.imageUri}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.imageUri} />
          )}
        </View>
      
          
        </View>
      </View>
     
      <Text style={styles.addPromotionsText}>Add Promotions</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={handleImagePick}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Select Image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={{height: 50, width: 120, backgroundColor: '#FFFFFF', borderRadius: 20,alignSelf: 'center', marginTop: 20, bottom: 60}} 
      onPress={handleAddPromo}>
        <Text style={{textAlign: 'center', marginTop: 8, fontWeight: 'bold', fontSize: 20,  bottom: -3}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7F4',
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: '#000000',
  },
  navText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    margin: 40,
    justifyContent: 'center', 
  },
  addPromotionsText: {
    fontSize: 20,
    textAlign: 'center',
    bottom: 280,
    color: 'black',
    fontWeight: 'bold',
  },
  imageBox: {
    flexDirection: 'row',
    overflow: 'scroll',
    padding: 5,
    paddingLeft: 30,
    paddingRight: 100,
    
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 10,
    margin: 6,
    marginEnd: 60,
    bottom: -10,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E77E5',
    opacity: 0.7,
    borderRadius: 10,
    
  },
  imageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    
  },
  localImage: {
    position: 'absolute',
    bottom: 310,
    right: 50,
    left: 50,
    height: 400,
    width: 250,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flex: 1,
    padding: 40,
    top: -25,
    bottom: -25,    
  },
});

export default Promotions;