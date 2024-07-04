import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";

export default function SkillItem({ orderNumber, title, onPress }) {
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
			fontSize: 24,
			paddingVertical: "2%",
		},
		titleContainer: {
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
		},
	});

	return (
		<Pressable onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text
						style={styles.title}
						numberOfLines={1}
					>
						{title}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}
