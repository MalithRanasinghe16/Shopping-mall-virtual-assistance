import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Router, router } from 'expo-router';


const Emergency = () => {
  const handleRequestMedicalAssistance = () => {
    // Logic to handle request for medical assistance
  };

  const handleRequestSecurityAssistance = () => {
    // Logic to handle request for security assistance
  };

  const handlePublicEmergencyServices = () => {
    // Logic to handle public emergency services
  };

  return (
    <View>
      <SafeAreaView>
        <ImageBackground source={require('../../assets/images/EmergencyTabBG.png')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>
            <Text style={styles.heading}>Emergency Services</Text>

            {/* Button for Request Medical Assistance */}
            <TouchableOpacity style={styles.button} onPress={()=>router.push("/emergencyServ/reqMedical")}>
              
              
              <Image source={require('../../assets/images/medicalIcon.webp')} style={styles.icon} />
              <Text style={styles.buttonText}>Request Medical Assistance</Text>
            </TouchableOpacity>

            {/* Button for Request Security Assistance */}
            <TouchableOpacity style={styles.button} onPress={()=>router.push("/emergencyServ/reqSecurity")}>
              
              <Image source={require('../../assets/images/securityIcon.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Request Security Assistance</Text>
            </TouchableOpacity>

            {/* Button for Public Emergency Services */}
            <TouchableOpacity style={styles.button} onPress={()=>router.push("/emergencyServ/publicEmergency")}>
              
              <Image source={require('../../assets/images/publicEM.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Public Emergency Services</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252525',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Emergency;
