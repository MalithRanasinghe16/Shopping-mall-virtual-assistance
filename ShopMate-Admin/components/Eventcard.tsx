import { router } from "expo-router";
import React, { FC } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface EventCardProps {
  id: string;
  name: string;
  logo: string;
  rating: string;
}

const EventCard: FC<EventCardProps> = (props) => {
  const { name, logo, rating, id } = props;

  return (
  <View style={{marginTop:10}}>
    <Text style={{color:'black',marginLeft:30, bottom: -10, fontSize: 17}}>
        Today
    </Text>
    <View style={styles.container}>
      <Image
        source={{
          uri: logo,
        }}
        style={styles.logo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 5,
    padding: 5,
    bottom: -15,
    height: 120,
    width: 320
  },
  logo: {
    width: 80,
    height: 80,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 10,
  },
  name: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,

  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  rating: {
    fontSize: 15,
    color: "white",
    fontWeight: "100",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  edit: {
    fontWeight: "bold",
    color: "white",

    fontSize: 12,
    marginBottom: 5,
    marginLeft: 250,
    bottom: 70,
  },
});

export default EventCard;
