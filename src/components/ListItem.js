import React from 'react';
import {View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';
import 'moment/locale/ko';


const ListItem = (props) => {

    const {itemContainer, date, temp} = styles
    const {item} = props

    return (
        <View style={itemContainer}>
        <Icon name={weatherType[item.condition]?.icon} size={50} color={"white"}></Icon>
      
        <View style={styles.dataTextWrapper}>
        <Text style={date}> {moment(item.dt_txt).format('dddd')} </Text>
        <Text style={date}> {moment(item.dt_txt).format('h:mm:ss a')} </Text>
        </View>

        <Text style={temp}> {item.main.temp_min} </Text>
        <Text style={temp}> {item.main.temp_max} </Text>


        </View>
     )
 }


const styles =StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'red',
    },
    itemContainer: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color:"white",
        fontSize: 20,
    },
    date: {
        color:"white",
        fontSize: 15,
    },
    dateTextWrapper: {
        flextDirection: 'column',
        color:"white",
        fontSize: 15,
    },
})

export default ListItem;

