import React from "react";
import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function reqMedical() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="emergency-share"
        size={150}
        color="#727272"
        style={{ paddingTop: 50 }}
      />
      <Text style={styles.title}>Share Your Location</Text>
      <Text style={styles.sentence}>
        Scan the closest shop front and connect with the service.
      </Text>

      <View style={styles.buttonWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.buttonWrapperText}>Click camera to connect </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 10,
  },
  sentence: {
    fontSize: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop:100
  },
  buttonWrapperText: {
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
