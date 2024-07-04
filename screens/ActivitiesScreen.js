import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import ActivitiesSection from "../components/ActivitiesScreen/ActivitiesSection";

export default function ActivitiesScreen({ navigation }) {
	const studySectionDescription = "Study more to improve your stats!";
	const workingSectionDescription = "Get a job to gain more money!";
	const entertainingSectionDescription =
		"Increase your health and happiness outside working and studying!";

	function handleStudyPress() {
		navigation.navigate("Study");
	}

	function handleWorkingPress() {
		navigation.navigate("Occupation");
	}

	function handleEntertainingPress() {
		navigation.navigate("Entertainment");
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
			<TopBar title={"Activities"} />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				<ActivitiesSection
					title={"Study"}
					description={studySectionDescription}
					onPress={handleStudyPress}
				/>
				<ActivitiesSection
					title={"Working"}
					description={workingSectionDescription}
					onPress={handleWorkingPress}
				/>
				<ActivitiesSection
					title={"Entertaining"}
					description={entertainingSectionDescription}
					onPress={handleEntertainingPress}
				/>
			</ScrollView>
		</View>
	);
}
