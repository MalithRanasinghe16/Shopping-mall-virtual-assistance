import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { MaterialIcons } from "@expo/vector-icons";

import CustomTextInput from "./CustomTextInput";
import { FIREBASE_DB } from '@/firebaseconfig';
import { router } from "expo-router";

const data = [
  { label: "Clothing", value: "Clothing" },
  { label: "Electronics", value: "Electronics" },
];

const CreateShop = () => {
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleNameChange = (text: string) => setName(text);
  const handleRatingChange = (text: string) => setRating(text);
  const handleCategoryChange = (text: string) => setCategory(text);
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
      const storageRef = ref(storage, `shop-pics/${new Date()}`);

      // get the blob of the image
      const blobRes = await fetch(uri);
      const blob = await blobRes.blob();

      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageUri(url);
            console.log(url);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const handleCreateShop = () => {
    // You can handle registration logic here
    console.log("Shop Create button clicked");

    if (!name || !category || !rating || !imageUri) {
      console.log("Please fill in all the required fields");
      Alert.alert("Please fill in all the required fields");
      return;
    }

    const doc = addDoc(collection(FIREBASE_DB, "shop"), {
      name,
      rating,
      category,
      image: imageUri,
    });

    console.log("DOC: ", doc);
    Alert.alert("Successfully Created");
    router.navigate("/(tabs)/four");

    setName("");
    setCategory("");
    setRating("");
    setImageUri("");
  };

  return (
    <ScrollView
    style={{ backgroundColor: "#E5E7F4" }}
      className="overflow-auto flex-1"
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View className="w-full flex-1 pt-12 pb-24">
        <View style={{ bottom: -20 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Name:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleNameChange}
            value={name}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Rating:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleRatingChange}
            value={rating}
          />

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Category:</Text>
          <Dropdown
            style={{
              marginVertical: 12,
              height: 35,
              width: 300,
              
              backgroundColor: "white",
              
              borderRadius: 15,
            }}
            placeholderStyle={{ fontSize: 12, paddingHorizontal: 15 }}
            selectedTextStyle={{ fontSize: 12, paddingHorizontal: 15 }}
            inputSearchStyle={{ height: 40, fontSize: 14 }}
            iconStyle={{ width: 20, height: 20 }}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Item"
            searchPlaceholder="Search..."
            value={category}
            onChange={(item) => handleCategoryChange(item.value)}
          />

          <View className=" flex-row justify-between items-center bg-white rounded-2xl shadow-2xl p-3 mt-3">
            <View>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="w-12 h-12 rounded-full items-center justify-center"
                />
              ) : (
                <View className="w-20 h-20 rounded-full items-center justify-center  bg-[#2E77E5]/40" />
              )}
            </View>
            <View>
              <Text className="text-lg font-semibold self-stretch">
                Upload Image
              </Text>
            </View>
            <View>
              <Pressable
                className={`p-2  rounded-xl bg-primary`}
                onPress={() => handleImagePick()}
              >
                <MaterialIcons name="add-a-photo" color="#000" size={24} marginLeft= {-240} />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="justify-center items-center">
          {/* Changed Button to TouchableOpacity */}
          <TouchableOpacity
            onPress={handleCreateShop}
            style={{
              borderRadius: 25,
              paddingHorizontal: 20,
              paddingVertical: 10,
              width: 120,
              height:50,
              bottom: -40,
              backgroundColor:'#2E77E5'
            }}
          >
            <Text style={{  color: "black", fontWeight: "bold", fontSize: 20, marginLeft:10  }}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateShop;
