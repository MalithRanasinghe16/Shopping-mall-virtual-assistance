import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import CustomTextInput from './CustomTextInput';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const RegisterScreen = () => {
  const [Name, setInput1] = useState<string>('');
  const [Age, setInput2] = useState<string>('');
  const [Gender, setInput3] = useState<string>('');
  const [Service, setInput4] = useState<string>('');
  const [Email, setInput5] = useState<string>('');
  const [MobileNumber, setInput6] = useState<string>('');

  const handleInputChange1 = (text: string) => setInput1(text);
  const handleInputChange2 = (text: string) => setInput2(text);
  const handleInputChange3 = (text: string) => setInput3(text);
  const handleInputChange4 = (text: string) => setInput4(text);
  const handleInputChange5 = (text: string) => setInput5(text);
  const handleInputChange6 = (text: string) => setInput6(text);

  const handleRegister = () => {
    // You can handle registration logic here
    console.log('Register button clicked');
  };

  
  const data = [
    { label: 'Medical', value: 'Medical' },
    { label: 'Security', value: 'Security' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: {Name}</Text>
      <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange1} />
      <Text>Age: {Age}</Text>
      <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange2} />
      <Text>Gender: {Gender}</Text>
      <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange3} />

      <View style={{ flexDirection: 'row'}}>
        <View>
          <Text style={{ flexDirection: 'row' }}>Service: {Service}</Text>
          <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange4} />

        </View>
        <View style={{ flex: 2,justifyContent: 'center', alignItems: 'center'}}>
          <Dropdown
            style={{ margin: 12, height: 50, borderBottomColor: 'gray', borderBottomWidth: 1 }}
            placeholderStyle={{ fontSize: 12 }}
            selectedTextStyle={{ fontSize: 12 }}
            inputSearchStyle={{ height: 40, fontSize: 14 }}
            iconStyle={{ width: 20, height: 20 }}
            data={data}
            search maxHeight={300}

            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={Service}
            onChange={(item) => setInput4(item.value)}
            renderLeftIcon={() => <AntDesign style={{ marginRight: 5 }} color="black" name="Safety" size={20} />}
          />

        </View>

      </View>


      <Text>Email: {Email}</Text>
      <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange5} />
      <Text>MobileNumber: {MobileNumber}</Text>
      <CustomTextInput placeholder="Type here..." onChangeText={handleInputChange6} />

      <View>
        {/* Changed Button to TouchableOpacity */}
        <TouchableOpacity onPress={handleRegister} style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ color: 'black' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register Staff" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
