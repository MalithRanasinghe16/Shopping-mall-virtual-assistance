import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "@/firebaseconfig";
import PromoCard from "@/components/PromotionCard";

const Promotions = () => {
  const [eventList, seteventList] = useState<any[]>([]);

  const handleFetchStaff = async () => {
    const promoRef = collection(FIREBASE_DB, "promotions");

    onSnapshot(promoRef, {
      next: (snapshot) => {
        const promoData: any[] = [];
        snapshot.docs.forEach((doc) => {
          promoData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("promotions List: ", promoData);
        seteventList(promoData);
      },
      error: (error) => {
        console.error("Error fetching promotions:", error);
      },
    });
  };
  useEffect(() => {
    handleFetchStaff();
  }, []);

  return (
    <View style={{flexDirection:'row'}}>
      <ScrollView horizontal={true} style={{flexDirection:'row'}}>
        {eventList.map((events) => (
          <PromoCard key={events.id} id={events.id} logo={events.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Promotions;
