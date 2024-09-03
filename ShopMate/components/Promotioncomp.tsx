import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const Promotioncomp = () => {
  return (
    <TouchableOpacity
    style={styles.promotions}
    onPress={() => console.log("Promotion open")}>
    <Image
      style={{ width: 300, height: 300 }}
      source={require("@/assets/images/offer.png")}/>
  </TouchableOpacity>
  )
}

export default Promotioncomp

const styles = StyleSheet.create({
    promotions: {
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 30,
      },
})