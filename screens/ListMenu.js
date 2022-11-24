import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, SafeAreaView, render, TextInput, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Bakery4 from '../data/ListMenu'
import AnimatedLottieView from 'lottie-react-native'

function ListMenu({ navigation }) {


    const animation = React.useRef(null);
    React.useEffect(()=>{
      
            if(false){
                animation.current.play(66, 66)
            }else{
                animation.current.play(0, 19)
            }
    }, [])
    const render = ({ item }) => {
        return (
            <View style={{ width: 400, alignItems: 'center', paddingTop: 40 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View>

                    </View>
                    <View style={{ height: 80, width: 280, backgroundColor: '#f0e68c', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={item.image} style={{ width: 100, height: 80, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3cb371' }}>{item.price}</Text>
                        <AnimatedLottieView
                    style={{height:60, width:60}}
                    ref={animation}
                        source={require("../animation/data.json")}
                        autoPlay={true}
                        // loop={false}

                    />
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
                    <Text style={{ fontSize: 20 }}>Favourite Food</Text>
                </View>
                <View style={{ paddingTop: 12, marginRight: 10 }}>
                    <TouchableOpacity>
                        <Image style={{ width: 35, height: 35 }} source={require('../assets/Notification.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingTop: 10, height: 500, alignItems: 'center' }}>
                <FlatList data={Bakery4} renderItem={render} keyExtractor={item => item.id}>
                </FlatList>
            </View>
            <View style={{ paddingTop: 105, }}>
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
    )
}


export default ListMenu;