import { View, Text, Pressable, StyleSheet } from "react-native";
import Color from "../../constants/Color";

export default function Button({
	children,
	onPress,
	enabled,
	style,
	innerContainerStyle,
	btnTextStyle,
}) {
	const styles = StyleSheet.create({
		button: {
			borderRadius: 10,
			paddingVertical: "5%",
			backgroundColor: Color.COLOR.DARK_PURPLE,
			paddingHorizontal: "10%",
			width: "100%",
			justifyContent: "center",
			alignItems: "center",
		},
		flat: {
			backgroundColor: Color.COLOR.LIGHT_GREY,
		},
		buttonText: {
			color: "white",
			textAlign: "center",
			fontSize: 50,
		},
		flatText: {
			color: Color.COLOR.DARK_GREY,
		},
		pressed: {
			opacity: 0.75,
			borderRadius: 10,
		},
	});

	return (
		<View style={style}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View
					style={[innerContainerStyle, styles.button, !enabled && styles.flat]}
				>
					<Text
						style={[
							styles.buttonText,
							btnTextStyle,
							!enabled && styles.flatText,
						]}
					>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}
