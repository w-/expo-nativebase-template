import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import * as Images from './Images';

let imgArr = Object.values(Images).reduce( (accumulator, elem)=> {
	accumulator = accumulator.concat(elem);
	return accumulator;
}, []);

const Preload = {
	Images: [
		...imgArr,
	],
	Fonts: [
		// Icon fonts
		Ionicons.font,
		Entypo.font,
		MaterialCommunityIcons.font,
		// Text fonts
		{ 'roboto': require('../assets/fonts/Roboto-Regular.ttf') },
		{ 'Roboto_medium': require('../assets/fonts/Roboto-Medium.ttf') },
	],
};

export default Preload