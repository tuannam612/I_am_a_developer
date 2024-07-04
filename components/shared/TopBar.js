import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PressableOpacityWrapper from "./PressableOpacityWrapper";

export default function TopBar({ title, rightIcon }) {
	const navigation = useNavigation();
	const styles = StyleSheet.create({
		container: {
			justifyContent: "center",
			alignItems: "flex-end",
			backgroundColor: Color.COLOR.DARK_PURPLE,
			flexDirection: "row",
			width: "100%",
			paddingVertical: "3%",
		},
		title: {
			fontSize: 40,
			fontWeight: "bold",
			color: "white",
			paddingVertical: "1%",
		},
		leftIconContainer: {
			flex: 1,
			justifyContent: "space-evenly",
			alignItems: "center",
			flexDirection: "row",
			backgroundColor: Color.COLOR.DARK_PURPLE,
			height: "100%",
		},
		middleComponentContainer: {
			flex: 5,
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "row",
			height: "100%",
		},
		rightIconContainer: {
			flex: 1,
			justifyContent: "space-evenly",
			alignItems: "center",
			flexDirection: "row",
			backgroundColor: Color.COLOR.DARK_PURPLE,
			height: "100%",
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.leftIconContainer}>
				<PressableOpacityWrapper onPress={navigation.goBack}>
					<MaterialCommunityIcons
						name="chevron-left-circle"
						size={38}
						color={"white"}
					/>
				</PressableOpacityWrapper>
			</View>
			<View style={styles.middleComponentContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.rightIconContainer}>{rightIcon && rightIcon()}</View>
		</View>
	);
}
