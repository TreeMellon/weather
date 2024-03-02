import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ErrorItem = () => {



    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}> Sorry something went wrong</Text>
            <Icon name={"error"} size={100} color={'white'} />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
    },

})

export default ErrorItem
