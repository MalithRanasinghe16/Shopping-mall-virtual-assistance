import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../Firebaseconfig";
import { Stack, router } from "expo-router";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (!user){
        router.replace("/Start");
      }
    });

    // Unsubscribe from the auth state listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (

    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="Start" options={{ headerShown: false }} />
      <Stack.Screen name="auth/RegisterUser" options={{ headerShown: false }} />
      <Stack.Screen name="auth/LogIn" options={{ headerShown: false }} />
      
      
    </Stack>

  );
}
