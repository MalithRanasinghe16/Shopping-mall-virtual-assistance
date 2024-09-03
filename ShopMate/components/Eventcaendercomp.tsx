import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Eventcaendercomp = () => {
  return (
    <View style={styles.eventcalendar}>
      <View>
        <Text>Today</Text>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            height: 130,
            width: 310,
            borderRadius: 20,
            borderWidth: 2,
            backgroundColor: "black",
          }}
          onPress={() => console.log("Event1 open")}
        >
          <View
            style={{
              backgroundColor: "black",
              borderRadius: 20,
              justifyContent: "center",
              marginRight: 5,
            }}
          >
            <Image
              style={{
                flex: 1,
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 10,
                marginLeft: 10,
              }}
              source={require("@/assets/images/event01.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "black",
              marginTop: 5,
              marginBottom: 5,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Event Title
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Event Description
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Event Date
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Eventcaendercomp;

const styles = StyleSheet.create({
  eventcalendar: {
    marginHorizontal: 30,
    marginTop: 20,
  },
});
