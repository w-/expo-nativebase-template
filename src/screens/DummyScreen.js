import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';

import {Container,
		Content,
		Header,
		Button,
		Left,
		Body,
		Right,
		Title, } from 'native-base';

import Icon from '../components/Icon'

const DummyScreenPropTypes = {
}

const DummyScreenDefaultProps = {
}

class DummyScreen extends React.Component{
	constructor(props){
		super(props);

		this.showMenu = this.showMenu.bind(this)
		this.goBack = this.goBack.bind(this)
	}

	showMenu(){
		this.props.navigation.navigate('DrawerOpen')
	}

	goBack(){
		this.props.navigation.goBack();
	}

	render(){
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={this.goBack}>
							<Icon android="md-arrow-back"
									ios="ios-arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Dummy Screen</Title>
					</Body>
					<Right></Right>
				</Header>

				<Content style={{ flex: 1 }}>
					<Text>Welcome to Dummy Screen</Text>

				</Content>

			</Container>
		);
	}
}

DummyScreen.propTypes = DummyScreenPropTypes;
DummyScreen.defaultProps = DummyScreenDefaultProps;


export default DummyScreen
