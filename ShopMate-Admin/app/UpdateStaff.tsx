import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { MaterialIcons } from "@expo/vector-icons";

import CustomTextInput from "./CustomTextInput";
import { FIREBASE_DB } from '@/firebaseconfig';
import { router, useLocalSearchParams } from "expo-router";

const data = [
  { label: "Medical", value: "Medical" },
  { label: "Security", value: "Security" },
];

const UpdateScreen: FC = () => {
  const item = useLocalSearchParams();

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleNameChange = (text: string) => setName(text);
  const handleAgeChange = (text: string) => setAge(text);
  const handleGenderChange = (text: string) => setGender(text);
  const handleServiceChange = (text: string) => setService(text);
  const handleEmailChange = (text: string) => setEmail(text);
  const handleMobileChange = (text: string) => setMobile(text);
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
    if (item && item.id) {
      // You can handle registration logic here
      console.log("Register button clicked");
      const staffDocRef = doc(FIREBASE_DB, "staff", item.id);

      if (
        !name ||
        !age ||
        !gender ||
        !service ||
        !email ||
        !mobile ||
        !imageUri
      ) {
        console.log("Please fill in all the required fields");
        Alert.alert("Please fill in all the required fields");
        return;
      }

      await updateDoc(staffDocRef, {
        name,
        age,
        gender,
        service,
        email,
        mobile,
        image: imageUri,
      });

      console.log("DOC: ", doc);
      Alert.alert("Successfully Updated");
      router.navigate("StaffPage");

      setName("");
      setAge("");
      setGender("");
      setService("");
      setEmail("");
      setMobile("");
      setImageUri("");
    } else {
      console.log("Item is null or undefined.");
    }
  };

  useEffect(() => {
    if (item && item.id) {
      console.log("Item received:", item);
      const staffRef = doc(FIREBASE_DB, "staff", item.id);

      getDoc(staffRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            console.log("Staff Data: ", docSnapshot.data());
            const data = docSnapshot.data();
            setName(data.name);
            setAge(data.age);
            setEmail(data.email);
            setGender(data.gender);
            setMobile(data.mobile);
            setImageUri(data.image);
            setService(data.service);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    } else {
      console.log("Item is null or undefined.");
    }
  }, []);

  return (
    <ScrollView
      className="overflow-auto flex-1"
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View className="w-full flex-1 pt-12 pb-24">
        <View style={{ bottom: -20 }}>
          <Text style={{ fontSize: 15 }}>Name:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleNameChange}
            value={name}
          />
          <Text style={{ fontSize: 15 }}>Age:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleAgeChange}
            value={age}
          />
          <Text style={{ fontSize: 15 }}>Gender:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleGenderChange}
            value={gender}
          />

          <Text style={{ fontSize: 15 }}>Service:</Text>
          <Dropdown
            style={{
              marginVertical: 12,
              height: 35,
              width: 300,
              borderColor: "black",
              backgroundColor: "#D0D0D0",
              borderWidth: 1,
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

          <Text style={{ fontSize: 15 }}>Email:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            onChangeText={handleEmailChange}
            value={email}
          />
          <Text style={{ fontSize: 15 }}>Mobile No:</Text>
          <CustomTextInput
            placeholder="     Type here..."
            value={mobile}
            onChangeText={handleMobileChange}
          />

          <View className=" flex-row justify-between items-center bg-[#D0D0D0] rounded-2xl shadow-2xl border border-black p-3 mt-3">
            <View>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  className="w-12 h-12 rounded-full items-center justify-center"
                />
              ) : (
                <View className="w-12 h-12 rounded-full items-center justify-center bg-black/5" />
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
                <MaterialIcons name="add-a-photo" color="#000" size={24} />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="justify-center items-center">
          {/* Changed Button to TouchableOpacity */}
          <TouchableOpacity
            onPress={handleRegister}
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              width: 100,
              bottom: -40,
            }}
          >
            <Text style={{ color: "black" }}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateScreen;
