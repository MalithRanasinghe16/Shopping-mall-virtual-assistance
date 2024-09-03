
import { Text, View } from "./Themed";
import { Image } from "react-native";
export default function EmergencyContactProfile(){
return(
    <View style={{ backgroundColor: '#000', borderRadius: 30, width: '90%', height: 'auto', paddingVertical: 20, paddingHorizontal: 30, alignSelf: "center", justifyContent: "center", alignItems:"center", flexDirection: "row", columnGap: 10 }}>
    {/* image */}
    <Image
      style={{ minWidth: 80, minHeight: 80, height: 90, aspectRatio: 1, borderRadius: 100, flex: 1.2 }}
      source={require("../assets/images/maleAvatar")}
    />
    {/* Text content */}
    <View style={{ flex: 2.5, flexDirection: "column", backgroundColor: 'transparent', rowGap: 4 }}>
      {/* Name */}
      <Text style={{ fontWeight: "bold", color: "white", fontSize: 17, marginBottom:5 }}>Full name</Text>
      {/* Details */}
      <View style={{ flexDirection: "row", backgroundColor: 'transparent',  }}>
        <Text style={{ flex: 2, fontSize: 13, color:"white", fontWeight:"100" }}>Age</Text>
        <Text style={{ flex: 0.5, fontSize: 13, color:"white", fontWeight:"100" }}>:25</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: 'transparent',  }}>
        <Text style={{ flex: 2, fontSize: 13, color:"white", fontWeight:"100" }}>Health conditions</Text>
        <Text style={{ flex: 0.5, fontSize: 13, color:"white", fontWeight:"100" }}>:25</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: 'transparent',  }}>
        <Text style={{ flex: 2, fontSize: 13, color:"white", fontWeight:"100" }}>Medicine</Text>
        <Text style={{ flex: 0.5, fontSize: 13, color:"white", fontWeight:"100" }}>:25</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: 'transparent',  }}>
        <Text style={{ flex: 2, fontSize: 13, color:"white", fontWeight:"100" }}>Emergency Alert Time</Text>
        <Text style={{ flex: 0.5, fontSize: 13, color:"white", fontWeight:"100" }}>:25</Text>
      </View>


    </View>

  </View>
)
}