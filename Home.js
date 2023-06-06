import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Button ,TextInput} from "react-native";
import Details from './Details';

function HomeScreen() {
    const navigation=useNavigation()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name1,setName]=useState("")

    const login=()=>{
        if(email==="abc@gmail.com" && password==='123456' && name1==="abc"){
            navigation.navigate("Details",{
                name1:name1
            })
        }
        else{
            Alert.alert("enter correct details")
        }
    }
  return (
    <View >
        <TextInput placeholder="name"
        onChangeText={(text)=>setName(text)}
        value={name1}/>
        <TextInput placeholder="Email"
        onChangeText={(text)=>setEmail(text)}
        value={email}/>
         <TextInput placeholder="password"
        onChangeText={(text)=>setPassword(text)}
        value={password}
        secureTextEntry/>
        <Button title='login' onPress={login}/>
        
        </View>
  )

}
export default HomeScreen