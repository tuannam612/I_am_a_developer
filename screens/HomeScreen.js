import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import StatStack from "../components/HomeScreen/StatStack";
import { SafeAreaView } from "react-native-safe-area-context";
import MoneyBlock from "../components/HomeScreen/MoneyBlock";
import NavigationBar from "../components/HomeScreen/NavigationBar";
import Color from "../constants/Color";
import { useStats } from "../context/stats-context";

export default function HomeScreen() {
	const {
		state,
		incrementStat,
		decrementStat,
		addFriend,
		removeFriend,
		addDate,
		removeDate,
		setName,
		setGender,
		setAge,
	} = useStats();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.centerContainer}>
				<MoneyBlock money={state.money} />
			</View>
			<View style={styles.navigationContainer}>
				<NavigationBar />
			</View>
			<StatStack />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	centerContainer: {
		flex: 1,
		backgroundColor: "lightblue",
	},

	navigationContainer: {
		backgroundColor: Color.COLOR.LIGHT_GREEN,
	},
	statContainer: {
		flex: 1,
	},
});
