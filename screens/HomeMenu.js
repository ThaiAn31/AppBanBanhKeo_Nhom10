
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, SafeAreaView, render, TextInput, StatusBar } from 'react-native'
import React, { Component, useState } from 'react'
import Bakery from '../data/ListHomeMenu'
import Bakery2 from '../data/ListHomeMenu02'
import Login from './Login'
import { useNavigation } from '@react-navigation/native'

function HomeMenu({ navigation }) {

    const [name, setName] = useState("");
    const [image, setImag] = useState("");
    const Detail = () =>{
        navigation.navigate("Detail",{
            name: name,
            image: image
        })
    }

    const render = ({ item }) => {
        return (
            <View style={{ width: 160, alignItems: 'center' }}>
                <TouchableOpacity>
                    <View>
                        <Image source={item.image} style={{ width: 140, height: 120, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                    </View>
                    <View style={{ height: 50, width: 140, backgroundColor: '#f0e68c', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    
    const render2 = ({ item }) => {
        return (
            <View style={{ width: 200, alignItems: 'center' }}>
                <TouchableOpacity  onPress={Detail} style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={item.image} style={{ width: 100, height: 80, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} />
                    </View>
                    <View style={{ height: 80, width: 80, backgroundColor: '#f0e68c', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3cb371' }}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffe0', maxHeight: '100%' }}>
            <StatusBar></StatusBar>
            <View style={{ maxHeight: '100%' }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ paddingTop: 10, marginLeft: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: '#b0e0e6', borderRadius: 360 }} onPress={() => navigation.navigate('Login')}>
                                <Image style={{ width: 40, height: 40, borderRadius: 360 }} source={require('../assets/Account.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 15, }}>
                            <Text style={{ fontSize: 20 }}>Popular Menu</Text>
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
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 30, }}>
                        <View style={{ width: 300, height: 160, borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <View>
                                <Image style={{ width: 220, height: 160, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }} source={require('../assets/BestSellerFood.png')} />
                            </View>
                            <View style={{}}>
                                <View style={{ backgroundColor: '#fa8072', width: 90, height: 160, alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 20, borderTopRightRadius: 20 }}>
                                    <Text style={{ color: '#fffacd', fontSize: 18 }}>BestSeller</Text>
                                    <Text style={{ color: '#fffacd', fontSize: 16 }}>Just <Text style={{ color: '#98fb98' }}>$40</Text></Text>
                                    <View style={{ paddingTop: 20, }}>
                                        <TouchableOpacity style={{ backgroundColor: '#dda0dd', width: 70, height: 26, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                            <Text style={{ color: '#ffffff' }}>Buy Now</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ paddingTop: 30, marginLeft: 22 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Product Availble:</Text>
                        </View>
                        <View style={{ paddingTop: 30, marginRight: 22 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17 }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10, height: 200 }}>
                        <FlatList horizontal={true} data={Bakery} renderItem={render} keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginLeft: 22 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular Rroduct:</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10, height: 100 }}>
                        <FlatList horizontal={true} data={Bakery2} renderItem={render2} keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                    <View style={{ paddingTop: 20, }}>
                        <View style={{ backgroundColor: '#daa520', flexDirection: 'row', height: 72, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => navigation.navigate('HomeMenu')}>
                                    <Image style={{ width: 40, height: 40, marginLeft: 10 }} source={require('../assets/Home.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40 }} source={require('../assets/Account2.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity>
                                    <Image style={{ width: 40, height: 40 }} source={require('../assets/Locate.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                    <Image style={{ width: 40, height: 40, marginRight: 10 }} source={require('../assets/Cart.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default HomeMenu;