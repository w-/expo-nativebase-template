import {Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Drawer from '../navigation/Drawer';

import StartScreen from '../screens/StartScreen';

import DummyScreen from '../screens/DummyScreen';



const AppRoutes = {
    Drawer: {
        name: 'Agent Mode',
        description: 'Agent Drawer Navigation',
        screen: Drawer,
    },
}


const RootNavigation = StackNavigator(
    {
        ...AppRoutes,
        Start:{
            screen: StartScreen,
        },
        Dummy:{
            screen: DummyScreen,
        },
    },
    {
        initialRouteName: 'Start',
        //initialRouteName: 'ContactStatusForm',
        //initialRouteName: 'TeamActivityStream',
        //initialRouteName: 'AgentPerformance',

        //initialRouteName: 'TeamDashboard',
        //initialRouteParams: {teamLeadId: 'teamLeadAlpha'},

        //initialRouteName: 'ContactForm',
        //initialRouteParams: {contactId: null, ownerId: '666'},
        headerMode: 'none',

        /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);

export default RootNavigation