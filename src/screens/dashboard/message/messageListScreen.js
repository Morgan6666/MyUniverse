import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import messageListData from './messageListData';
import MessageListItem from '../../../components/general/MessageListItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import {Red} from '../../../themes/constantColors';
import FastImage from 'react-native-fast-image';
import {getStore} from '../../../../App';
import Feather from 'react-native-vector-icons/Feather';
import {Icon, Input, Item} from 'native-base';
import Search_iconic from '../../../navigators/CustomingTabSearchNavigator';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
import Krest_iconic from '../../../navigators/CustomingKrest';
import Custom_circle from '../../../navigators/CustomingCircleComponent';
import {Circle} from 'react-native-svg';
import Custom_bucket from '../../../navigators/CustomuingBucket';
class messageListScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Сообщения',
            headerRight: () => {
                return <TouchableWithoutFeedback onPress={() => {navigation.navigate('NewMessage')}}>
                    <View style={{paddingLeft: -2, paddingRight: 30}}>
                        <View style={styles.iconView}>
                            <Circle></Circle>
                           <Krest_iconic></Krest_iconic>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            data: messageListData
        }
    }

    componentDidMount(): void {
    }

    renderHiddenItem = (data, rowMap) => {
        const {theme, navigation} = this.props;
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}
                                  onPress={() => rowMap[data.item.messageId].closeRow()}>
                    <Custom_bucket></Custom_bucket>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        const {theme, navigation} = this.props;
        const {data} = this.state;

        return (
            <View style={[
                styles.container,
                {backgroundColor: theme.container.backgroundColor},
            ]}>
                <SwipeListView
                    data={data}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{padding: 15, paddingLeft: 15}}>
                                <Item style={[styles.inputItem, {borderColor: 'rgba(169,170,171,0.38)',borderRadius: 50}]}>
                                    <Search_iconic></Search_iconic>
                                    <Input placeholder="Поиск" placeholderTextColor={theme.secondaryColor} style={{
                                        fontSize: 15, color: theme.secondaryColor,borderRadius: 50

                                    }} />
                                </Item>
                            </View>
                        )
                    }}
                    renderItem={({ item }) => <MessageListItem theme={theme} item={item} navigation={navigation} />}
                    keyExtractor={item => item.messageId.toString()}
                    extraData={data}
                    renderHiddenItem={this.renderHiddenItem}
                    leftOpenValue={0}
                    rightOpenValue={-75}
                />
            </View>
        );
    }
}

let mapStateToProps;
mapStateToProps = state => ({
    theme: state.auth.theme,
});

export default connect(mapStateToProps)(messageListScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerViewContainer: {
        flex: 1,
        padding: 12,
        paddingTop: 8,
    },
    inputItem: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        // marginLeft: 15,
        // marginRight: 15,
        paddingLeft: 12,
        paddingRight: 12,
        // marginBottom: 15,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: Red,
        right: 0,
    },
    iconImage: {
        width: 25,
        height: 25,
    },
});
