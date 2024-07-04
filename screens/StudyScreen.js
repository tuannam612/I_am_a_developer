import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import StudyItem from "../components/StudyScreen/StudyItem";
import StudyDialogBox from "../components/StudyScreen/StudyDialogBox";
import SkillsIcon from "../components/shared/SkillsIcon";
import { fetchCharacterData } from "../util/http";
import {
	specializedItems,
	subjectsItems,
	universityItems,
} from "../data/educationData";

export default function StudyScreen({ navigation }) {
	const [modalShown, setModalShown] = useState(false);
	const [selectedStudyItem, setSelectedStudyItem] = useState();

	useEffect(() => {
		setModalShown(false);
		fetchCharacterData();
	}, []);

	let subjectsItemsCount = 1;
	let specializedItemsCount = 1;
	let universityItemsCount = 1;

	function handleStudyItemPress(item) {
		setModalShown(true);
		setSelectedStudyItem(item);
	}

	function handleCloseBtnPress() {
		setModalShown(false);
	}

	const subjectsIndex = 0; // Index of the Subjects section title
	const specializedIndex = subjectsItems.length + 1; // Index of the Specialized section title
	const universityIndex = subjectsItems.length + specializedItems.length + 2; // Index of the University Courses section title

	const stickyHeaderIndices = [
		subjectsIndex,
		specializedIndex,
		universityIndex,
	];

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
			minWidth: "100%",
			textAlign: "center",
		},
		sectionTitleContainer: {
			shadowColor: "#000000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.25,
			shadowRadius: 4,
			elevation: 8,
		},
	});
	return (
		<View style={styles.container}>
			{/* Adjust styling for Ios devices */}
			<SafeAreaView />
			<TopBar
				title={"Study"}
				rightIcon={SkillsIcon}
			/>
			<StudyDialogBox
				studyItem={selectedStudyItem}
				visible={modalShown}
				onCloseBtnPress={handleCloseBtnPress}
			/>
			<ScrollView
				bounces={false}
				stickyHeaderIndices={stickyHeaderIndices}
			>
				<View style={styles.sectionTitleContainer}>
					<Text style={styles.sectionTitle}>Subjects</Text>
				</View>
				{subjectsItems &&
					subjectsItems.map((item) => (
						<StudyItem
							title={item.title}
							isFinished={item.isFinished}
							onPress={() => handleStudyItemPress(item)}
							orderNumber={subjectsItemsCount++}
							key={subjectsItemsCount}
						/>
					))}
				<View style={styles.sectionTitleContainer}>
					<Text style={styles.sectionTitle}>Specialized</Text>
				</View>
				{specializedItems &&
					specializedItems.map((item) => (
						<StudyItem
							title={item.title}
							isFinished={item.isFinished}
							onPress={() => handleStudyItemPress(item)}
							orderNumber={specializedItemsCount++}
							key={subjectsItemsCount + specializedItemsCount}
						/>
					))}
				<View style={styles.sectionTitleContainer}>
					<Text style={styles.sectionTitle}>University Courses</Text>
				</View>
				{universityItems &&
					universityItems.map((item) => (
						<StudyItem
							title={item.title}
							isFinished={item.isFinished}
							onPress={() => handleStudyItemPress(item)}
							orderNumber={universityItemsCount++}
							key={
								subjectsItemsCount +
								specializedItemsCount +
								universityItemsCount
							}
						/>
					))}
			</ScrollView>
		</View>
	);
}
