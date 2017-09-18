import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {Container,
		 Content,
		 Grid,
		 Row,
		 Col,
		 Button, } from 'native-base';

import {LogoImg} from '../constants/Images';

import Icon from '../components/Icon';

const StartScreenPropTypes = {
}

const StartScreenDefaultProps = {
}


function StartScreen(props){
	// temp redirect to page we want to test
	//props.navigation.navigate('ContactDetail', {userId: 888, contactId: '-KqXql8ZEmWG9_pVYaWh'}, )


	function handleDummy(){
		props.navigation.navigate('Dummy');
	}

	function handleDrawer(){
		props.navigation.navigate('Drawer', {drawer:true});
	}

	return (
		<View style={styles.container}>
			<Image source={LogoImg}
					resizeMode={Image.resizeMode.contain}
					style={styles.imgAutoSize} />
			<View style={styles.btnContainer}>
				<Button block
						large
						style={{
							backgroundColor:"midnightblue",
							borderRadius:5,
							marginTop: 20,
							marginBottom: 20,
						}}
						onPress={handleDummy}>
					<Icon name="new-box"
							theme="MaterialCommunityIcons"
							style={{ color:'white'}} />
					<Text style={{ color: 'white', }}>Mode #1</Text>
				</Button>

				<Button block
						large
						style={{
							backgroundColor:"seagreen",
							borderRadius:5,
							marginTop: 20,
							marginBottom: 20,

						}}
						onPress={handleDrawer}>
					<Icon name="login"
							theme="MaterialCommunityIcons"
							style={{ color:'white'}} />
					<Text style={{ color: 'white', }}>Mode #2</Text>
				</Button>
			</View>

		</View>

	);
}

StartScreen.navigationOptions = {
	header:null,
}

StartScreen.propTypes = StartScreenPropTypes;
StartScreen.defaultProps = StartScreenDefaultProps;

export default StartScreen;


const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 15,

	},
	imgAutoSize: {
		flex: 1,
		marginTop: 10,
	},
	btnContainer:{
		flex: 3,
		justifyContent: 'center',
		width: '100%',
	},
});

