import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import { Tab, Tabs, TabHeading } from 'native-base';
import data from '../feed/data';
import FollowUserTab from './FollowUserTab';

class followAndFollowingScreen extends Component {

    static navigationOptions = ({navigation, route}) => {
        return {
            title: route.params.user.username,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            followData: data,
            followingData: data,
            selectedIndex: 0
        }
    }

    componentDidMount(): void {
    }

    onChangeTab = (index) => {
        this.setState({selectedIndex:index.i})
    };

    render() {
        const {theme, navigation} = this.props;
        const {followData, followingData, selectedIndex} = this.state;

        return (
            <View style={[
                styles.container,
                {backgroundColor: theme.container.backgroundColor},
            ]}>
                <Tabs tabBarUnderlineStyle={{backgroundColor: theme.buttonRed, height: 2}} onChangeTab={this.onChangeTab}>
                    <Tab heading={<TabHeading style={{backgroundColor: theme.container.backgroundColor}}>
                        <Text style={{color: selectedIndex === 0 ? theme.buttonRed : theme.primaryColor}}>{`Подписчики`}</Text>
                    </TabHeading>}>
                        <FollowUserTab title={'Подписчики'} theme={theme} data={followData} navigation={navigation} />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor: theme.container.backgroundColor}}>
                        <Text style={{color: selectedIndex === 1 ? theme.buttonRed : theme.primaryColor}}>{`Подписки`}</Text>
                    </TabHeading>}>
                        <FollowUserTab title={'Подписки'} theme={theme} data={followingData} navigation={navigation} />
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.auth.theme,
});

export default connect(mapStateToProps)(followAndFollowingScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

