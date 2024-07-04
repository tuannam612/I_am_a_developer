import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";

export default function ItemWithBadge({ orderNumber, title, value, onPress }) {
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
		salaryContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "white",
			paddingVertical: "1%",
			paddingHorizontal: "4%",
			borderRadius: 10,
		},
		jobTitle: {
			fontSize: 20,
		},
		salary: {
			fontSize: 25,
		},
	});
	return (
		<Pressable onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.jobTitle}>{title}</Text>
				<View style={styles.salaryContainer}>
					<Text style={styles.salary}>${value}</Text>
				</View>
			</View>
		</Pressable>
	);
}
