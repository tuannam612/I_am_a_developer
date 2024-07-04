import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import ItemWithBadge from "../components/OccupationScreen/ItemWithBadge";
import OccupationDialogBox from "../components/OccupationScreen/OccupationDialogBox";
import SkillsIcon from "../components/shared/SkillsIcon";
import { fullTimeJobs, partTimeJobs } from "../data/occupationData";

import ActivitiesSection from "../components/ActivitiesScreen/ActivitiesSection";

export default function OccupationScreen({ navigation }) {
	const [modalShown, setModalShown] = useState(false);
	const [selectedJob, setSelectedJob] = useState();

	let fullTimeJobCount = 1;
	let partTimeJobCount = 1;

	const formatSalary = (salary) => {
		if (salary >= 1000) {
			return `${(salary / 1000).toFixed(1)}K`;
		}
		return salary;
	};

	function handleJobPress(job) {
		setModalShown(true);
		setSelectedJob(job);
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
		jobListTitle: {
			color: "white",
			fontSize: 30,
			fontWeight: "600",
			paddingVertical: "5%",
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
			width: "100%",
			textAlign: "center",
		},
		jobListContainer: {
			alignItems: "center",
		},
	});
	function cút() {
		navigation.navigate("OnboardingScreenStack");
	}
	return (
		<View style={styles.container}>
			{/* Adjust styling for Ios devices */}
			{/* <StatusBar style={statusBarStyle.statusBarDark} /> */}
			{/* TAO PUSH ĐÂY NÀY */}

			<SafeAreaView />
			<TopBar
				title={"Occupation"}
				rightIcon={SkillsIcon}
			/>
			<OccupationDialogBox
				onCloseBtnPress={handleCloseBtnPress}
				visible={modalShown}
				job={selectedJob}
			/>
			<ScrollView
				contentContainerStyle={styles.jobListContainer}
				bounces={false}
			>
				<ActivitiesSection
					title={"Cút ra mà Login đê"}
					onPress={cút}
				/>
				<Text style={styles.jobListTitle}>Part Time</Text>
				{partTimeJobs.map((job) => (
					<ItemWithBadge
						orderNumber={partTimeJobCount++}
						key={partTimeJobCount}
						title={job.name}
						value={formatSalary(job.salary)}
						onPress={() => handleJobPress(job)}
					/>
				))}
				<Text style={styles.jobListTitle}>Full Time</Text>
				{fullTimeJobs.map((job) => (
					<ItemWithBadge
						orderNumber={fullTimeJobCount++}
						key={partTimeJobCount + fullTimeJobCount}
						title={job.name}
						value={formatSalary(job.salary)}
						onPress={() => handleJobPress(job)}
					/>
				))}
			</ScrollView>
		</View>
	);
}
