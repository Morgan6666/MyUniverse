import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  PixelRatio,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import {White} from '../../themes/constantColors';
import Title from '../../components/general/Title';
import Exit_iconic from '../../navigators/CustomExit';
import Custom_logo from '../../navigators/Customlogo';
import Image_down from '../../navigators/Imagedown';
import LinearGradient from 'react-native-linear-gradient';

class forgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.emailRef = this.updateRef.bind(this, 'email');
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onSubmit() {
    let errors = {};

    ['email'].forEach(name => {
      let value = this[name].value();

      if (!value) {
        errors[name] = 'Не должно быть пустым';
      } else {
      }
    });

    this.setState({errors});
  }


  render() {
    let {errors = {}} = this.state;
    const {theme} = this.props;

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
            <View style = {styles.custom_logo}>
              <Custom_logo style = {styles.custom_logo}>
              </Custom_logo>
            </View>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 15,
                fontSize: 13,
                fontWeight: '600',
                color: theme.secondaryColor,
              }}>

            </Text>
            <TextInput
                style = {styles.forgot_email}
                placeholderStyle = {styles.placeholder}
                ref={this.passwordRef}
                textColor={theme.primaryColor}
                tintColor={theme.primaryColor}
                baseColor={theme.primaryAlphaColor}
                errorColor={theme.buttonRed}
                fontSize={14}
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                clearTextOnFocus={true}
                onFocus={this.onFocus}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitPassword}
                returnKeyType="done"


                placeholder={'Электронная почта'}
                // title="Choose wisely"
                // maxLength={30}
                // characterRestriction={20}
                renderRightAccessory={this.renderPasswordAccessory}

            />
            <TextInput
                style = {styles.forgot_password}
                placeholderStyle = {styles.placeholder}
                ref={this.passwordRef}
                textColor={theme.primaryColor}
                tintColor={theme.primaryColor}
                baseColor={theme.primaryAlphaColor}
                errorColor={theme.buttonRed}
                fontSize={14}
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
                style = {styles.submit_button}>

              <Button
                  onPress={() => this.onSubmit()}>
                Отправить
              </Button>
            </TouchableOpacity>
            <View styles = {styles.linear_gradient}>
            <View styles = {styles.linear_gradient}>
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
          </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

let mapStateToProps;
mapStateToProps = state => ({
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(forgotPassword);

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
    padding: 12,
    paddingTop: 8,
  },
  loginButton: {
    marginTop: 20,
    height: 46,
    overflow: 'hidden',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot_email: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(135),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    left: PixelRatio.getPixelSizeForLayoutSize(-6)


  },
  submit_button:{
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    top: 420,
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
    left: PixelRatio.getPixelSizeForLayoutSize(-6.5)

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
  forgot_password: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(170),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    left: PixelRatio.getPixelSizeForLayoutSize(-6)
  },
  custom_logo: {
    top: 90,
    left: PixelRatio.getPixelSizeForLayoutSize(80)
  },
  image_down: {
    left: PixelRatio.getPixelSizeForLayoutSize(75),
    top: PixelRatio.getPixelSizeForLayoutSize(320)
  },
  linear_gradient:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
    width: PixelRatio.getPixelSizeForLayoutSize(190),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    position: 'absolute',
    top: PixelRatio.getPixelSizeForLayoutSize(137),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    borderBottomStartRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderBottomEndRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    padding: PixelRatio.getPixelSizeForLayoutSize(2),
    left: PixelRatio.getPixelSizeForLayoutSize(-13)
  }
});
