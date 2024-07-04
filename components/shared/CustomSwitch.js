import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Pressable,
	Animated,
	Platform,
	Text,
} from "react-native";
import Color from "../../constants/Color";

const CustomSwitch = ({ value, onValueChange, label, activeColor }) => {
	const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));
	const platform = Platform.OS;

	const toggleSwitch = () => {
		const newValue = !value;
		Animated.timing(animatedValue, {
			toValue: newValue ? 1 : 0,
			duration: platform === "ios" ? 150 : 300,
			useNativeDriver: false,
		}).start();
		onValueChange(newValue);
	};

	const backgroundColor = value
		? activeColor
			? activeColor
			: "green"
		: "darkgrey";

	const translateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 20],
	});

	return (
		<View style={styles.container}>
			<Pressable
				onPress={toggleSwitch}
				style={[styles.pressable, { backgroundColor }]}
			>
				<View style={styles.innerContainer}>
					<Animated.View
						style={[styles.knob, { transform: [{ translateX }] }]}
					/>
				</View>
			</Pressable>
			{label && <Text>{label}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	pressable: {
		width: 52,
		height: 32,
		borderRadius: 16,
		justifyContent: "center",
	},
	innerContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		padding: "5%",
	},
	knob: {
		height: "100%",
		aspectRatio: 1,
		borderRadius: 16,
		backgroundColor: "white",
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 8,
	},
});

export default CustomSwitch;
