import { StyleSheet, View, Text } from "react-native";

export default function SkillBadge({ title }) {
	const styles = StyleSheet.create({
		badgeContainer: {
			alignSelf: "center",
			backgroundColor: "white",
			paddingHorizontal: "4%",
			paddingVertical: "1%",
			borderRadius: 35,
			marginBottom: "3%",
			alignItems: "center",
			justifyContent: "center",
		},
		badgeText: {
			fontSize: 20,
			textAlign: "center",
			fontWeight: "bold",
		},
	});
	return (
		<View style={styles.badgeContainer}>
			<Text style={styles.badgeText}>#{title}</Text>
		</View>
	);
}
