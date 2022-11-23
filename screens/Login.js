import { Text, StyleSheet, View, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native'
import React, { Component } from 'react'
function Login({ navigation }) {

  return (
    <View style={{ backgroundColor: '#cd853f', height: '100%', }}>
      <StatusBar></StatusBar>

      <View style={{ alignItems: 'center', paddingTop: 60 }}>
        <Image style={{ height: 200, width: 200, borderRadius: 360 }} source={require('../assets/Logo.png')} />
      </View>

      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login To Your Account</Text>
      </View>

      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ justifyContent: 'center', }}>
            <Image style={{ height: 40, width: 40 }} source={require('../assets/User1.png')} />
          </View>
          <View style={{ height: 40, width: 240, backgroundColor: '#ffffff', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
            <TextInput placeholder='Account Name' style={{ fontSize: 16, marginLeft: 10 }}></TextInput>
          </View>
        </View>

        <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'center' }}>
            <Image style={{ height: 40, width: 40 }} source={require('../assets/Pass.png')} />
          </View>
          <View style={{ height: 40, width: 240, backgroundColor: '#ffffff', justifyContent: 'center', borderRadius: 20, marginLeft: 10 }}>
            <TextInput secureTextEntry={true} placeholder='Password' style={{ fontSize: 16, marginLeft: 10, }}></TextInput>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', paddingTop: 30 }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeMenu')}>
        <View style={{ backgroundColor: '#ffff00', width: 120, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
         
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Login</Text>
         
        </View>
        </TouchableOpacity>
      </View>


      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Or Login With</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#ffff00', width: 140, height: 50, borderRadius: 10, justifyContent: 'center',justifyContent: 'center', alignItems: 'center', flexDirection:'row'  }}>
            <Image style={{ height: 40, width: 40 }} source={require('../assets/FB.png')} />
            <Text style={{marginLeft:5}}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={{ backgroundColor: '#ffff00', width: 140, height: 50, marginLeft: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
            <Image style={{ height: 40, width: 40 }} source={require('../assets/GG.png')} />
            <Text style={{marginLeft:5}}>Google</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', paddingTop: 30, }}>
        <View style={{ flexDirection: 'row' }}>
          <View><Text style={{ fontSize: 16, }}>You don't have account?</Text></View>
          <View><TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5, color: '#eee8aa' }}>Sign Up Here</Text></TouchableOpacity></View>
        </View>
      </View>

      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <TouchableOpacity><Text style={{ fontSize: 16, fontWeight: 'bold', color: '#eee8aa' }}>Forgot password?</Text></TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={() => navigation.navigate('StartedApp')}>
          <Text>Started</Text>
        </TouchableOpacity> */}

    </View>

  )

}
export default Login;
