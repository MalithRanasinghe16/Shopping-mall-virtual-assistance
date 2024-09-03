import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MyComponent = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Explicitly define type as string | null

  const pickImage = async () => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({ // Specify type as ImagePickerResult
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) { // Access the 'cancelled' property instead of 'canceled'
      // Update selectedImage state with the URI of the selected image
      setSelectedImage(result.uri as string); // Type assertion to string
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Today</Text>
      {/* First Box */}
      <View style={styles.box}>
        <Text style={styles.text1}>Open Mic{"\n"}
          organize by Yamaha{"\n"}
          {"\n"}
          HAPPENNING TODAY!!</Text>  
      </View>
      <Image source={require('../assets/images/Event1.jpg')} style={styles.image1} />

      {/* Second Box */}
      <View style={styles.box}>
        <Text style={styles.date2}>20/02/2024</Text>
        <Text style={styles.text2}>INTRODUCING THE LATEST{"\n"}
          SAMSUNG PHONE 2024{"\n"} 
          {"\n"}
          Will be launch on{"\n"}
          20th February!</Text>  
      </View>
      <Image source={require('../assets/images/Event2.jpg')} style={styles.image2} />

      {/* Third Box */} 
      <View style={styles.box}>
        {/* <Text style={styles.textBox}>Edit</Text> */}

        <Text style={styles.date3}>Add Events</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          ) : (
            <Text style={styles.imageText}>Select Image</Text>
          )}
        </TouchableOpacity>
        <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: -20  }}>Edit:</Text>
        <TextInput
          style={styles.input1}
          
          placeholderTextColor="#FFFFFF"
          multiline={true}
          numberOfLines={1}
        />
        <Text style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 25, bottom: 20 }}>Description:</Text>
        <TextInput
          style={styles.input2}
          
          placeholderTextColor="#FFFFFF"
          multiline={true}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7F4',
  },
  box: {
    height: 130,
    width: 310,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: -70, 
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  image1: {
    width: 85,
    height: 110,
    bottom: 150,
    borderRadius: 10,
    marginRight: 210, 
  },
  image2: {
    width: 85,
    height: 110,
    bottom: 150,
    borderRadius: 10,
    marginRight: 210, 
  },
  text1: {
    color: 'black',
    fontSize: 16,
    marginLeft: 40,
    bottom: 10,
    fontWeight: 'bold'
  },
  input1: {
    color: 'white',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: 170,
    marginVertical: 10,
    marginLeft: 125,
    bottom: 20,
  },
  input2: {
    color: 'white',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    width: 170,
    marginVertical: 10,
    marginLeft: 125,
    bottom: 40,
  },
  text2: {
    color: 'black',
    fontSize: 16,
    marginLeft: 70,
    bottom: 10,
    fontWeight: 'bold'
  },
  
  date: {
    color: 'black',
    fontSize: 20,
    bottom: 105,
  },
  date2: {
    color: 'black',
    fontSize: 20,
    bottom: 35,
  },
  date3: {
    color: 'black',
    fontSize: 20,
    bottom: 15,
  },
  textBox: {
    color: 'white',
    fontSize: 15,
    bottom: 30,
    marginLeft: 30,
    fontWeight: 'bold'
  },
  imageContainer: {
    position: 'absolute',
    bottom: 10,
    right: 40,
    left: 40,
    height: 110,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E77E5',
    opacity: 0.7,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginLeft: -33 },
  image: {
    width: 220,
    height: 220,
    borderRadius: 10,
    margin: 6,
      
    marginEnd: 60,
    bottom: -10,
  },
  imageText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default MyComponent;
