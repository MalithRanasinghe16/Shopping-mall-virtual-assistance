import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore,} from "firebase/firestore";

export default function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mobNum, setMobNum] = useState("");
  const [age, setAge] = useState("");
  // const [gender,setGender] = useState("");
  const auth = FIREBASE_AUTH;
  const router = useRouter();
  

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Registered");
      try {
        const docRef = await addDoc(collection(FIREBASE_DB, "users"), {
          first: fName,
          last: lName,
          email: email,
          age: age,
          mobNum: mobNum,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      router.replace("./(tabs)");
    } catch (error: any) {
      console.log(error);
      alert("SignIn failed: " + error.message);
    } 
    try{

    }
    finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="black"
              top={10}
              left={3}
              onPress={() => {
                router.push("/Start");
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1.5,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              alignItems: "flex-start",
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 32, marginTop: 20, marginLeft: 20 }}>
          Welcome!
        </Text>
        <Text style={{ fontSize: 16, marginLeft: 20, marginTop: -6 }}>
          Create your account
        </Text>
      </View>

      <View>
        <View style={styles.inputcontainer}>
          <Text>First Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" "
            onChangeText={(text) => setFname(text)}
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
        </View>

        <View style={styles.inputcontainer}>
          <Text>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" "
            onChangeText={(text) => setLname(text)}
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>
        </View>

        <View style={styles.inputcontainer}>
          <Text>Age:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" "
            onChangeText={(text) => setAge(text)}
            autoCorrect={false}
          ></TextInput>
        </View>

        <View style={styles.inputcontainer}>
          <Text>Mobile number:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" +94XXXXXXXXX"
            onChangeText={(text) => setMobNum(text)}
            autoCorrect={false}
          ></TextInput>
        </View>

        <View style={styles.inputcontainer}>
          <Text>Email:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" "
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text>Create password:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Your password must be 8 charactors or more"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={signUp}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
        Already have an account?
      </Text>

      <TouchableOpacity
        style={{
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -15,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={() => router.replace("./LogIn")}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#1164C4",
          }}
        >
          {"Log in"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    height: 40,
  },
  inputcontainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});


