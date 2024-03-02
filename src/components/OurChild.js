import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OurChild = (props) => {
    const {message} = props
    return (
        <View style={styles.view}>
            <Text>{message}</Text>

        </View>
    )
}


const styles =StyleSheet.create({
view: {
    flex: 1,
},
})




export default OurChild;
