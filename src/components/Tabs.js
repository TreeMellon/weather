import React from 'react';
//import {SafeAreaView, StyleSheet, Text,View, FlatList} from 'react-native';
import CurrentWeather from '../screeens/CurrentWeather';
import UpcomingWeather from '../screeens/UpcomingWeather';
import City from '../screeens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTranslation } from 'react-i18next';


const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {

    const {t, i18n} = useTranslation();

    return (
        <Tab.Navigator
        screenOptions = {{
          tabBarActivityTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue',
          },
            headerStyle: {
            backgroundColor: 'lightblue'
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
            }
        }}
      >

         
   
      {/*        <Tab.Screen name="Currnet" options={{   */}
  
         <Tab.Screen name={t('current')}  options={{
          tabBarIcon: ({focused}) => (
            <Icon name={"home"} size={25} color={focused ? 'tomato' : "black"}></Icon>
          )
        }}>
     


        {() => <CurrentWeather weatherData = {weather.list[0]}/> }
      
        </Tab.Screen>

       {/*    <Tab.Screen name="Upcoming" options={{  */}

     
           <Tab.Screen name={t('upcomming')} options={{ 
          tabBarIcon: ({focused}) => (
            <Icon name={"lock-clock"} size={25} color={focused ? 'tomato' : "black"}></Icon>
          )
        }}>

        {() => <UpcomingWeather weatherData = {weather.list}/> }

        </Tab.Screen>

     {/*      <Tab.Screen name="City"  options={{*/}
           
                  <Tab.Screen name={t('city')}  options={{ 
          tabBarIcon: ({focused}) => (
            <Icon name={"center-focus-strong"} size={25} color={focused ? 'tomato' : "black"}></Icon>
          )
        }} >

        {() => <City weatherData = {weather.city}/> }

          </Tab.Screen>



    </Tab.Navigator>
    )
}

export default Tabs;