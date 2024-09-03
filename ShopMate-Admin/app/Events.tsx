import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "@/firebaseconfig";
import EventCard from "@/components/Eventcard";

const Events = () => {
  const [eventList, seteventList] = useState<any[]>([]);

  const handleFetchStaff = async () => {
    const eventRef = collection(FIREBASE_DB, "events");

    onSnapshot(eventRef, {
      next: (snapshot) => {
        const eventData: any[] = [];
        snapshot.docs.forEach((doc) => {
          eventData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("Event List: ", eventData);
        seteventList(eventData);
      },
      error: (error) => {
        console.error("Error fetching events:", error);
      },
    });
  };
  useEffect(() => {
    handleFetchStaff();
  }, []);

  return (
    <View>
      {eventList.map((events) => (
        <EventCard
          key={events.id}
          id={events.id}
          name={events.name}
          logo={events.image}
          rating={events.rating}
        />
      ))}
    </View>
  );
};

export default Events;
