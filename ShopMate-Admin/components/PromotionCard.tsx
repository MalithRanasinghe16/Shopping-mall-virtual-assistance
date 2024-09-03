import React, { FC } from "react";
import { ScrollView } from "react-native";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface PromoCardproos {
  id: string;
  logo: string;
}

const PromoCard: FC<PromoCardproos> = (props) => {
  const { logo, id } = props;

  return (
    <View style={styles.container}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image
        source={{ uri: logo }}
        style={styles.logo}
      />
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  logo: {
    width: 250,
    height: 250,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 5,
    marginLeft: 75
  },
});

export default PromoCard;
