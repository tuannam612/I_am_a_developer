import { View, Text, StyleSheet } from "react-native";
import CircularProgress, {
	ProgressRef,
} from "react-native-circular-progress-indicator";
import Color from "../../constants/Color";
import { useRef, useState, useEffect } from "react";
import { useStats } from "../../context/stats-context";

export default function AgeCircle() {
	const progressRef = useRef(ProgressRef);
	const { state, setAge } = useStats();
	function reAnimate() {
		progressRef.current.reAnimate();
		setAge();
	}

	return (
		<View style={styles.ageCircle}>
			<CircularProgress
				ref={(ref) => (progressRef.current = ref)}
				value={100}
				radius={60}
				duration={60000}
				progressValueColor={"transparent"}
				titleStyle={{ fontWeight: "bold" }}
				onAnimationComplete={reAnimate}
				inActiveStrokeColor={Color.COLOR.TURQUOISE}
				activeStrokeColor={Color.COLOR.LIGHT_PURPLE}
				circleBackgroundColor={Color.COLOR.LIGHT_GREEN}
			/>
			<Text style={styles.text}>{state.age}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	ageCircle: {
		height: 120,
		width: 120,
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
	text: {
		position: "absolute",
		fontSize: 30,
		fontWeight: "800",
		color: "black",
	},
});
