import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../../themes/LabKeyTheme';

export default function FilterPopUpMenu({ filter }) {

	const [visible, setVisible] = useState(false);
	const options = [
		{
		  label: 'Hoje',
		  tableFilter: 1
		},
		{
		  label: 'Esse Mês',
		  tableFilter: 2
		},
		{
		  label: 'Últimos 6 messes',
		  tableFilter: 3
		}
	];

  return (
		<>
			<IconButton 
				icon={() => <Icon name="filter-variant" size={18}/>}
				onPress={() => setVisible(true)}
			/>
			<Modal transparent visible={ visible }>
				<View style={{ flex: 1 }} onTouchEnd={() => setVisible(false)}>
					<View style={ styles.popUpMenu }>
						{options.map( (op, i) => (
							<View
							style={[styles.popOption, { borderBottomWidth: i === options.length - 1 ? 0 : 1 }]}
							key={i}>
								<TouchableOpacity onPress={() => {filter({tableFilter: op.tableFilter, label:op.label})}} >
									<Text style={styles.popOptionText}>{op.label}</Text>
								</TouchableOpacity>
							</View>
						))}
					</View>
				</View>
			</Modal>
		</>
  );
}

const styles = StyleSheet.create({
	popUpMenu: {
		backgroundColor: Theme.BackGroundColor,
		borderWidth: 1,
		borderColor: Theme.OnBackGroundColor,
		paddingHorizontal: 10,
		paddingVertical: 5,
		position: 'absolute',
		top: '25%',
		right: 10,
		alignSelf:"flex-end"
	},
	popOption:{
		borderColor:'#999999',
		paddingVertical: 5,
	},
	popOptionText:{
		color: Theme.OnBackGroundColor,
		fontSize: 20,
	},
});
  