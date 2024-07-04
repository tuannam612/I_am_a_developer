import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ActivitiesSection({ title, onPress, description }) {
	const styles = StyleSheet.create({
		titleContainer: {
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row",
		},
		sectionTitle: {
			color: "white",
			fontSize: 30,
			fontWeight: "600",
			paddingVertical: "5%",
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
			width: "100%",
			textAlign: "center",
		},
		chevron: {
			position: "absolute",
			right: "1%",
		},
		descriptionContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: Color.COLOR.TURQUOISE,
			width: "100%",
			paddingHorizontal: "10%",
			paddingVertical: "20%",
		},
		description: {
			fontSize: 20,
			fontWeight: "500",
			textAlign: "center",
		},
	});
	return (
		<>
			<Pressable onPress={onPress}>
				<View style={styles.titleContainer}>
					<Text style={styles.sectionTitle}>{title}</Text>
					{/* {title !== "Entertaining" && ( */}
					<MaterialCommunityIcons
						name="chevron-right"
						size={38}
						color={"white"}
						style={styles.chevron}
					/>
					{/* )} */}
				</View>
			</Pressable>
			<View style={styles.descriptionContainer}>
				<Text style={styles.description}>{description}</Text>
			</View>
		</>
	);
}
