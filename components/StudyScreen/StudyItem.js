import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StudyItem({ orderNumber, title, isFinished, onPress }) {
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
		rightContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "lightgrey",
			paddingHorizontal: "4%",
			borderRadius: 10,
			paddingVertical: "1%",
		},
		title: {
			fontSize: 20,
			paddingVertical: "2%",
		},
		titleContainer: {
			flex: 1,
		},
		status: {
			fontSize: 25,
			color: "grey",
		},
	});

	const rightComponent = isFinished ? (
		<View style={styles.rightContainer}>
			<Text style={styles.status}>{"Finished"}</Text>
		</View>
	) : (
		<>
			<MaterialCommunityIcons
				name="chevron-right"
				size={26}
			/>
		</>
	);

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
				{rightComponent}
			</View>
		</Pressable>
	);
}
