import React, {useState, useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Alert, Linking, PermissionsAndroid, BackHandler, AppState} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Geolocation,{GeolocationResponse}  from '@react-native-community/geolocation';
//import { WEATHER_API_KEY } from "@env" 
import {WEATHER_API_KEY} from "@env"
import { useGetWeather } from './src/hooks/useGetWeather';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import ErrorItem from './src/components/ErrorItem';



//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {




    const connectToRemoteDebugger = () => {
      NativeDevSettings.setIsDebuggingRemotely(true);
    };

    const [loading, error, weather] = useGetWeather()

    if(weather && weather.list) {


  //    console.log("app weather " ,weather)
 //     console.log("app weather.list " ,weather.list)

      return (
   //   console.log(weather)

      <NavigationContainer>

      <Tabs weather={weather}/>
      </NavigationContainer>
      
      )
    }

        
    return (
      <View style={styles.container}>

      {loading? <ActivityIndicator size={'large'} color={'blue'} /> : 
      <ErrorItem />
      }


      </View>
    )
 // }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

  export default App;
