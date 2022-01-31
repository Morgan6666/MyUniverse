import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, PixelRatio} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Button from '../../components/general/Button';
import {connect} from 'react-redux';
import {White} from '../../themes/constantColors';
import Title from '../../components/general/Title';

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
            <Title theme={theme} title={'Забыли пароль?'} />
            <Text
              style={{
                marginTop: 20,
                marginBottom: 15,
                fontSize: 13,
                fontWeight: '600',
                color: theme.secondaryColor,
              }}>
              Пожалуйста введите адресс электронной почты и следуйте инструкции
                  восстановления вашего пароля
            </Text>
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
              returnKeyType="next"
              label="Email"
              error={errors.email}
            />
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
              Отправить
            </Button>
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
});
