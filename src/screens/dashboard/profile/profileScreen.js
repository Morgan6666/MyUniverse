import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Button from '../../../components/general/Button';
import { Tab, Tabs, TabHeading } from 'native-base';
import PostTab from './PostTab';
import LikeTab from './LikeTab';
import data from './../feed/data';
import {getStore} from '../../../../App';
import {regex} from '../../../utils/regex';
import ParsedText from 'react-native-parsed-text';
import {LINK} from '../../../themes/constantColors';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
import {rgbaColor} from 'react-native-reanimated/src/reanimated2/Colors';
import Settings_iconic from '../../../navigators/CustomingSettings';
import Custom_circle from '../../../navigators/CustomingCircleComponent';
import {Circle} from 'react-native-svg';
class profileScreen extends Component {

    static navigationOptions = ({navigation, route}) => {
        let header = {
            title: regex.isEmpty(route.params) ? 'Профиль' : route.params.user.username,
        };

        if (regex.isEmpty(route.params)) {
            header.headerRight = () => {
                return <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate('Настройки')
                }}>
                    <View style={styles.iconView}>
                        <Custom_circle color ={styles.Circle_settings}></Custom_circle>
                   <Settings_iconic></Settings_iconic>

                    </View>
                </TouchableWithoutFeedback>
            }
        }

        return header;
    };

    constructor(props) {
        super(props);
        this.state = {
            postData: [...data, ...data, ...data],
            likeData: [...data, ...data],
            selectedIndex: 0,
            isOtherProfile: !(regex.isEmpty(props.route.params))
        }
    }

    componentDidMount(): void {
    }

    onChangeTab = (index) => {
        this.setState({selectedIndex:index.i})
    };

    tabFollow = (type) => {
       const {route} = this.props;
       const {isOtherProfile} = this.state;
       let userData = {
           username: 'denisbairamkulow'
       };
       if (isOtherProfile)
           userData = route.params.user;

       this.props.navigation.push('FollowAndFollowing', {type: type, user: userData});
    };

    usernamePress = (name) => {
        const {navigation} = this.props;
        let getUsername = name.replace('@', '');
        navigation.push('OtherProfile', {user: {username: getUsername, userId: 23, profilePic: 'https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/10593515_274006656127260_1937926446_a.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_ohc=K1x_KvjQoYIAX8Oj0h7&oh=4c6f8b782dc97fef7b30c9dd5817e4d0&oe=5EB6A2AF'}});
    };

    hashTagPress = (name) => {
        const {navigation} = this.props;
        navigation.push('HashTag', {hashTag: name});
    };

    renderUserInfo = () => {
        const {theme, navigation, route} = this.props;
        const {isOtherProfile} = this.state;

        let name = 'Денис Байрамкулов';
        let username = 'denisbairamkulow';
        let profilePic = 'https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/10593515_274006656127260_1937926446_a.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_ohc=K1x_KvjQoYIAX8Oj0h7&oh=4c6f8b782dc97fef7b30c9dd5817e4d0&oe=5EB6A2AF';
        if (isOtherProfile) {
            let userData = route.params.user;
            name = userData.username;
            username = userData.username;
            profilePic = userData.profilePic;
        }

        return (
            <View>
                <View style={styles.userView}>
                    <View>
                        <FastImage style={styles.profileImage} source={{uri: profilePic}}/>
                    </View>


                    <View style={styles.nameView}>
                        <Text style={[styles.nameText, {color: theme.primaryColor}]}>{name}</Text>
                        <Text style={[styles.usernameText, {color: theme.secondaryColor}]}>{`@${username}`}</Text>
                        <View style={styles.followView}>
                            <View>
                                <Text style={[styles.postCountText, {color: theme.primaryColor}]}>10</Text>
                                <Text style={[styles.postText, {color: theme.secondaryColor}]}>Posts</Text>
                            </View>

                            <TouchableWithoutFeedback onPress={()=>this.tabFollow('followers')}>
                                <View>
                                    <Text style={[styles.postCountText, {color: theme.primaryColor}]}>279K</Text>
                                    <Text style={[styles.postText, {color: theme.secondaryColor}]}>Followers</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>this.tabFollow('following')}>
                                <View>
                                    <Text style={[styles.postCountText, {color: theme.primaryColor}]}>754K</Text>
                                    <Text style={[styles.postText, {color: theme.secondaryColor}]}>Following</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View style={styles.bioView}>
                    <ParsedText style={[styles.bioText, {color: theme.primaryColor}]}
                                parse={
                                    [
                                        {pattern: /@(\w+)/, style: [styles.linkColor, {color: theme.linkColor}], onPress: this.usernamePress},
                                        {pattern: /#(\w+)/, style: [styles.linkColor, {color: theme.linkColor}], onPress: this.hashTagPress},
                                    ]
                                }
                                childrenProps={{allowFontScaling: false}}
                    >

                    </ParsedText>
                   <Text style={[styles.linkText, {color: theme.buttonRed}]}>https://skims.com/</Text>
                </View>
                {
                    !isOtherProfile
                        ? <Button style={{fontSize: 14, color: theme.secondaryColor}}
                                  containerStyle={[styles.button, {borderColor: '#85F7FE'}]}
                                  onPress={() => {
                                      navigation.navigate('Edit Profile')
                                  }}>
                            Редактировать профиль
                        </Button>
                        : <View style={{flex: 1, flexDirection: 'row'}}>
                            <Button style={{fontSize: 14, color: '#85F7FE'}}
                                    containerStyle={[styles.button, {borderColor: '#85F7FE'}]}
                                    onPress={() => {}}>
                                Подписки
                            </Button>
                            <Button style={{fontSize: 14, color: theme.secondaryColor}}
                                    containerStyle={[styles.button, {borderColor:'#85F7FE'}]}
                                    onPress={() => {}}>
                                Сообщения
                            </Button>
                        </View>
                }
            </View>
        )
    };

    render() {
        const {theme, navigation} = this.props;
        const {postData, likeData, selectedIndex} = this.state;

        return (
            <View style={[
                styles.container,
                {backgroundColor: theme.container.backgroundColor},
            ]}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                    {this.renderUserInfo()}
                    <Tabs tabBarUnderlineStyle={{backgroundColor: theme.buttonRed, height: 2}} onChangeTab={this.onChangeTab}>
                        <Tab heading={<TabHeading style={{backgroundColor: theme.container.backgroundColor}}>
                            <FastImage
                                resizeMode={FastImage.resizeMode.contain}
                                style={styles.iconImage}
                                source={selectedIndex === 0 ? theme.icons.selectedPost : theme.icons.post}
                            />
                            </TabHeading>}>
                                <PostTab theme={theme} data={postData} navigation={navigation} />
                        </Tab>
                        <Tab heading={<TabHeading style={{backgroundColor: theme.container.backgroundColor}}>
                            <FastImage
                                resizeMode={FastImage.resizeMode.contain}
                                style={styles.iconImage}
                                source={selectedIndex === 1 ? theme.icons.selectedActivity : theme.icons.activity}
                            />
                            </TabHeading>}>
                            <LikeTab theme={theme} data={likeData} navigation={navigation} />
                        </Tab>
                    </Tabs>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
});

export default connect(mapStateToProps)(profileScreen);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    userView: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    profileImage: {
        width: 84,
        height: 84,
        borderRadius:42
    },
    nameView: {
        flex: 1,
        marginLeft: 15
    },
    nameText: {
        fontSize: 16,
        fontWeight: '800',
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '600',
    },
    followView: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postCountText: {
        fontSize: 14,
        fontWeight: '800',
    },
    postText: {
        marginTop: 2,
        fontSize: 12,
        fontWeight: '600',
    },
    bioView: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    bioText: {
        fontSize: 13,
        fontWeight: '400',
    },
    linkColor: {color: LINK, fontWeight: '600'},
    linkText: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: '600',
    },
    button: {

        flex: 1,
        margin: 15,
        height: 45,
        overflow: 'hidden',
        borderWidth: 1,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(35),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: rgbaColor(255,255,255,0.3)

    },
    iconView: {
        width: 35,
        height: 35,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconImage: {
        width: 25,
        height: 25,
    },
    Circle_settings: {
        backgroundColor: '#ad2b2b'
    }
});

