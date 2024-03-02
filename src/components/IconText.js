import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconText = (props) => {
    
    const {textTheme, container} = styles

    const {iconName, iconColor, bodyText, bodyTextStyles} = props

    return (
        <View style={container}>
                <Icon name={iconName} size={50} color={iconColor}></Icon>
                <Text style={[textTheme,bodyTextStyles]}>{bodyText}</Text>

        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textTheme: {
          fontWeight: 'bold',
      },
      image: {
  
    },
  
  })



export default IconText;