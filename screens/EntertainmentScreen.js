import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import ActivityDialogBox from "../components/EntertainmentScreen/ActivityDialogBox";
import ActivityItem from "../components/EntertainmentScreen/ActivityItem";
import { entertainmentActivities } from "../data/entertainmentData";

export default function EntertainmentScreen() {
	const [modalShown, setModalShown] = useState(false);
	const [selectedActivity, setSelectedActivity] = useState();

	let skillCount = 1;

	function handleActivityPress(activity) {
		setModalShown(true);
		setSelectedActivity(activity);
	}

	function handleCloseBtnPress() {
		setModalShown(false);
	}

	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			flex: 1,
			backgroundColor: Color.COLOR.DARK_PURPLE,
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
		scrollView: {
			alignItems: "center",
		},
	});
	return (
		<View style={styles.container}>
			{/* Adjust styling for Ios devices */}
			<SafeAreaView />
			<TopBar title={"Entertainment"} />
			<ActivityDialogBox
				activity={selectedActivity}
				visible={modalShown}
				onCloseBtnPress={handleCloseBtnPress}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				{/* <Text style={styles.sectionTitle}>Friends</Text> */}
				{entertainmentActivities &&
					entertainmentActivities.map((activity) => (
						<ActivityItem
							orderNumber={skillCount++}
							key={skillCount}
							title={activity.title}
							onPress={() => handleActivityPress(activity)}
						/>
					))}
			</ScrollView>
		</View>
	);
}
