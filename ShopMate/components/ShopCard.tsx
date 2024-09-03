import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ShopCard = ({ name, logo, rating, category }) => {
    // Check if props are provided, otherwise set default values
 
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.ratingStars}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Text>
        </View>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
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
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rating: {
    fontSize: 15,
    color: 'white',
    fontWeight: '100',
  },
  ratingStars: {
    marginLeft: 5,
    color: 'white',
  },
  category: {
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default ShopCard;
