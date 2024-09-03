import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<TextInputProps> = ({ placeholder, onChangeText }) => {
  const [text, setText] = useState<string>('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    onChangeText(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        
    
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={text}
        textAlign="left"
      />

        
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:10 ,
    backgroundColor:'black',
    
  },
  input: {
    height: 40,
    width:350,
    borderColor: 'black',
    backgroundColor:'gray',
    borderWidth: 2,
    textAlign:'left',
  },


  buttonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },

  label: {
    textAlign: 'left',
    marginBottom: 5,
  },


  title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  dropdown: {
    marginLeft: 18,
    marginRight:30,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

 

  




});

export default CustomTextInput;

