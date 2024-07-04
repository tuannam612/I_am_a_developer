import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";

export default function CloseButton({ onPress }) {
	const [pressed, setPressed] = useState(false);

	const handlePressIn = () => {
		setPressed(true);
	};

	const handlePressOut = () => {
		setPressed(false);
	};

	const styles = StyleSheet.create({
		closeBtn: {
			alignSelf: "flex-end",
			position: "absolute",
			right: 10,
			top: 10,
		},
		pressed: {
			opacity: 0.75,
		},
	});
	return (
		<Pressable
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			style={[styles.closeBtn, pressed && styles.pressed]}
			onPress={onPress}
		>
			<MaterialCommunityIcons
				name="close"
				size={38}
				color={"#1d1d1d6f"}
			/>
		</Pressable>
	);
}
