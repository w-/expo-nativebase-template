import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import { DrawerItems } from 'react-navigation';

import {LogoImg} from '../constants/Images';

const DrawerScreenPropTypes = {
}

const DrawerScreenDefaultProps = {
}

function DrawerScreen(props){

	return (
		<ScrollView style={styles.container}>
				<Image source={LogoImg}
						resizeMode={Image.resizeMode.contain}
						style={styles.imgAutoSize} />
    			<DrawerItems {...props} />
  		</ScrollView>
  	);
}

DrawerScreen.propTypes = DrawerScreenPropTypes;
DrawerScreen.defaultProps = DrawerScreenDefaultProps;

export default DrawerScreen;


const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	imgAutoSize: {
		maxWidth: 250,
		height: 100,
		marginBottom: 10,
	},
})
