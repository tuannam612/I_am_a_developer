import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import Color from "../../constants/Color";
import Button from "../shared/Button";
import PressableOpacityWrapper from "../shared/PressableOpacityWrapper";
import CloseButton from "../shared/CloseButton";

export default function DialogBox({ onCloseBtnPress, visible, job }) {
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
		requirementContainer: {
			backgroundColor: Color.COLOR.TURQUOISE,
			padding: "4%",
			width: "85%",
			borderRadius: 15,
		},
		requirementItemContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		jobTitle: {
			fontSize: 40,
			fontWeight: "bold",
			alignSelf: "flex-start",
			paddingHorizontal: "10%",
			marginBottom: "3%",
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
		levelSalaryContainer: {
			justifyContent: "center",
			alignItems: "center",
			paddingVertical: "3%",
		},
		button: {
			width: "75%",
			marginVertical: "3%",
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
					<Text style={styles.jobTitle}>{job && job.name}</Text>
					<Text style={styles.requirement}>Requirements</Text>
					<View style={styles.requirementContainer}>
						<View style={styles.requirementItemContainer}>
							<Text style={styles.detailText}>Strength:</Text>
							<Text style={styles.detailText}>
								{job && job.requirement.strength}
							</Text>
						</View>
						<View style={styles.requirementItemContainer}>
							<Text style={styles.detailText}>Intelligence:</Text>
							<Text style={styles.detailText}>
								{job && job.requirement.intelligence}
							</Text>
						</View>
						<View style={styles.requirementItemContainer}>
							<Text style={styles.detailText}>Charm:</Text>
							<Text style={styles.detailText}>
								{job && job.requirement.charm}
							</Text>
						</View>
					</View>
					<View style={styles.levelSalaryContainer}>
						<Text style={styles.detailText}>Level: {job && job.level}</Text>
						<Text style={styles.detailText}>Salary: ${job && job.salary}</Text>
					</View>
					<Button
						style={styles.button}
						enabled={job && job.requirement.intelligence < 50}
					>
						Apply
					</Button>
				</View>
			</View>
		</Modal>
	);
}
