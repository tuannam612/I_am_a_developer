import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import Color from "../../constants/Color";

export default function HorizontalProgressBar({
	progressContainerColor,
	progressColor,
}) {
	const [progress, setProgress] = useState(new Animated.Value(0));

	useEffect(() => {
		const animateProgress = () => {
			Animated.timing(progress, {
				toValue: 1,
				duration: 10000, // 10 second animation
				easing: Easing.linear, // Linear animation
				useNativeDriver: false,
			}).start(({ finished }) => {
				if (finished) {
					progress.setValue(0); // Reset progress to 0 after animation completes
					animateProgress(); // Restart animation
				}
			});
		};

		animateProgress(); // Start initial animation
	}, []);

	const styles = StyleSheet.create({
		progressContainer: {
			backgroundColor: progressContainerColor
				? progressContainerColor
				: "lightgrey",
			borderRadius: 1000000,
			overflow: "hidden",
			maxWidth: "20%",
			flex: 1,
			height: "120%",
		},
		progressBar: {
			height: "100%",
			backgroundColor: progressColor ? progressColor : Color.COLOR.DARK_PURPLE,
			position: "absolute",
		},
		text: {
			fontSize: 20,
			alignSelf: "center",
			zIndex: 9,
		},
	});

	return (
		<View style={styles.progressContainer}>
			<Text style={styles.text}></Text>
			<Animated.View
				style={[
					styles.progressBar,
					{
						width: progress.interpolate({
							inputRange: [0, 1],
							outputRange: ["0%", "100%"],
						}),
					},
				]}
			/>
		</View>
	);
}
