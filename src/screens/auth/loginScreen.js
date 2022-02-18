import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  PixelRatio,
  TextInput,
  Pressable,
  TouchableOpacity, ImageBackground,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import {White} from '../../themes/constantColors';
import SocialView from '../../components/general/SocialView';
import Title from '../../components/general/Title';
import {regex} from '../../utils/regex';
import {rgbaColor} from 'react-native-reanimated/src/reanimated2/Colors';
import Circle_iconic from '../../navigators/CustomingCircle';
import Exit_iconic from '../../navigators/CustomExit';
import  Custom_circle from '../../navigators/CustomingCircle';

import {LinearGradient} from 'react-native-svg';
import {Text} from 'native-base';
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

  updateRef(name, ref) {
    this[name] = ref;
  }

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

    return (
      <Feather
        size={20}
        name={name}
        color={theme.primaryColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting={true}
      />
    );
  }

  render() {
    let {errors = {}, secureTextEntry} = this.state;
    const {theme, navigation} = this.props;
    const Circle_message = () => {
      return <View style = {styles.circle}/>
    }

    return (
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: theme.container.backgroundColor},
        ]}>
        <ScrollView
          contentContainerStyle={styles.innerViewContainer}
          scrollEnabled={false}>

          <View style={styles.innerViewContainer}>
            <ImageBackground source={require('../../assets/images_2/circle_3.png')} style = {styles.kr_button}>
              <View style = {styles.exit}>
                <Exit_iconic></Exit_iconic>
              </View>
            </ImageBackground>





            <Title theme={theme}  />
            <Button style={[styles.button_style, {color: "#b61e1e"}]}>
            <TextInput
                style = {styles.text_input_1}
              ref={this.emailRef}
              textColor={theme.primaryColor}
              tintColor={theme.primaryColor}

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
              label="Email"
              placeholder={'Электронная почта'}
              error={errors.email}
            />
            </Button>
            <TextInput
                style = {styles.text_input_2}
                placeholderStyle = {styles.placeholder}
              ref={this.passwordRef}
              textColor={theme.primaryColor}
              tintColor={theme.primaryColor}
              baseColor={theme.primaryAlphaColor}
              errorColor={theme.buttonRed}
              fontSize={14}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPassword}
              returnKeyType="done"


              placeholder={'Пароль'}
              // title="Choose wisely"
              // maxLength={30}
              // characterRestriction={20}
              renderRightAccessory={this.renderPasswordAccessory}

            />
            <TouchableOpacity
                style = {styles.register_button}
                onPress={() => this.onForgotSubmit()}
            >
              <Button

                onPress={() => this.onRegisterSubmit()}

              >
                Зарегистрироваться
              </Button>
          </TouchableOpacity>
            <TouchableOpacity style = {styles.forgot_button}>

              <Button
                onPress={() => this.onForgotSubmit()}>
                Забыли пароль?</Button>

            </TouchableOpacity>
          <TouchableOpacity
            style = {styles.enter}>

            <Button
              onPress={() => this.onSubmit()}>
              Войти
            </Button>
          </TouchableOpacity>




          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(loginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#982c2c",
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(80),

    width: PixelRatio.getPixelSizeForLayoutSize(201),
    height: PixelRatio.getPixelSizeForLayoutSize(400),
    left: PixelRatio.roundToNearestPixel(-20),
    borderTopEndRadius: PixelRatio.getPixelSizeForLayoutSize(45),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(45),
    borderBottomLeftRadius: PixelRatio.getPixelSizeForLayoutSize(65),
    borderBottomRightRadius: PixelRatio.getPixelSizeForLayoutSize(100),
    top: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopStartRadius: PixelRatio.getPixelSizeForLayoutSize(45),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(45),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(40),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(22),
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(-17),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(500),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(13)







  },

  innerViewContainer: {

    flex: 1,
    position: 'absolute',
    borderColor:'#1a5c9d'



},
  forgotView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '800',
  },
  forgotButton: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    width: 150,
    overflow: 'hidden',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  loginButton: {
    marginTop: 20,
    height: 46,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(79,66,66,0.83)',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(35),
    shadowColor: rgbaColor(144,166,187,0.5)
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
  button_style: {
    backgroundColor: '#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(35),
    shadowColor: rgbaColor(144,166,187,0.5)
  },
  text_input_1: {
    justifyContent: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(67),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(5),

  },
  text_input_2: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(129),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),


  },
  enter: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 340,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:11,
    shadowColor: 'rgba(255,255,255,0.94)',
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),



  },
  placeholder: {
    textAlign: 'center',
    shadowOffset: {
      width:PixelRatio.getPixelSizeForLayoutSize(7.911129),
      height:PixelRatio.getPixelSizeForLayoutSize(15.8226),
      transform: 'matrix(1, 0, 0, -1, 0, 0)'
    }

  },
  gradient: {
    flex: 1,
    justifyContent:'center'
  },
  forgot_button: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 505,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(150),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:0,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(89),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(-66),
    height: PixelRatio.getPixelSizeForLayoutSize(29.1)


  },
  register_button: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 420,
    position: 'absolute',
    width: PixelRatio.getPixelSizeForLayoutSize(170),
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingBottom:21,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    left: PixelRatio.getPixelSizeForLayoutSize(30),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(-17),
    height: PixelRatio.getPixelSizeForLayoutSize(29.1)

  },
  exit: {
    top:PixelRatio.getPixelSizeForLayoutSize(5),
    left: PixelRatio.getPixelSizeForLayoutSize(6.5)

  },

  circle: {
    width: PixelRatio.getPixelSizeForLayoutSize(12),
    height: PixelRatio.getPixelSizeForLayoutSize(10),
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    left: 16,
    right: -29,
    top: -4,
    bottom: '60.19%',
    alignItems: 'center',

  },
  kr_button: {
    width: 60,
    height: 50,
    left: 10

  }



});
