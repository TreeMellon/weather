import React from 'react';
import {SafeAreaView, Text, StyleSheet, ImageBackground, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import IconText from '../components/IconText';
import moment from 'moment';

import { useTranslation } from 'react-i18next';


const City = ({weatherData}) => {

    const {t, i18n} = useTranslation();
 

    function currentTime2(timezoneIn) {
       //     console.log(timezoneIn)
       //     const today = new Date()

        //    console.log(today)
        //    const timezoneOffset = (new Date()).getTimezoneOffset();
        //    console.log(timezoneOffset)

            const current = new Date();
            const time = current.toLocaleTimeString("en-US");

            console.log("time", time)

    }


    function currentTime(timezoneIn, dtIn) {
     //   let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));
        let dateTime = new Date(dtIn * 1000);

        let hour = (dateTime.getHours() % 12) - 3;
        let ampm = hour >= 12 ? 'pm' : 'am';

        let minutes = dateTime.getMinutes();
        let weekday = dateTime.toLocaleString('default', {weekday: 'long'});
        let month = dateTime.toLocaleString('default', {month: 'short'});
        let date = dateTime.getDate();

        console.debug("dateTime",dateTime)

     //   return `${hour} : ${minutes} ${ampm} - ${weekday}, ${month} ${date}`;

        return dateTime
    }

    const {name, country, population, sunrise, sunset, timezone} = weatherData

    currentTime2({timezone})
    let localTime  = currentTime(timezone, sunrise)
    let localTimeSunSet  = currentTime(timezone, sunset)

    const {container, image, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout} = styles

    return (
   
        <SafeAreaView style={container}> 
             <ImageBackground source={require('../../assets/city-background.jpg')} style={image}>
           
                <Text style={[cityName, cityText]}> {name}
                </Text>
                <Text style={[countryName, cityText]}> {country}</Text>

                <View  style={populationWrapper}>
                    <IconText 
                        iconName={'verified-user'} 
                        iconColor={"red"} 
                        bodyText={`${t('population')}: ${population}`} 
                        bodyTextStyles={populationText} 
                    />
                  
               {/* <Icon name={"verified-user"} size={50} color={"white"}></Icon>
                <Text style={populationText}>8000</Text>
                 */}
                 </View>
               
              

                <View style={[riseSetWrapper, rowLayout]}> 
                <IconText 
                        iconName={'sunny-snowing'} 
                        iconColor={"white"} 
                    //    bodyText={moment(sunrise).format('h:mm:ss a')} 
                        bodyText={moment(localTime).format('h:mm:ss a')} 
                        bodyTextStyles={riseSetText} 
                    />
                
                <IconText 
                        iconName={'sunny-snowing'} 
                        iconColor={"white"} 
                        bodyText={moment(localTimeSunSet).format('h:mm:ss a')} 
                        bodyTextStyles={riseSetText} 
                    />

                </View>
            </ImageBackground>
                
        </SafeAreaView>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContents: "space-evenly",
        marginTop: 0,
        backgroundColor: 'red',
        width: "100%",
    },
    image: {
        flex: 1,
        padding: 0,

    },
    cityName: {

        fontSize: 40,

    },
    countryName: {

        fontSize: 30,

    },
    citText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
        color: "white"
    },
    populationWrapper: {
        flextDirection: "row",
        alignItems: "center",
        justifyContents: "center",
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold"
    },
    riseSetWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop:30

    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"

    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
        fontWeight: "bold"
    }
})

export default City;