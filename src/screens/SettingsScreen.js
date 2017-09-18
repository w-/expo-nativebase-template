import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Constants, Util} from 'expo';

import {Container,
		Header,
		Title,
		Left,
		Right,
		Body,
		Content,
		Button,
		List,
		ListItem,
		ListDivider,
		Spinner,} from 'native-base';

import Icon from '../components/Icon';

const SettingsScreenPropTypes = {
}

const SettingsScreenDefaultProps = {
}

class SettingsScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Settings',
		drawerIcon: ({tintColor})=>(
			<Icon name="settings"
					theme="MaterialCommunityIcons"
					color={tintColor} />
		),
	}

	constructor(props){
		super(props);
		this.manifest = Constants.manifest;

		this.showMenu = this.showMenu.bind(this);
	}

	showMenu(){
		this.props.navigation.navigate('DrawerOpen')
	}

	handleReload(){
		Util.reload();
	}

	render(){
		return <Container>
			<Header>
				<Left>
					<Button transparent onPress={this.showMenu}>
						<Icon name="menu"></Icon>
					</Button>
				</Left>
				<Body>
					<Title>Settings</Title>
				</Body>
				<Right>
				</Right>
			</Header>
			<Content>
				<List>
					<ListItem>
						<Body>
							<Text> Reload</Text>
						</Body>
						<Right>
							<Button
								bordered
								onPress={this.handleReload}>
								<Icon name="reload" theme="MaterialCommunityIcons"/>
							</Button>
						</Right>
					</ListItem>
					<ListItem>
						<Body><Text>App Version</Text></Body>
						<Right><Text>{this.manifest.version}</Text></Right>
					</ListItem>
					<ListItem>
						<Body><Text>SDK</Text></Body>
						<Right><Text>{this.manifest.sdkVersion}</Text></Right>
					</ListItem>
				</List>

			</Content>
		</Container>;
	}
}

SettingsScreen.propTypes = SettingsScreenPropTypes;
SettingsScreen.defaultProps = SettingsScreenDefaultProps;


export default SettingsScreen
