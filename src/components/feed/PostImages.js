import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {W_WIDTH} from '../../utils/regex';
import {PixelRatio} from 'react-native';

class PostImages extends Component
{
    constructor(props) {
        super(props);
    }

    renderItem = ({item}) => {
        return (
            <FastImage style={styles.imagePost} source={{uri: item.imageUrl}}/>
        )
    };

    render() {
        const {item} = this.props;

        return (
            <View>
                <FlatList
                    data={item.postImages}
                    renderItem={this.renderItem}
                    keyExtractor={itemImage => itemImage.imageId.toString()}
                    extraData={item.postImages}
                />
            </View>
        );
    }
}

export default PostImages;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginRight: 1000,

    },
    imagePost: {
        position: 'relative',
        width: PixelRatio.getPixelSizeForLayoutSize(170),
        height: PixelRatio.getPixelSizeForLayoutSize(210),
        right: PixelRatio.getPixelSizeForLayoutSize(20),
        left: PixelRatio.getPixelSizeForLayoutSize(21),
        top: PixelRatio.getPixelSizeForLayoutSize(-5),
        shadowOffset: {
            width: 0,
            height: 12,
            blurRadius: 40,
        },
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(35),
        justifyContent: 'space-between',
        padding: 70,



    }
});
