import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Modal } from "react-native";
import Color from "../../constants/Color";
import Button from "../shared/Button";
import CloseButton from "../shared/CloseButton";

export default function ActivityDialogBox({
	onCloseBtnPress,
	visible,
	activity,
}) {
	const formatStatValue = (value) => {
		if (value !== undefined) {
			return value < 0 ? ` -${Math.abs(value)}` : `+${value}`;
		} else {
			return "N/A";
		}
	};

	const getValueTextStyle = (value) => {
		return value !== undefined
			? value < 0
				? styles.negativeValueText
				: styles.positiveValueText
			: styles.defaultValueText;
	};

	const styles = StyleSheet.create({
		container: {
			justifyContent: "center",
			flex: 1,
			alignItems: "center",
			backgroundColor: "#0000006f",
		},
		innerContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
			width: "90%",
			borderRadius: 20,
			paddingVertical: "3%",
		},
		blueishContainer: {
			backgroundColor: Color.COLOR.TURQUOISE,
			padding: "4%",
			width: "85%",
			borderRadius: 15,
		},
		studyItemInfoContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		title: {
			fontSize: 40,
			fontWeight: "bold",
			textAlign: "center",
			paddingHorizontal: "10%",
			marginBottom: "5%",
			marginTop: "10%",
		},
		requirement: {
			fontSize: 25,
			marginVertical: "5%",
			fontWeight: "bold",
			alignSelf: "flex-start",
			paddingHorizontal: "10%",
		},
		detailText: {
			fontSize: 25,
			marginVertical: "3%",
		},
		defaultValueText: {
			fontSize: 25,
			marginVertical: "3%",
			fontWeight: "bold",
		},
		valueTextContainer: {
			backgroundColor: "white",
			paddingVertical: "1%",
			paddingHorizontal: "5%",
			borderRadius: 10,
		},
		button: {
			width: "75%",
			marginBottom: "3%",
			marginTop: "6%",
		},
		negativeValueText: {
			color: "red",
		},
		positiveValueText: {
			color: "green",
		},
	});

	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			statusBarTranslucent={true}
		>
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<CloseButton onPress={onCloseBtnPress} />
					<Text style={styles.title}>{activity && activity.title}</Text>
					<View style={styles.blueishContainer}>
						<View style={styles.studyItemInfoContainer}>
							<Text style={styles.detailText}>Health:</Text>
							<View style={styles.valueTextContainer}>
								<Text
									style={[
										styles.defaultValueText,
										getValueTextStyle(activity && activity.health),
									]}
								>
									{formatStatValue(activity && activity.health)}
								</Text>
							</View>
						</View>
						<View style={styles.studyItemInfoContainer}>
							<Text style={styles.detailText}>Happiness:</Text>
							<View style={styles.valueTextContainer}>
								<Text
									style={[
										styles.defaultValueText,
										getValueTextStyle(activity && activity.happiness),
									]}
								>
									{formatStatValue(activity && activity.happiness)}
								</Text>
							</View>
						</View>
						<View style={styles.studyItemInfoContainer}>
							<Text style={styles.detailText}>Cost:</Text>
							<View style={styles.valueTextContainer}>
								<Text
									style={[
										styles.defaultValueText,
										getValueTextStyle(activity && -activity.cost),
									]}
								>
									${activity && activity.cost}
								</Text>
							</View>
						</View>
					</View>
					<Button
						style={styles.button}
						enabled={activity && activity.health > 0}
					>
						Go
					</Button>
				</View>
			</View>
		</Modal>
	);
}
