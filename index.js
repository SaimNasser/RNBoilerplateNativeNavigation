/**
 * @format
 */

import * as React from 'react';

import { Navigation } from "react-native-navigation";
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import { Provider } from 'react-redux';
import { store } from './src/redux/index';
import AppColors from './src/utills/AppColors';


Navigation.registerComponent('Login', () =>
    (props) => <Provider store={store}><Login {...props} /></Provider>);
Navigation.registerComponent('Home', () =>
    (props) => <Provider store={store}><Home {...props} /></Provider>);


Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: AppColors.white
    },
    topBar: {
        visible: false
    },
    hardwareBackButton: {
        popStackOnPress: true,
        dismissModalOnPress: true,
        bottomTabsOnPress: 'previous',
    },
})

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'LoginStack',
                children: [
                    {
                        component: {
                            name: 'Login'
                        },
                    },
                ]
            },
        }
    });
});

