import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, SafeAreaView, render, TextInput, StatusBar } from 'react-native'
import HomeMenu from "../screens/HomeMenu";
import StartedApp from "../screens/StartedApp";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Detail from "../screens/Detail";
import ListMenu from "../screens/ListMenu";
import Cart from "../screens/Cart";


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (

        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#daa520', } }}>
            <Stack.Screen name='StartedApp' component={StartedApp} options={{ headerShown: false }}  />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='HomeMenu' component={HomeMenu} options={{ headerShown: false }}/>
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='ListMenu' component={ListMenu} />
            <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>


    );
}

const MainNavigator = () => {
    return (

        <NavigationContainer>
            <StackNavigator >

            </StackNavigator>
        </NavigationContainer>

    );
}

export default MainNavigator;