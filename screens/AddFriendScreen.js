import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import SocialItem from "../components/SocialScreen/SocialItem";
import { npcs } from "../data/societyData";

export default function AddFriendScreen() {
	let strangerCount = 1;

	function handleSocialBtnPress(label, person) {
		if (label === "Add") {
		}
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
			<TopBar title={"Add Friends"} />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				{/* <Text style={styles.sectionTitle}>Friends</Text> */}
				{npcs &&
					npcs.map((person) => (
						<SocialItem
							orderNumber={strangerCount++}
							key={strangerCount}
							personObject={person}
							onBtnPress={handleSocialBtnPress}
							screen={"AddFriend"}
						/>
					))}
			</ScrollView>
		</View>
	);
}
