import { Text, StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Bakery2 from '../data/ListHomeMenu'
import { useRoute } from '@react-navigation/native'
function Detail({ navigation }) {
  const route = useRoute();
  const Bakery2 = route.params;
  return (
    <View style={{ backgroundColor: '#ffffe0', height: '100%' }}>
      <StatusBar></StatusBar>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ paddingTop: 10, marginLeft: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#b0e0e6', borderRadius: 360 }} onPress={() => navigation.navigate('Login')}>
            <Image style={{ width: 40, height: 40, borderRadius: 360 }} source={require('../assets/Account.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15, }}>
          <Text style={{ fontSize: 20 }}>Detail Food</Text>
        </View>
        <View style={{ paddingTop: 12, marginRight: 10 }}>
          <TouchableOpacity>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/Notification.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>

        <View style={{}}>
          <Image source={require('../assets/Snack.png')} style={{ width: 280, height: 280, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}></Image>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
          <TouchableOpacity>
            <View>
              <Image source={require('../assets/plus.png')} style={{ width: 30, height: 30, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}></Image>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginLeft: 20 }}>1</Text>
          <TouchableOpacity>
            <View>
              <Image source={require('../assets/plus.png')} style={{ width: 30, height: 30, marginLeft: 20, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}></Image>
            </View>
          </TouchableOpacity>
        </View>


        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Name Product: Cookie 1</Text>
        </View>
        <View style={{ paddingTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }}>Food description: Delicious, Smooth, Sweet</Text>
        </View>
        <View style={{ paddingTop: 20, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, color: '#008000' }}>Price: 30$</Text>
        </View>
      </View>
      <View style={{ paddingTop: 50, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ backgroundColor: '#cd853f', height: 50, width: 180, borderRadius: 20, alignItems: 'center', justifyContent: 'center', }}>
          <View>
            <Text style={{ fontSize: 20 }}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )

}

export default Detail;