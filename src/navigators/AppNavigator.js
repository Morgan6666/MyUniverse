import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import loginScreen from '../screens/auth/loginScreen';
import forgotScreen from '../screens/auth/forgotScreen';
import registerScreen from '../screens/auth/registerScreen';
import {connect} from 'react-redux';
import profileSetup from '../screens/auth/profileSetup';
import SplashScreen from '../screens/SplashScreen';
import feedScreen from '../screens/dashboard/feed/feedScreen';
import messageListScreen from '../screens/dashboard/message/messageListScreen';
import notificationScreen from '../screens/dashboard/notification/notificationScreen';
import profileScreen from '../screens/dashboard/profile/profileScreen';
import viewsAndLikesScreen from '../screens/dashboard/feed/viewsAndLikesScreen';
import commentsScreen from '../screens/dashboard/feed/commentsScreen';
import settingScreen from '../screens/dashboard/profile/menu/settingScreen';
import editProfileScreen from '../screens/dashboard/profile/menu/editProfileScreen';
import changePasswordScreen from '../screens/dashboard/profile/menu/changePasswordScreen';
import reportScreen from '../screens/dashboard/profile/menu/reportScreen';
import webViewScreen from '../screens/dashboard/profile/menu/webViewScreen';
import followAndFollowingScreen from '../screens/dashboard/general/followAndFollowingScreen';
import postFeedScreen from '../screens/dashboard/general/postFeedScreen';
import messageScreen from '../screens/dashboard/message/messageScreen';
import FastImage from 'react-native-fast-image';
import {Red} from '../themes/constantColors';
import {regex} from '../utils/regex';
import Feather from 'react-native-vector-icons/Feather';
import addPost from '../screens/dashboard/addpost/addPost';
import createNewMessageScreen from '../screens/dashboard/message/createNewMessageScreen';
import Stories3 from '../screens/dashboard/story/Stories3';
import hashTagScreen from '../screens/dashboard/hashtag/hashTagScreen';
import {PixelRatio} from 'react-native';
import {Dimensions} from 'react-native';
import { BlurView } from '@react-native-community/blur'
import {rgbaColor} from 'react-native-reanimated/src/reanimated2/Colors';
import {Image, View} from 'native-base';
import Rectangle from '../assets/icons_svg/Rectangle.svg'
import * as Svg from 'react-native-svg'
import homeComponent from './CustomingTabElements'
import Search_iconic from './CustomingTabSearchNavigator';
import Icon from "../components/Icon"
import Home_iconic from './CustomingTabElements';
import Activity_iconic from './CustomingTabActivity';
import Profile_iconic from './CustomingProfile';
let RootStack = createStackNavigator();
let Tab = createBottomTabNavigator();

const styleBack = {width: 20, height: 20, marginLeft: 15};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const width_proportion = '50%'





const loginNavigationOption = (theme, navigationVisible) => {
    return {
        headerShown: navigationVisible,
        headerBackTitleVisible: false,
        headerBackImage: () => {
            return <FastImage style={styleBack} source={theme.icons.back}/>
        },
        headerTintColor: theme.container.headerTextColor,
        headerStyle: {
            backgroundColor: theme.container.backgroundColor,
            shadowOpacity: 0,
            shadowOffset: {height: 0, width: 0},
            shadowRadius: 0,
            elevation: 0
        },
    }
};

const mapStateToPropsStack = state => ({
    loading: state.auth.loading,
    theme: state.auth.theme,
});

let FeedStack = createStackNavigator();

class FeedStackScreenWrapper extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const {theme, loading, navigation, route} = this.props;
        navigation.setOptions({tabBarVisible: (regex.isEmpty(route.state) || route.state.index === 0)});
        let navigationVisible = !loading;

        return (
            <FeedStack.Navigator screenOptions={loginNavigationOption(theme, navigationVisible)}>
                <FeedStack.Screen name="Feeds" component={feedScreen} options={feedScreen.navigationOptions} />
                <FeedStack.Screen name="addPost" component={addPost} options={addPost.navigationOptions} />
                <FeedStack.Screen name="Comment" component={commentsScreen} options={commentsScreen.navigationOptions} />
                <FeedStack.Screen name="Like" component={viewsAndLikesScreen} options={viewsAndLikesScreen.navigationOptions} />
                <FeedStack.Screen name="Stories" component={Stories3} options={Stories3.navigationOptions} />
                <FeedStack.Screen name="OtherProfile" component={profileScreen} options={profileScreen.navigationOptions} />
                <FeedStack.Screen name="FollowAndFollowing" component={followAndFollowingScreen} options={followAndFollowingScreen.navigationOptions} />
                <FeedStack.Screen name="AddPost" component={postFeedScreen} options={postFeedScreen.navigationOptions} />
                <FeedStack.Screen name="HashTag" component={hashTagScreen} options={hashTagScreen.navigationOptions} />
            </FeedStack.Navigator>
        )
    }
}

export const FeedStackScreen = connect(mapStateToPropsStack)(FeedStackScreenWrapper);

let MessageStack = createStackNavigator();

class MessageStackScreenWrapper extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const {theme, loading, navigation, route} = this.props;
        navigation.setOptions({tabBarVisible: (regex.isEmpty(route.state) || route.state.index === 0)});
        let navigationVisible = !loading;

        return (
            <MessageStack.Navigator screenOptions={loginNavigationOption(theme, navigationVisible)}>
                <MessageStack.Screen name="MessageList" component={messageListScreen} options={messageListScreen.navigationOptions} />
                <MessageStack.Screen name="Message" component={messageScreen} options={messageScreen.navigationOptions} />
                <MessageStack.Screen name="NewMessage" component={createNewMessageScreen} options={createNewMessageScreen.navigationOptions} />
                <MessageStack.Screen name="OtherProfile" component={profileScreen} options={profileScreen.navigationOptions} />
                <MessageStack.Screen name="FollowAndFollowing" component={followAndFollowingScreen} options={followAndFollowingScreen.navigationOptions} />
                <MessageStack.Screen name="PostFeed" component={postFeedScreen} options={postFeedScreen.navigationOptions} />
                <MessageStack.Screen name="Comment" component={commentsScreen} options={commentsScreen.navigationOptions} />
                <MessageStack.Screen name="Like" component={viewsAndLikesScreen} options={viewsAndLikesScreen.navigationOptions} />
                <MessageStack.Screen name="HashTag" component={hashTagScreen} options={hashTagScreen.navigationOptions} />
            </MessageStack.Navigator>
        )
    }
}

export const MessageStackScreen = connect(mapStateToPropsStack)(MessageStackScreenWrapper);

let NotificationStack = createStackNavigator();

class NotificationStackScreenWrapper extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const {theme, loading, navigation, route} = this.props;
        navigation.setOptions({tabBarVisible: (regex.isEmpty(route.state) || route.state.index === 0)});
        let navigationVisible = !loading;


        return (
            <NotificationStack.Navigator screenOptions={loginNavigationOption(theme, navigationVisible)}>
                <NotificationStack.Screen name="Notification" component={notificationScreen} options={notificationScreen.navigationOptions} />
                <NotificationStack.Screen name="OtherProfile" component={profileScreen} options={profileScreen.navigationOptions} />
                <NotificationStack.Screen name="FollowAndFollowing" component={followAndFollowingScreen} options={followAndFollowingScreen.navigationOptions} />
                <NotificationStack.Screen name="PostFeed" component={postFeedScreen} options={postFeedScreen.navigationOptions} />
                <NotificationStack.Screen name="Comment" component={commentsScreen} options={commentsScreen.navigationOptions} />
                <NotificationStack.Screen name="Like" component={viewsAndLikesScreen} options={viewsAndLikesScreen.navigationOptions} />
                <NotificationStack.Screen name="HashTag" component={hashTagScreen} options={hashTagScreen.navigationOptions} />
            </NotificationStack.Navigator>
        )
    }
}

export const NotificationStackScreen = connect(mapStateToPropsStack)(NotificationStackScreenWrapper);

let ProfileStack = createStackNavigator();

class ProfileStackScreenWrapper extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const {theme, loading, navigation, route} = this.props;
        navigation.setOptions({tabBarVisible: (regex.isEmpty(route.state) || route.state.index === 0)});
        let navigationVisible = !loading;

        return (
            <ProfileStack.Navigator screenOptions={loginNavigationOption(theme, navigationVisible)}>
                <ProfileStack.Screen name="Profile" component={profileScreen} options={profileScreen.navigationOptions} />
                <ProfileStack.Screen name="FollowAndFollowing" component={followAndFollowingScreen} options={followAndFollowingScreen.navigationOptions} />
                <ProfileStack.Screen name="PostFeed" component={postFeedScreen} options={postFeedScreen.navigationOptions} />
                <ProfileStack.Screen name="Setting" component={settingScreen} options={settingScreen.navigationOptions} />
                <ProfileStack.Screen name="EditProfile" component={editProfileScreen} options={editProfileScreen.navigationOptions} />
                <ProfileStack.Screen name="ChangePassword" component={changePasswordScreen} options={changePasswordScreen.navigationOptions} />
                <ProfileStack.Screen name="Report" component={reportScreen} options={reportScreen.navigationOptions} />
                <ProfileStack.Screen name="WebLink" component={webViewScreen} options={webViewScreen.navigationOptions} />
                <ProfileStack.Screen name="OtherProfile" component={profileScreen} options={profileScreen.navigationOptions} />
                <ProfileStack.Screen name="Comment" component={commentsScreen} options={commentsScreen.navigationOptions} />
                <ProfileStack.Screen name="Like" component={viewsAndLikesScreen} options={viewsAndLikesScreen.navigationOptions} />
                <ProfileStack.Screen name="HashTag" component={hashTagScreen} options={hashTagScreen.navigationOptions} />
            </ProfileStack.Navigator>
        )
    }
}

export const ProfileStackScreen = connect(mapStateToPropsStack)(ProfileStackScreenWrapper);

let appNav = null;


class AppNavigator extends React.PureComponent {

  constructor(props) {
      super(props);
  };



  componentDidMount(): void {
      appNav = this;
  }

  tabBarIcon = ({color, size, source}) => {
      return (
      <Image name="home-outline" color={color} size={size} source={source}/>
      )};


  render() {
    const {theme, user, loading} = this.props;
    let navigationVisible = !loading;
      const Circle = () => {
          return <View colors = {styles.circle_navigate}/>
      }




    if (loading) {
        return (
            <SplashScreen/>
        )
    }

    return (


      <NavigationContainer>

          {
              user === null
                  ? <RootStack.Navigator screenOptions={loginNavigationOption(theme, navigationVisible)}>
                        <RootStack.Screen name="Login" component={loginScreen} options={{title: ''}} />
                        <RootStack.Screen name="Forgot" component={forgotScreen} options={{title: ''}} />
                        <RootStack.Screen name="Register" component={registerScreen} options={{title: ''}}/>
                        <RootStack.Screen name="ProfileSetup" component={profileSetup} options={{title: ''}}/>
                    </RootStack.Navigator>

                  : <Tab.Navigator initialRouteName="Home"
                                   screenOptions={{
                                       headerShown: false
                                   }}
                                   barStyle = {{marginLeft: -100, marginRight: 0,
                                       shadowColor: 'rgba(11,12,12,0.5)'

                                   }}
                                   tabBarOptions={{
                                       borderColor: '#ad1313',
                                       style: {
                                           headerShown: false,
                                           position: 'absolute',
                                           // backgroundColor: (255,255,255,0.3),
                                           showLabel: false,
                                           width: PixelRatio.getPixelSizeForLayoutSize(210),
                                           height: PixelRatio.getPixelSizeForLayoutSize(20),
                                           top: Dimensions.get('window').height - PixelRatio.getPixelSizeForLayoutSize(90 / 2),
                                           borderRadius: PixelRatio.getPixelSizeForLayoutSize(80),
                                           left: Dimensions.get('window').width - PixelRatio.getPixelSizeForLayoutSize(208),
                                           blurredView: {
                                               backgroundColor: rgbaColor(255, 255, 255, 0.3),

                                           },
                                           box: {
                                               shadowColor: 'black',
                                               backgroundColor: '#c92323',

                                           },

                                           shadowOffset: {
                                               width: 0,
                                               height: 12,
                                               blurRadius: 40,
                                               shadowColor: 'rgba(11,12,12,0.5)',
                                               borders: 'rgba(213,17,17,0.2)',
                                               backgroundColor: '#c92323',
                                           },


                                           shadowRadius: 16.00,
                                           container: {
                                               flex: 1,
                                               backgroundColor: 'rgba(157,40,40,0.06)',
                                           },


                                           elevation: 24,
                                           //backgroundColor: '#FFFFFF4D',

                                           backgroundColor: 'rgba(246,242,242,0.8)',
                                           // borderRadius: 10,
                                           shadowColor: 'rgba(55,124,185,0.5)',
                                           shadowOpacity: PixelRatio.getPixelSizeForLayoutSize(7.91129),
                                           borders: 'rgba(213,17,17,0.2)',
                                           header: {
                                               visible: false

                                           },
                                           borderColor: '#ad1313',

                                       }
                                   }

                                   }

                  >


                      <Tab.Screen
                          name="_"
                          color = {styles.iconImage}
                          component={FeedStackScreen}
                          options={{
                          tabBarIcon: ({ color, size, source }) => (
                              <View style = {styles.Home_style}>
                              <Home_iconic/>
                              </View>
                          ),
                      }}/>

                        <Tab.Screen name="__" component={MessageStackScreen} options={{
                            tabBarIcon: ({ color, size }) => (
                                <View style = {styles.Search_style}>
                                <Search_iconic/>
                                </View>
                            ),
                        }}/>
                        <Tab.Screen name="___" component={NotificationStackScreen}  options={{
                            tabBarIcon: ({ color, size }) => (
                                <View style = {styles.Activity_styles}>
                                <Activity_iconic/>
                                </View>
                            ),
                        }}/>
                        <Tab.Screen name = '____' component={ProfileStackScreen} options={{
                            tabBarIcon: ({ color, size }) => (
                                <View style = {styles.Profile_styles}>
                                <Profile_iconic></Profile_iconic>
                                </View>
                            ),
                        }}/>



                    </Tab.Navigator>

          }

      </NavigationContainer>

    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    iconImage: {
        width: 4,
        height: 18,
        top:100,
       //position: 'absolute',
        //bottom: '1.27%',
        backgroundColor: 'rgba(255,255,255,0.13)'

    },
    inside_color: {
      backgroundColor: 'rgba(49,152,38,0.07)'
    },

    circle_navigate: {
        backgroundColor: 'rgba(32,218,26,0.13)'
  },
    Home_style: {
      top:7,
    },
    Search_style: {
      top: 7,

    },
    Activity_styles: {
      top: 7,
    },
    Profile_styles: {
      top: 7,
    }




},);
