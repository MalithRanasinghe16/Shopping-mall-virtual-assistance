//@ts-nocheck
import React, {useEffect} from "react";
import { StyleSheet, TouchableOpacity, Text, View, Linking, ScrollView } from "react-native";

const emergencyContacts = [
  { title: "Police Emergency Hot-line", number: "118 / 119" },
  { title: "Ambulance / Fire & rescue", number: "110" },
  { title: "Accident Service-General Hospital-Colombo", number: "011-2691111" },
  { title: "Tourist Police", number: "011-2421052" },
  { title: "Police Emergency", number: "011-2433333" },
  { title: "Government Information Center", number: "1919" },
  { title: "Report Crimes", number: "011-2691500" },
  { title: "Emergency Police Mobile Squad", number: "011-5717171" },
  { title: "Fire & Ambulance Service", number: "011-2422222" },
  { title: "Child & Women Bureau", number: "0112444444" },
];

export default function PublicEmergencyScreen() {
 
  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {emergencyContacts.map((contact, index) => (
        <TouchableOpacity
          key={index}
          style={styles.contactContainer}
          onPress={() => handleCall(contact.number)}
        >
          <Text style={styles.contactTitle}>{contact.title}</Text>
          <Text style={styles.contactNumber}>{contact.number}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  contactContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactNumber: {
    fontSize: 16,
    color: "#888",
  },
});
