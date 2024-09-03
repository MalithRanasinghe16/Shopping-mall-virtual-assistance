import { Text, View } from "./Themed";
import { Image } from "react-native";


export default function ReviewCard({props}:{props:{
    img?: any,
    name: string,
    text: string,
    date:string

}}){

    const {img, name, text, date} = props;
    return(
        <View style={{ backgroundColor: 'transparent', width: '90%', height: 'auto', alignSelf: "center", rowGap:5, marginVertical:5 }}>
        <Text style={{fontSize:20}} >{date}</Text>
        <View style={{backgroundColor: '#000', borderRadius: 25, width: '100%', height: 'auto', paddingVertical:25, paddingHorizontal: 30, alignSelf: "center", justifyContent: "center", alignItems:"center", flexDirection: "row", columnGap: 15,}}>
            {/* image */}
        <Image
          style={{ minWidth: 80, minHeight: 80, height: 90, aspectRatio: 1, borderRadius: 10, flex: 1.2 }}
          source={img}
        />
        {/* Text content */}
        <View style={{ flex: 2.5, flexDirection: "column", backgroundColor: 'transparent', rowGap: 5 }}>
          {/* Name */}
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20, marginBottom:5 }}>{name}</Text>
          {/* Details */}
          <View style={{ flexDirection: "row", backgroundColor: 'transparent',justifyContent:"flex-start"  }}>
            <Text style={{ flex: 2, fontSize: 15, color:"white", fontWeight:"100" }}>5.0</Text>
            <Text style={{alignSelf:"flex-start"}}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Text>
          </View>
          <Text style={{color:"white", fontSize:12}}>
          {text}
          </Text>
        </View>

        </View>
      </View>
    )
}