import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";

export default function Item({ orderNumber, title, onPress, rightComponent }) {
	const styles = StyleSheet.create({
		container: {
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor:
				orderNumber % 2 === 0 ? Color.COLOR.LIGHT_GREEN : Color.COLOR.TURQUOISE,
			flexDirection: "row",
			width: "100%",
			paddingHorizontal: "5%",
			paddingVertical: "3%",
		},
		title: {
			fontSize: 20,
		},
	});
	return (
		<Pressable onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				{rightComponent}
			</View>
		</Pressable>
	);
}
