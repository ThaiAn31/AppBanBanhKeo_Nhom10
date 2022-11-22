import { Text, StyleSheet, View, TouchableOpacity, StatusBar, Image, SafeAreaView, ImageBackground } from 'react-native'
import React, { Component } from 'react'

function StartedApp({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <View>
        <ImageBackground source={require('../assets/Bakery.png')} resizeMode='cover' style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}>
          {/* <View> */}

          <View style={{ alignItems: 'center', paddingBottom: 30 }}>
            <Image style={{ height: 200, width: 200, borderRadius: 360 }} source={require('../assets/Logo.png')} />
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 220,}}>
            <View style={{backgroundColor:'#ffffff' ,width:380,height:90, alignItems:'center',justifyContent:'center', borderRadius:30}}>
              <Text style={{ fontSize: 24, color: '#000000', fontWeight: 'bold', fontFamily:'Roboto', alignContent:'center', textAlign:'center' }}>We Are The Best Choise For You, The Best Extremely You Got</Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 100 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={{ backgroundColor: '#ffff00', width: 160, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
                <Text style={{ fontSize: 18, color: '#000000' }}>Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* </View> */}

        </ImageBackground>
      </View>
    </SafeAreaView>
  )

}

export default StartedApp;