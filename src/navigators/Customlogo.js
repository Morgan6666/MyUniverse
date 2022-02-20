import React from 'react';
import {View, Image, StyleSheet }  from 'react-native';

const Custom_logo = (color) => {
    return (

        <Image name = "Image_down" color = {color} source={require('../assets/images_2/Logo.png')}/>

    )
}

export default Custom_logo;
