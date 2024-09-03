import { router } from "expo-router";
import React, { FC } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface StaffCardProps {
  id: string;
  name: string;
  logo: string;
  age: string;
  category: string;
  time: string;
  edit?: string;
}

const StaffCard: FC<StaffCardProps> = (props) => {
  const { name, logo, age, category, time, edit, id } = props;

  const handleUpdateStaff = () => {
    const item = {
      id,
    };
    router.push({ pathname: "../UpdateStaff", params: item });
  };

  return (
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
          <Text style={styles.age}>{age}</Text>
        </View>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.time}>{time}</Text>
        <TouchableOpacity onPress={handleUpdateStaff}>
          <Text style={styles.edit}>{edit}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 5,
    height: 130,
    width: 320,
  },
  logo: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 2,
  },
  name: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    bottom: -30,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    bottom: -15,
  },
  age: {
    color: "black",
    bottom: -15,
    fontSize: 15,
    marginBottom: 5,

    marginLeft: 1,
  },
  ratingStars: {
    marginLeft: 5,
    color: "black",
  },
  category: {
    color: "black",
    bottom: -28,
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 5,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  time: {
    color: "black",
    bottom: -25,
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 5,
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

export default StaffCard;
