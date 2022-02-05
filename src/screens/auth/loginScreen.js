import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, PixelRatio} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import {White} from '../../themes/constantColors';
import SocialView from '../../components/general/SocialView';
import Title from '../../components/general/Title';
import {regex} from '../../utils/regex';
import {rgbaColor} from 'react-native-reanimated/src/reanimated2/Colors';

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
            <Title theme={theme} title={'Войти'} />
            <Button style={[styles.button_style, {color: "#b61e1e"}]}>
            <TextField
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
              label="Email"
              error={errors.email}
            />
            </Button>
            <TextField
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
              label="Пароль"
              error={errors.password}
              // title="Choose wisely"
              // maxLength={30}
              // characterRestriction={20}
              renderRightAccessory={this.renderPasswordAccessory}
            />
            <View style={styles.forgotView}>
              <Button
                style={[styles.forgotText, {color: theme.primaryColor}]}
                containerStyle={styles.forgotButton}
                onPress={() => this.onForgotSubmit()}
              />
              <Button
                style={[styles.forgotText, {color: theme.primaryColor}]}
                containerStyle={styles.forgotButton}
                onPress={() => this.onForgotSubmit()}>
                Забыли пароль?
              </Button>
            </View>
            <Button
              style={{fontSize: 15, color: White}}

              onPress={() => this.onSubmit()}>
              Войти
            </Button>
            <SocialView type={2} theme={theme} navigation={navigation}  subTitle={'Зарегистрироваться'} />
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
    backgroundColor:"rgba(208,205,205,0.75)",
    borderRadius: 20,
    padding: 40


  },
  innerViewContainer: {
    flex: 1,
    padding: 10,
    paddingTop: -25,
    backgroundColor: '#bcbec0',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(20),
    height: 40
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
    backgroundColor: 'rgba(206,21,21,0.83)',
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(35),
    shadowColor: rgbaColor(144,166,187,0.5)
  }
});
