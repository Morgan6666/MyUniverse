import React, {Component} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {TextField} from 'react-native-material-textfield';
import {White} from '../../../../themes/constantColors';
import Button from '../../../../components/general/Button';

class reportScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Сообщить о проблеме',
        }
    };

    constructor(props) {
        super(props);
        this.state = {};

        this.feedbackRef = this.updateRef.bind(this, 'feedback');
    }

    componentDidMount(): void {
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    render() {
        const {theme, navigation} = this.props;
        const {errors={}} = this.state;

        return (
            <View style={[
                styles.container,
                {backgroundColor: theme.container.backgroundColor},
            ]}>
                <View style={styles.innerViewContainer}>
                    <TextField
                        ref={this.feedbackRef}
                        textColor={theme.primaryColor}
                        tintColor={theme.primaryColor}
                        baseColor={theme.primaryAlphaColor}
                        errorColor={theme.buttonRed}
                        fontSize={14}
                        autoCapitalize="none"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        label="Что пошло не так?"
                        error={errors.feedback}
                    />
                    <Button
                        style={{fontSize: 15, color: White}}
                        containerStyle={[
                            styles.loginButton,
                            {backgroundColor: theme.buttonRed},
                        ]}
                        onPress={() => this.onSubmit()}>
                        Submit
                    </Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
});

export default connect(mapStateToProps)(reportScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerViewContainer: {
        flex: 1,
        padding: 12,
        paddingTop: 0,
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

