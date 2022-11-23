import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, SafeAreaView, render, TextInput, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Bakery3 from '../data/ListCart'
function Cart({ navigation }) {
  const render2 = ({ item }) => {
    return (
      <View style={{ width: 400, alignItems: 'center', paddingTop: 40 }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <View>

          </View>
          <View style={{ height: 80, width: 280, backgroundColor: '#f0e68c', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={item.image} style={{ width: 100, height: 80, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3cb371' }}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: '#ffffcc', height: '100%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ paddingTop: 10, marginLeft: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#b0e0e6', borderRadius: 360 }} onPress={() => navigation.navigate('Login')}>
            <Image style={{ width: 40, height: 40, borderRadius: 360 }} source={require('../assets/Account.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15, }}>
          <Text style={{ fontSize: 20 }}>Payment</Text>
        </View>
        <View style={{ paddingTop: 12, marginRight: 10 }}>
          <TouchableOpacity>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/Notification.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
        <View style={{ backgroundColor: '#f5f5f5', width: 260, height: 40, borderWidth: 1, justifyContent: 'center', borderRadius: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingLeft: 10 }}>
              <Image style={{ width: 30, height: 30 }} source={require('../assets/Searching.png')} />
            </View>
            <View style={{ paddingLeft: 10, }}>
              <TextInput placeholder='Type here to search' style={{ fontSize: 20, }}></TextInput>
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 5 }}>
          <TouchableOpacity>
            <Image style={{ width: 40, height: 40, }} source={require('../assets/Sorting.png')} />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ paddingTop: 10, height: 500, alignItems: 'center' }}>
        <FlatList data={Bakery3} renderItem={render2} keyExtractor={item => item.id}>
        </FlatList>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeMenu')}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={{ backgroundColor: '#ffff00', width: 280, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
            <Text style={{ fontSize: 20 }}>Check Out</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}


export default Cart;