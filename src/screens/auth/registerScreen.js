import React, {Component, useState } from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, PixelRatio} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import {White} from '../../themes/constantColors';
import SocialView from '../../components/general/SocialView';
import Title from '../../components/general/Title';
import {regex} from '../../utils/regex';
import DatePicker from './DatePicker';

let formField = ['email', 'password', 'login', 'number', 'date'];

class registerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      secureTextEntry1: true,
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
    formField
      .map((name) => {
        return {name, ref: this[name]};
      })
      .forEach(({name, ref}) => {
        if (ref.isFocused()) {
          this.setState({[name]: text});
        }
      });
  };

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

  onSubmit() {
    let errors = {};

    formField.forEach((name) => {
      let value = this[name].value();

      if (!value) {
        errors[name] = 'Не должен быть пустым';
      } else {
        if (name === 'email' && !regex.validateEmail(value)) {
          errors[name] = 'Неправильный email';
        } else if (name === 'password' && value.length < 6) {
          errors[name] = 'Ваш пароль короткий';
        } else if (name === 'confirm' && value.length < 6) {
          errors[name] = 'Пароль слишком короткий. Пожалуйста подтвердите его';
        } else if (name === 'confirm') {
          let passwordValue = this.password.value();
          if (passwordValue !== value) {
            errors[name] = "Пароль не подходит";
          }
        }
      }
    });

    this.setState({errors});

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      this.props.navigation.navigate('ProfileSetup');
    }
  };

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
          scrollEnabled={true}>
          <View style={styles.innerViewContainer}>
            <Title theme={theme} title={'Зарегистироваться'} />
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
                label="Имя пользователя"
                error={errors.email}
            />
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
                label="Логин"
                error={errors.email}
            />
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
                label="Номер телефона:
                        +7 (XXX) XXXXXXX"
                error={errors.email}
            />
          <DatePicker

          />




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
                returnKeyType="next"
                label="Пароль"
                error={errors.password}
                renderRightAccessory={this.renderPasswordAccessory}
            />

            <View style={styles.signUpView}>
              <Text style={[styles.signUpText, {color: theme.secondaryColor}]}>
                Регистрируясь вы принимает правила нашего приложения
              </Text>
            </View>
            <Button
              style={{fontSize: 15, color: White}}
              containerStyle={[
                styles.loginButton,
                {backgroundColor: 'rgba(190,215,215,0.1)',
                  shadowColor: 'rgba(55,124,185,0.5)',
                  shadowOpacity: PixelRatio.getPixelSizeForLayoutSize(7.91129),
                  borders: 'rgba(213,17,17,0.2)'},
              ]}
              onPress={() => this.onSubmit()}>
              Зарегистрироваться
            </Button>
            <SocialView
              type={1}
              theme={theme}
              navigation={navigation}
              title={'Ваш аккаунт существует?'}
              subTitle={'Войти'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.auth.theme,
});

export default connect(mapStateToProps)(registerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
