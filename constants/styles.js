import { StyleSheet } from "react-native";
import Color from "./Color";

export const statusBarStyle = StyleSheet.create({
	statusBarLight: {
		backgroundColor: "#000", // Optional background color (transparent for dark mode)
		barStyle: "light-content", // Set text and icon colors to light
	},
	statusBarDark: {
		// backgroundColor: "#000", // Optional background color (transparent for light mode)
		barStyle: "dark-content", // Set text and icon colors to dark
	},
});

export const onboardingScreensStyle = StyleSheet.create({
	secondaryText: {
		fontWeight: "bold",
		fontSize: 20,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: Color.COLOR.LIGHT_GREEN,
		width: "100%",
		paddingHorizontal: "10%",
	},
	title: {
		fontWeight: "bold",
		fontSize: 40,
		textAlign: "center",
	},
	titleContainer: {
		marginVertical: "10%",
		width: "100%",
	},
	outerBtnContainer: {
		width: "100%",
		paddingVertical: "5%",
	},
	btnText: {
		fontSize: 30,
		fontWeight: "bold",
	},
	scrollView: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "100%",
	},

	rowContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		flexDirection: "row",
	},

});
