
import React, {useState, useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Alert, Linking, PermissionsAndroid, BackHandler, AppState} from 'react-native';
import Geolocation,{GeolocationResponse}  from '@react-native-community/geolocation';
//import { WEATHER_API_KEY } from "@env" 
import {WEATHER_API_KEY} from "@env"
import { useTranslation } from 'react-i18next';

export const useGetWeather = () => {

    console.log("WEATHER_API_KEY",{WEATHER_API_KEY})

    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
   // const [location, setLocation] = useState(false)
    const [loading, setLoading] = useState(true)
    const [weather,setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [error, setError] = useState(null)


    const {t, i18n} = useTranslation();

    
    const changeLanguage = async() => {
      i18n.changeLanguage('kr')

    }

    const fetchWeatherData = async () => {

        try{
    
      //    console.log("testget location", location.coords.latitude)
    
          let data = null
    
          if(lat === null && lat.length) {
    
            console.log("location data is null and fetch")
    
            const res = await fetch(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
              );
              
                   data = await res.json();
                   console.log("data",JSON.stringify(data))
                   setWeather(data)               
    
          } else {

            console.log("location data is nul and fetch", lat)
       //     console.log("lat", lat)

              const dumylatitude = 37.6471141
              const dumylongitude = 126.7821711

                const res = await fetch(
                  `http://api.openweathermap.org/data/2.5/forecast?lat=37.6471141&lon=126.7821711&appid=${WEATHER_API_KEY}&units=metric`
                  
                  );

               data = await res.json();
         //      console.log("data",data)
               console.log("data",JSON.stringify(data))
               setWeather(data)
    
          }
      
          } catch (err) {
        //    setError('could not fetch weather')
            console.log("error fetch occured")
            console.error(err);
          } finally {
            setLoading(false)
          }
      
      };
    
    
      const getGeoLocation = async() => {
     // function getGeoLocation() {
        Geolocation.getCurrentPosition(
          position => {
    
            console.log("getGeoLocation is called")
          
            console.log("position latitude", position.coords.latitude);
         //   setLocation(position);
    
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
    
         //   console.log({location})
    
            
        //    console.log("location: ", location)
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
    
            Alert.alert('퍼미션', '로케이션 퍼미션 설정 요청', [
    
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
    
        //    setLocation(false);
            //{location ? location.coords.latitude : null}
    
            BackHandler.exitApp();
      //      return
          },
          {enableHighAccuracy: false, timeout: 15000, maximumAge: 3600000},
        );
    
     
    
      }
    
    
      const CheckPermission = async () => {
        try {
          const result = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "location permission",
              message: 'you can use the app',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'cance;',
              buttonPositive: 'OK',
            },
          );
          if (result === 'granted') {
            console.log('success');
    
            return result;
          } else {
            console.log("location permission denied")
            Alert.alert('퍼미션', '로케이션 퍼미션 설정 요청', [
    
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }
        } catch (e) {
          console.log(e);
    
          return
        }
      };
    
        
        useEffect(() => {
    
          const subscription = AppState.addEventListener('change', nextAppState => {
            if (
              appState.current.match(/inactive|background/) &&
              nextAppState === 'active'
            ) {
              console.debug('App has come to the foreground!');
            }

            if (
              appState.current.match(/active|foreground/) &&
              nextAppState === 'background'
            ) {
              console.debug('App has come to the background!');

              return
            }
            
              console.debug("appstate out of if clause")
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
    
            console.debug('AppState', appState.current);
    
            async function doOne() {
         //     console.log("doOne is called when app back to foreground")
              try{
              await CheckPermission();
              await getGeoLocation()
              await fetchWeatherData()
              await changeLanguage()
    
             } catch (error) {

                setError(error)
             }
            }
                     
          doOne();
    
          }); 
    
          return () => {
            subscription.remove();
          };
        
        }, [lat, lon]);

    
        return [loading, error, weather]
}