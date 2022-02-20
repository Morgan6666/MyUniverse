import {View} from 'react-native';
import {LinearGradient} from 'react-native-svg';
import {Text} from 'native-base';
import React from 'react';

const Gradient = () =>{
    return (
    <View s>
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#85F7FE', '#91E0FA', '#A4BBF3', '#BB8FEC', '#81FFFF']}


        >
            <Text >
                Зарегистрироваться

            </Text>
        </LinearGradient>
    </View>
    )
}
export default Gradient;
