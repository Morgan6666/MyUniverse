import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {TextField} from 'react-native-material-textfield';
import {OS} from '../../../../utils/regex';
import ActionSheet from 'react-native-action-sheet';
import {Black} from '../../../../themes/constantColors';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';

class editProfileScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Редактирование профиля',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            name:'Денис Байрамкулов',
            username:'denisbairamkulow',
            weblink: '',
            bio: '',
            profilePic:'https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/10593515_274006656127260_1937926446_a.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_ohc=K1x_KvjQoYIAX8Oj0h7&oh=4c6f8b782dc97fef7b30c9dd5817e4d0&oe=5EB6A2AF',
        };

        this.nameRef = this.updateRef.bind(this, 'name');
        this.usernameRef = this.updateRef.bind(this, 'username');
        this.weblinkRef = this.updateRef.bind(this, 'webLink');
        this.bioRef = this.updateRef.bind(this, 'bio');
    }

    componentDidMount(): void {
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    showActionSheet = () => {
        let options = [
            'Camera',
            'Library',
            'Remove Profile',
        ];
        let CANCEL_INDEX = 3;
        let DELETE_INDEX = 2;
        if(OS === 'ios') {
            options.push('Cancel');
        }

        ActionSheet.showActionSheetWithOptions({
                options: options,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DELETE_INDEX,
                tintColor: Black
            },
            (buttonIndex) => {
                if (buttonIndex === 0) {
                    this.openImagePicker('camera')
                } else if(buttonIndex === 1) {
                    this.openImagePicker('library')
                } else if (buttonIndex === 2) {
                    this.setState({profilePic: ''})
                }
            });
    };

    getPhotoCallback = (response) => {
        this.setState({profilePic: response.path})
    };

    openImagePicker(type) {
        const options = {
            width: 400,
            height: 400,
            cropping: true
        };
        if (type === 'camera') {
            ImagePicker.openCamera(options).then(this.getPhotoCallback);
        } else {
            ImagePicker.openPicker(options).then(this.getPhotoCallback);
        }
    }

    onSubmit() {
        let errors = {};

        ['name', 'username', 'webLink', 'bio'].forEach(name => {
            let value = this[name].value();

            if (!value) {
                errors[name] = 'Не должно быть пустым';
            } else {
            }
        });

        this.setState({errors});
    }

    render() {
        const {theme, navigation} = this.props;
        const {errors = {}, profilePic, username, name, weblink, bio} = this.state;

        return (
            <View style={[
                styles.container,
                {backgroundColor: theme.container.backgroundColor},
            ]}>
                <ScrollView
                    contentContainerStyle={styles.innerViewContainer}
                    scrollEnabled={false}>
                    <View style={styles.innerViewContainer}>
                        <View style={styles.avatarView}>
                            <TouchableWithoutFeedback onPress={() => this.showActionSheet()}>
                                <FastImage style={[styles.avatarImage, {borderColor: theme.secondaryColor}]} source={{uri: profilePic}}/>
                            </TouchableWithoutFeedback>
                            <Text style={[styles.avatarImageText, {color: theme.secondaryColor}]}>Загрузить фотографию пользователя</Text>
                        </View>
                        <TextField
                            ref={this.nameRef}
                            value={name}
                            textColor={theme.primaryColor}
                            tintColor={theme.primaryColor}
                            baseColor={theme.primaryAlphaColor}
                            errorColor={theme.buttonRed}
                            fontSize={14}
                            autoCapitalize="none"
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            label="Имя"
                            error={errors.name}
                        />
                        <TextField
                            ref={this.usernameRef}
                            value={username}
                            textColor={theme.primaryColor}
                            tintColor={theme.primaryColor}
                            baseColor={theme.primaryAlphaColor}
                            errorColor={theme.buttonRed}
                            fontSize={14}
                            autoCapitalize="none"
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            label="Логин"
                            error={errors.username}
                        />
                        <TextField
                            ref={this.weblinkRef}
                            value={weblink}
                            textColor={theme.primaryColor}
                            tintColor={theme.primaryColor}
                            baseColor={theme.primaryAlphaColor}
                            errorColor={theme.buttonRed}
                            fontSize={14}
                            autoCapitalize="none"
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            label="Weblink"
                            error={errors.webLink}
                        />
                        <TextField
                            ref={this.bioRef}
                            value={bio}
                            textColor={theme.primaryColor}
                            tintColor={theme.primaryColor}
                            baseColor={theme.primaryAlphaColor}
                            errorColor={theme.buttonRed}
                            fontSize={14}
                            autoCapitalize="none"
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            label="Биогорафия"
                            error={errors.bio}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
});

export default connect(mapStateToProps)(editProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerViewContainer: {
        flex: 1,
        padding: 12,
        paddingTop: 8,
    },
    avatarView: {
        marginTop: 25,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        borderWidth: 1,
        height: 90,
        width: 90,
        borderRadius: 45
    },
    avatarImageText: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: '800',
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

