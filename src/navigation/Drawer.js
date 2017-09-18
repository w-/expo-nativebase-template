import React from 'react';

import { DrawerNavigator } from 'react-navigation';

import DummyScreen from '../screens/DummyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogoutScreen from '../screens/LogoutScreen';

import DrawerScreen from '../screens/DrawerScreen';

const MerchantDrawer = DrawerNavigator(
    {
        Dummy: {
            screen: DummyScreen,
            params: { drawer: true }
        },
        Settings:{
            screen: SettingsScreen,
        },
        Logout: {
            screen: LogoutScreen,
        },
    },
    {
        initialRouteName: 'Dummy',
        //initialRouteParams: { drawer: true },
        contentOptions: {
          activeTintColor: '#e91e63',
        },
        contentComponent: props => <DrawerScreen {...props}/>,
    }
);


export default MerchantDrawer;