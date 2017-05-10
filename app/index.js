import React, {Component} from 'react';
import {
    AppRegistry,
    Alert,
} from 'react-native';

import {EventEmitter} from 'fbemitter';

import * as firebase from 'firebase';

import Settings from './views/Settings';
import Home from './views/home/Home';

let _emitter = new EventEmitter();
import DrawerLayout from './layouts/DrawerLayout';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDTrcxyv3aHGM5v_NpxkLrCMR5mCy0MUp8',
    authDomain: 'imada-app.firebaseapp.com',
    databaseURL: 'https://imada-app.firebaseio.com',
    storageBucket: 'imada-app.appspot.com'
};
firebase.initializeApp(firebaseConfig);

export default class ImadaApp extends Component {
    componentDidMount() {
        _emitter.addListener('back', () => {
            this._navigator.pop();
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            view: <Home/>,
        };
    }

    render() {
        return (
            <DrawerLayout
                rightButtonPress={ () => this.navBarRightButtonPressed }
                renderContent={ (route, navigator) => this.renderSceneView(route, navigator) }
                user={this.state.user}
            />
        );
    }

    renderSceneView(route, navigator) {
        switch (route.id) {
            case 'Home':
                return ( <Home navigator={navigator} user={this.state.user}/> );

            case 'Settings':
                return ( <Settings navigator={navigator} user={this.state.user}/>);
        }
    }

    navBarRightButtonPressed() {
        Alert.alert('About', 'Created by Unknown Host.\n\nDevelopers:\n' +
            'Christian Moeslund, chmoe13@student.sdu.dk\nJonatan Møller jogoe12@student.sdu.dk\n\n' +
            'Other duderinos:\nAndreas Munk Jensen, Ehsanullah Ekhlas, Erik Zijdemans, Søren Anthony')
    }
}
