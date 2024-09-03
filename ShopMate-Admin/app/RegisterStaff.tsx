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
import { FIREBASE_DB, FIREBASE_AUth } from "../firebaseconfig";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";

const data = [
  { label: "Medical", value: "Medical" },
  { label: "Security", value: "Security" },
];

const RegisterScreen = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleNameChange = (text: string) => setName(text);
  const handleAgeChange = (text: string) => setAge(text);
  const handleGenderChange = (text: string) => setGender(text);
  const handleServiceChange = (text: string) => setService(text);
  const handleEmailChange = (text: string) => setEmail(text);
  const handleMobileChange = (text: string) => setMobile(text);
  const handlePasswordChange = (text: string) => setPassword(text);
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
      const storageRef = ref(storage, `staff-picks/${new Date()}`);

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

  const handleRegister = async () => {
    // You can handle registration logic here
    console.log("Register button clicked");

    if (
      !name ||
      !age ||
      !gender ||
      !service ||
      !email ||
      !mobile ||
      !imageUri ||
      !password
    ) {
      console.log("Please fill in all the required fields");
      Alert.alert("Please fill in all the required fields");
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(
      FIREBASE_AUth,
      email,
      password,
    );
    const user = userCredential.user;

    const doc = addDoc(collection(FIREBASE_DB, "staff"), {
      name,
      age,
      gender,
      service,
      email,
      mobile,
      image: imageUri,
      uid: user.uid,
    });

    console.log("DOC: ", doc);
    Alert.alert("Successfully Created");
    router.navigate("StaffPage");

    setName("");
    setAge("");
    setGender("");
    setService("");
    setEmail("");
    setPassword("");
    setMobile("");
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
      <View className="w-full flex-1  pb-24 ">
        <View style={{ bottom: -20,  }}>
          <Text style={{ fontSize: 15, fontWeight: "bold"  }}>Name:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleNameChange}
            value={name}
            
          />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Age:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleAgeChange}
            value={age}
          />
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Gender:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleGenderChange}
            value={gender}
          />

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Service:</Text>
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
            value={service}
            onChange={(item) => handleServiceChange(item.value)}
          />

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Email:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleEmailChange}
            value={email}
          />
          
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Mobile No:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleMobileChange}
            value={mobile}
          />

          <View className=" flex-row justify-between items-center bg-white rounded-2xl shadow-2xl  p-3 mt-3">
            <View>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="w-12 h-12 rounded-full items-center justify-center "
                />
              ) : (
                <View className="w-20 h-20 rounded-full items-center justify-center  bg-[#2E77E5]/40" />
              )}
            </View>
            <View>
              <Text className="text-lg font-semibold self-stretch ">
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
            onPress={handleRegister}
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
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft:6 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
