import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';

import { NavigationActions } from 'react-navigation'

import Icon from '../components/Icon'

const LogoutScreenPropTypes = {
}

const LogoutScreenDefaultProps = {
}

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Start'})
	],
})

class LogoutScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Logout',
		drawerIcon: ({tintColor})=>(
			<Icon name="logout"
					theme="MaterialCommunityIcons"
					color={tintColor} />
		),
	}

	constructor(props){
		super(props);

	}

	componentWillMount(){
		this.props.navigation.dispatch(resetAction);
	}

	render(){
		return null;
	}
}

LogoutScreen.propTypes = LogoutScreenPropTypes;
LogoutScreen.defaultProps = LogoutScreenDefaultProps;


export default LogoutScreen
