import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigation/Navigator";
import { StatsProvider, useStats } from "./context/stats-context";

export default function App() {
	return (
		<StatsProvider>
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</StatsProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
