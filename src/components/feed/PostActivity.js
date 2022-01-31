import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
import Icon from '../Icon';
import Comment from '../../navigators/CustomingComment';
import Likes_iconic from '../../navigators/CustomingLikes';
import Mark_iconic from '../../navigators/CustomingMark';
import Animated from 'react-native-reanimated';
import colors from 'react-native/Libraries/NewAppScreen/components/Colors';
class PostActivity extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const {theme, item, navigation, onPress} = this.props;
        const Circle = () => {
            return <View style = {styles.circle}/>;
        }
        const Circle_mark = () => {
            return <View style = {styles.circle_mark}/>;
        }
        const Circle_message = () => {
            return <View style = {styles.circle_comment}/>
        }


        return (
            <View style={styles.container}>
                <View style={styles.likeView}>
                    <Circle>
                    </Circle>
                    <TouchableWithoutFeedback onPress={() => onPress('like')}>
                        <View style={styles.likes_style}>

                           <Likes_iconic></Likes_iconic>
                        </View>
                    </TouchableWithoutFeedback>



                    <View style={{marginLeft: 8}}>
                        <Circle_message>
                        </Circle_message>
                        <TouchableWithoutFeedback onPress={() => {navigation.push('Comment', {item: item})}}>
                            <View style={styles.comment_style}>
                                <Comment></Comment>
                            </View>

                        </TouchableWithoutFeedback>
                    </View>
                </View>


                <TouchableWithoutFeedback onPress={() => onPress('mark')}>
                    <View style={[styles.mark_style, {alignItems: 'flex-end'}]}>

                        <Mark_iconic></Mark_iconic>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default PostActivity;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 13,
        paddingRight:30,
        //paddingTop: 2,
        paddingBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -400
    },
    likeView: {
        alignItems: 'center',
        flexDirection: 'column',
        //justifyContent: 'space-around',
        position: 'absolute',
        left: '6.50%',
        right: '85.56%',
        top: '10.09%',
        bottom: '60.19%',

    },
    imageProfile: {
        width: 34,
        height: 34,
        borderRadius: 17,
        left: '-62.44%',
        right: '-2.65%',
        top: '-2.65%',
        bottom: '-101.68%',
        position: 'absolute'
    },
    iconView: {
        width: 37,
        height: 37,
        padding: -16,
        top: 10,
        left: -3,
        justifyContent: 'flex-end',
    },
    iconImage: {
        width: 10,
        height: 18,
        right: 29
    },
    circle: {
        width: PixelRatio.getPixelSizeForLayoutSize(15),
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        left: -40,
        right: 30,
        top: -15,
        bottom: '60.19%',
        alignItems: 'center',
    },
    circle_mark: {
        width: PixelRatio.getPixelSizeForLayoutSize(15),
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        left: -1.9,
        right: 30,
        top: 14,
        bottom: '60.19%',
        alignItems: 'center',
    },
    circle_comment: {
        width: PixelRatio.getPixelSizeForLayoutSize(15),
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        left: -41,
        right: 30,
        top: -33,
        bottom: '60.19%',
        alignItems: 'center',
    },
    mark_style: {
        width: 37,
        height: 37,
        padding: -16,
        top: -44,
        left: 280,
        justifyContent: 'flex-end',

    },
    likes_style: {
        width: 37,
        height: 37,
        padding: -16,
        top: -56,
        left: -31,
        justifyContent: 'flex-end',

    },
    comment_style: {
        width: 37,
        height: 37,
        padding: -70,
        top: -75,
        left: -35,
        justifyContent: 'flex-end',

    },
    heart_color: {
        backgroundColor: 'rgba(255,255,255,0.45)'
    }



});
