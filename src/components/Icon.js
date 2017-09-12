import PropTypes from 'prop-types';
import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';
import {Ionicons, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';


const ThemedIconPropTypes = {
	name: PropTypes.string,
	ios: PropTypes.string,
	android: PropTypes.string,
	theme: PropTypes.string,
	style: PropTypes.oneOfType([
				PropTypes.object,
				PropTypes.string,
				PropTypes.arrayOf(PropTypes.object),
				Text.propTypes.style,
				PropTypes.arrayOf(Text.propTypes.style),
			]),
	size: PropTypes.number,
}

const ThemedIconDefaultProps = {
	theme: 'default',
	style: {},
}

function ThemedIcon(props){
	let iconComponent;

	let args = Object.assign({}, props);
	// style is a read only object and we need to write it
	// if style is of PropType style
	if (typeof props.style === 'number'){
		args.style = Object.assign({}, StyleSheet.flatten(props.style))
	} else{
		args.style = Object.assign({}, props.style)
	}

	//console.log('themed icon props', props)
	switch(props.theme){
		case 'MaterialCommunityIcons':
			// copied from nativebase platform default theme
			if (!args.size){
				args.size= Platform.OS === "ios" ? 30 : 28;
			}
			iconComponent = <MaterialCommunityIcons {...args}/>;
			break;
		case 'Entypo':
			if (!args.size){
				args.size= Platform.OS === "ios" ? 30 : 28;
			}
			iconComponent = <Entypo {...args}/>;
			break;
		case 'default':
		default:
			if (props.theme !== 'default'){
				console.warn(`Unknown theme ${props.theme}`);
			}
			if (args.size) {
				args.style['fontSize'] = args.size;
			}
			iconComponent = <Icon {...args}/>;
			break;

	}
	return iconComponent;
}

ThemedIcon.propTypes = ThemedIconPropTypes;
ThemedIcon.defaultProps = ThemedIconDefaultProps;

export default ThemedIcon;
