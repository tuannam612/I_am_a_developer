import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import SkillItem from "../components/SkillsScreen/SkillItem";
import { skills } from "../data/skillsData";

export default function SkillsScreen() {
	let skillCount = 1;

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
			<TopBar title={"Skills"} />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				{/* <Text style={styles.sectionTitle}>Friends</Text> */}
				{skills &&
					skills.map((skill) => (
						<SkillItem
							orderNumber={skillCount++}
							key={skillCount}
							title={skill.title}
						/>
					))}
			</ScrollView>
		</View>
	);
}
