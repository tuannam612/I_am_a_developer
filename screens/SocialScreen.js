import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import SocialItem from "../components/SocialScreen/SocialItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { friends, lovers } from "../data/societyData";
import PressableOpacityWrapper from "../components/shared/PressableOpacityWrapper";

export default function SocialScreen({ navigation }) {
	let friendCount = 1;
	let loverCount = 1;

	function handleSocialBtnPress() {
		// update trạng thái mối quan hệ dựa trên state hiện tại của mối quan hệ
	}

	function AddFriendIcon() {
		return (
			<PressableOpacityWrapper
				onPress={() => {
					navigation.navigate("AddFriend");
				}}
			>
				<MaterialCommunityIcons
					name="account-plus"
					size={34}
					color={"white"}
				/>
			</PressableOpacityWrapper>
		);
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
		pressed: {
			opacity: 0.75,
		},
	});
	return (
		<View style={styles.container}>
			{/* Adjust styling for Ios devices */}
			<SafeAreaView />
			<TopBar
				title={"Social"}
				rightIcon={AddFriendIcon}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				<Text style={styles.sectionTitle}>Friends</Text>
				{friends &&
					friends.map((friend) => (
						<SocialItem
							orderNumber={friendCount++}
							key={friendCount}
							personObject={friend}
							onBtnPress={handleSocialBtnPress}
							screen={"Social"}
						/>
					))}
				<Text style={styles.sectionTitle}>Dating</Text>
				{lovers &&
					lovers.map((lover) => (
						<SocialItem
							orderNumber={loverCount++}
							key={loverCount + friendCount}
							personObject={lover}
							onBtnPress={handleSocialBtnPress}
							screen={"Social"}
						/>
					))}
			</ScrollView>
		</View>
	);
}
