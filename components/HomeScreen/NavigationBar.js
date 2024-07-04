import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AgeCircle from "./AgeCircle";
import Color from "../../constants/Color";
import { useNavigation } from "@react-navigation/native";

function NavigationButton({ title, onPress, style }) {
	return (
		<Pressable
			style={[styles.container, style]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

function NavigationBar() {
	const navigation = useNavigation();
	return (
		<View>
			<View style={styles.navigationContainer}>
				<View style={styles.leftContainer}>
					<NavigationButton
						title="Career"
						style={{ borderRightWidth: 1 }}
						onPress={() => {
							navigation.navigate("OccupationScreenStack");
						}}
					/>
					<NavigationButton
						title="Social"
						style={{ borderRightWidth: 1 }}
						onPress={() => {
							console.log("Social");
							navigation.navigate("SocialScreenStack");
						}}
					/>
				</View>
				<View style={styles.rightContainer}>
					<NavigationButton
						title="Finance"
						style={{ borderLeftWidth: 1 }}
						onPress={() => {
							console.log("Finance");
							navigation.navigate("Finance");
						}}
					/>
					<NavigationButton
						title="Activities"
						style={{ borderLeftWidth: 1 }}
						onPress={() => {
							console.log("Activities");
							navigation.navigate("ActivitiesScreenStack");
						}}
					/>
				</View>
			</View>
			<View style={styles.ageContainer}>
				<AgeCircle />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 73,
		height: 90,
		backgroundColor: Color.COLOR.LIGHT_PURPLE,
	},
	text: {
		fontWeight: "bold",
	},
	navigationContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 40,
		backgroundColor: Color.COLOR.DARK_PURPLE,
	},
	leftContainer: {
		flexDirection: "row",
	},
	rightContainer: {
		flexDirection: "row",
	},
	ageContainer: {
		position: "absolute",
		left: 135.9,
		top: -24.5,
	},
});
export default NavigationBar;
