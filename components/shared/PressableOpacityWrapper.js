import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";

export default function PressableOpacityWrapper({ children, onPress }) {
	const [pressed, setPressed] = useState(false);

	const handlePressIn = () => {
		setPressed(true);
	};

	const handlePressOut = () => {
		setPressed(false);
	};

	const styles = StyleSheet.create({
		pressed: {
			opacity: 0.75,
		},
	});
	return (
		<Pressable
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			style={pressed && styles.pressed}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
}
