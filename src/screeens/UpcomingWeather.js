import React from "react";
import {SafeAreaView, StyleSheet, Text, FlatList, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from "../components/ListItem";

import { useTranslation } from 'react-i18next';




const Itemdata = ({item}) => (
  <ListItem item={item}>
  </ListItem> 
  )


const UpcomingWeather = ({weatherData}) => {

    const {t, i18n} = useTranslation();
 
    const {container, image} = styles

    return (
        <SafeAreaView style={container}>
              <ImageBackground source={require('../../assets/upcoming-background.jpg')} style={image}>
            <Text>
                {t('upcomming')}
            </Text>
          
            
            <FlatList
              data={weatherData}
               renderItem={({item}) => <Itemdata item={item}/>}
              keyExtractor={(item) => item.dt_txt}
             />
    
                </ImageBackground>
        </SafeAreaView>
    )

}

const styles =StyleSheet.create({
  container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'red',
    },
    image: {

  },

})

export default UpcomingWeather;