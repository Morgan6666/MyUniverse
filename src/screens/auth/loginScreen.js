import React, {Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  PixelRatio,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import ForgotScreen from './forgotScreen';
import RegisterScreen from './registerScreen';
import {White} from '../../themes/constantColors';
import SocialView from '../../components/general/SocialView';
import Title from '../../components/general/Title';
import {regex} from '../../utils/regex';
import DatePicker from './DatePicker';
import {TextInput} from 'react-native';
import Exit_iconic from '../../navigators/CustomExit';
import Image_down from '../../navigators/Imagedown';
import Custom_logo from '../../navigators/Customlogo';
import LinearGradient from 'react-native-linear-gradient';


let formField = ['email', 'password', 'login', 'number', 'date'];

class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,

    };



    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');

    this.onFocus = this.onFocus.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
  }

  updateRef = (name, ref) => {
    this[name] = ref;
  };

  onFocus() {
    let {errors = {}} = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({errors});
  }

  onChangeText(text) {
    ['email', 'password']
        .map(name => ({name, ref: this[name]}))
        .forEach(({name, ref}) => {
          if (ref.isFocused()) {
            this.setState({[name]: text});
          }
        });
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
    this.onSubmit();
  }

  onAccessoryPress() {
    this.setState(({secureTextEntry}) => ({secureTextEntry: !secureTextEntry}));
  }
  onForgotSubmit() {
    this.props.navigation.navigate('Forgot')
  }
  onRegisterSubmit(){
    this.props.navigation.navigate('Register')
  }



  onSubmit() {
    // let errors = {};
    //
    // ['email', 'password'].forEach(name => {
    //   let value = this[name].value();
    //
    //   if (!value) {
    //     errors[name] = 'Should not be empty';
    //   } else {
    //     if (name === 'password' && value.length < 6) {
    //       errors[name] = 'Too short';
    //     }
    //   }
    // });
    //
    // this.setState({errors});
    regex.setDashboard({
      token: '122323432'
    })
  }
  renderPasswordAccessory() {
    const {theme} = this.props;
    let {secureTextEntry} = this.state;

    let name = secureTextEntry ? 'eye-off' : 'eye';


  }

  render() {
    let {errors = {}, secureTextEntry} = this.state;
    const {theme, navigation} = this.props;


    return (
        <SafeAreaView
            style={[
              styles.container,
              {backgroundColor: theme.container.backgroundColor},
            ]}>
          <View style = {styles.custom_logo}>
            <Custom_logo style = {styles.custom_logo}>
            </Custom_logo>
          </View>
          <ScrollView
              contentContainerStyle={styles.innerViewContainer}
              scrollEnabled={true}>



            <View style={styles.innerViewContainer}>

              <ImageBackground source={require('../../assets/images_2/circle_3.png')} style = {styles.kr_button}>
                <View style = {styles.exit}>
                  <Exit_iconic></Exit_iconic>
                </View>
              </ImageBackground>

              <TextInput
                  style = {styles.text_input_1}
                  ref={this.emailRef}
                  textColor={theme.primaryColor}
                  tintColor={theme.primaryColor}
                  baseColor={theme.primaryAlphaColor}
                  errorColor={theme.buttonRed}
                  fontSize={14}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                  onChangeText={this.onChangeText}
                  onSubmitEditing={this.onSubmitEmail}
                  returnKeyType="next"
                  label="Имя пользователя"
                  error={errors.email}
                  placeholder={'Электронная почта'}
              />
              <TextInput
                  style = {styles.text_input_2}
                  ref={this.emailRef}
                  textColor={theme.primaryColor}
                  tintColor={theme.primaryColor}
                  baseColor={theme.primaryAlphaColor}
                  errorColor={theme.buttonRed}
                  fontSize={14}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                  onChangeText={this.onChangeText}
                  onSubmitEditing={this.onSubmitEmail}
                  returnKeyType="next"
                  label="Логин"
                  error={errors.email}
                  placeholder={'Пароль'}
              />


              <View style={styles.signUpView}>

              </View>
              <TouchableOpacity style = {styles.login_button}

                    onPress={() => this.onSubmit()}>

              </TouchableOpacity>

              <TouchableOpacity style = {styles. register_button}

                    onPress={() => this.onRegisterSubmit()}>


              </TouchableOpacity>
              <TouchableOpacity style = {styles.forgot_button}

                    onPress={() => this.onForgotSubmit()}>


              </TouchableOpacity>


            </View>

            <View>
              <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#85F7FE', '#91E0FA', '#A4BBF3', '#BB8FEC', '#81FFFF']}
                  style = {styles.linear_gradient}

              >
                <Text style={styles.buttonText}>
                  Войти

                </Text>
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#85F7FE', '#91E0FA', '#A4BBF3', '#BB8FEC', '#81FFFF']}
                  style = {styles.linear_gradient_reg}

              >
                <Text style={styles.buttonText}>
                  Зарегистрироваться

                </Text>
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#85F7FE', '#91E0FA', '#A4BBF3', '#BB8FEC', '#81FFFF']}
                  style = {styles.linear_gradient_forgot}

              >
                <Text style={styles.buttonText}>
                  Забыли пароль?

                </Text>
              </LinearGradient>
            </View>

          </ScrollView>
        </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(loginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#0c4b8a",
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(80),

    width: PixelRatio.getPixelSizeForLayoutSize(195),
    height: PixelRatio.getPixelSizeForLayoutSize(500),
    top: PixelRatio.getPixelSizeForLayoutSize(3),
    left: PixelRatio.roundToNearestPixel(10),
    borderTopEndRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    borderBottomLeftRadius: PixelRatio.getPixelSizeForLayoutSize(45),
    borderBottomRightRadius: PixelRatio.getPixelSizeForLayoutSize(45),

  },
  innerViewContainer: {
    // flex: 1,
    padding: 12,
    paddingTop: 8,
  },
  signUpView: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
  },
  loginButton: {
    marginTop: 20,
    height: 46,
    overflow: 'hidden',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialView: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    fontSize: 12,
    fontWeight: '600',
  },
  text_input_1: {
    justifyContent: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(29),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(100),
    left: PixelRatio.getPixelSizeForLayoutSize(-9),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  text_input_2: {
    justifyContent: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(29),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(137),
    left: PixelRatio.getPixelSizeForLayoutSize(-9),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
  },

   login_button: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 350,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-9),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),


  },
  register_button: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 421,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-9),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),


  },
  forgot_button: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 490,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-9),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),


  },
  exit: {
    top:PixelRatio.getPixelSizeForLayoutSize(4),
    left: PixelRatio.getPixelSizeForLayoutSize(6.5)

  },
  kr_button: {
    width: 60,
    height: 50,
    left: -6,
    top: -21

  },
  custom_logo: {
    top: 100,
    left: PixelRatio.getPixelSizeForLayoutSize(80)
  },
  image_down: {
    left: PixelRatio.getPixelSizeForLayoutSize(81),
    top: PixelRatio.getPixelSizeForLayoutSize(360)
  },
  linear_gradient:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 261,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(192),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-10),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(24)
  },
  linear_gradient_reg:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 332,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(192),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-10),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(24)
  },
  linear_gradient_forgot:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 400,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(191),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(-10),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(24)
  }
});
