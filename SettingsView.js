import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    /* Image,*/
    View,
    ScrollView,
    /* Alert,*/
    /* Button,
     * Dimensions,*/
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';


import MyButton from './MyButton.js';
import MainView from './MainView.js';
import {mainTextColor, darkBlue} from './constants.js';



export default class SettingsView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 30}}>
                        Fuck Facebook
                    </Text>

                </View>
            </View>
        );
    }
}
