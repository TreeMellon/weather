import React from 'react';
import {SafeAreaView, StyleSheet, Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

import {useState, useEffect} from 'react';

//import { useGetWeather } from './src/hooks/useGetWeather';
import { useTranslation } from 'react-i18next';



const CurrentWeather =  ({weatherData}) => {

  {/*
  function changeMessage(weatherCon){

    const conditions = ["Clear","Clouds" ]

    let localizedWeather= "맑은 하늘"

    console.log("weatherData", weatherData)
    console.log("localizedWeather", localizedWeather)

    return localizedWeather
  }
*/}

  const changeToKorean = async () => {

  let korean = "감사합니다."
  console.log("changeToKorean", changeToKorean)
  
  return korean

  }


  const {t, i18n} = useTranslation();

  const {wrapper, viewContainer, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles

 // console.log(weatherData)

  const { main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0].main

  //console.log("weather[0].description",weather[0].description)

 // let localizedWeather = changeMessage(weatherCondition)

  
  useEffect(() => { 

    async function doOne() {
      //     console.log("doOne is called when app back to foreground")
           try{

           await changeToKorean()
 
          } catch (error) {

             setError(error)
          }
         }
   
         doOne();


    return () => {}
  },[])
  

  

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={viewContainer}>
          <Icon name={weatherType[weatherCondition].icon} size={100} color="#fff" />
    
          <Text style={tempStyle}>
          {temp}
          </Text>
          <Text style={feels}>
          
          {`${t('feels')}: ${feels_like}`} 
          {/*  {`Feels like: ${feels_like}`} */}
          </Text>

   {/*         <RowText messageOne={`high: ${temp_max}`} messageTwo={`low: ${temp_min}`}  */}
   
      <RowText messageOne={`${t('high')}: ${temp_max}`} messageTwo={`${t('low')}: ${temp_min}`} 
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          ></RowText>

      </View>

      <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message}     
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
          ></RowText>

    </SafeAreaView>
    )
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
 
    backgroundColor : "pink",
    width:"100%",
    alignItems:"center",
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
   
    alignItems: "center",
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },

  tempStyle: {
    color: "black",
    fontSize: 48,
  },

  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  message: {
    fontSize: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

});

export default CurrentWeather;
