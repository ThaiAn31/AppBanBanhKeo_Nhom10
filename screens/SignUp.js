import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'


function SignUp({ navigation }) {

  return (
    <View style={{backgroundColor:'#f0e68c', height:'100%'}}>



      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <Image style={{ height: 200, width: 200, borderRadius: 360 }} source={require('../assets/Logo.png')} />
      </View>
      <View style={{alignItems:'center', paddingTop:30}}>
        <Text style={{fontSize:20}}>Create Your Account</Text>
      </View>


      <View style={{ flexDirection: 'column', paddingTop: 40, alignItems:'center' }}>
  
          <View style={{ backgroundColor: '#ffffff', width: 240, height: 40, margin:10, justifyContent:'center', borderRadius:20 }}>
            <TextInput placeholder='Name'style={{marginLeft:20}}></TextInput>
          </View>
  
 
          <View style={{ backgroundColor: '#ffffff', width: 240, height: 40, margin:10, justifyContent:'center', borderRadius:20}}>
            <TextInput placeholder='Address'style={{marginLeft:20}}></TextInput>
          </View>

        <View style={{ backgroundColor: '#ffffff', width: 240, height: 40 ,margin:10 , justifyContent:'center', borderRadius:20}}>
          <TextInput placeholder='Email' style={{marginLeft:20}}></TextInput>
        </View>

        <View style={{ backgroundColor: '#ffffff', width: 240, height: 40 ,margin:10 , justifyContent:'center', borderRadius:20}}>
          <TextInput placeholder='Password'style={{marginLeft:20}}></TextInput>
        </View>
      </View>


      <View style={{ alignItems: 'center', paddingTop: 40, }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeMenu')}>
          <View style={{ backgroundColor: '#ffff00', width: 160, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
            <Text style={{ fontSize: 18, color: '#000000' }}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>


    </View>

  )

}

export default SignUp;