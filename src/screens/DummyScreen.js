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
	static navigationOptions = {
        drawerLabel: 'Dummy',
        drawerIcon: ({ tintColor }) => (
            <Icon name="dumbbell"
                    theme="MaterialCommunityIcons"
                    color={tintColor} />
        ),
    }

	constructor(props){
		super(props);

		console.log('nav props', this.props.navigation.state)
		const {params} = this.props.navigation.state
		this.showDrawer = params && params.drawer ? true : false;

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

		let leftContent = (
			<Button transparent onPress={this.goBack}>
				<Icon android="md-arrow-back"
						ios="ios-arrow-back" />
			</Button>
		);

		if (this.showDrawer){
			leftContent = (
				<Button transparent onPress={this.showMenu}>
                    <Icon name="menu"></Icon>
                </Button>
			)
		}

		return (
			<Container>
				<Header>
					<Left>
						{leftContent}
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
