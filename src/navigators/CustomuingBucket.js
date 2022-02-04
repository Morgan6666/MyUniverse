import React from 'react';
import {View, Image, StyleSheet }  from 'react-native';

const Custom_bucket = (color) => {
    return (

        <Image name = "Activity" color = {color} source={require('../assets/images_2/Bucket.png')}/>

    )
}

export default Custom_bucket;
