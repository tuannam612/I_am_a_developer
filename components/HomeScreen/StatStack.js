import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Color from "../../constants/Color";
import { useStats } from "../../context/stats-context";

function StatLine({ title, number }) {
	let progressPercent = `${number}%`;
	return (
		<View style={styles.lineContainer}>
			<Text>{title}</Text>
			<View style={styles.progressContainer}>
				<View style={[styles.progress, { width: progressPercent }]}></View>
				<View style={styles.numberContainer}>
					<Text style={styles.number}>{number}</Text>
				</View>
			</View>
		</View>
	);
}
export default function StatStack() {
  const { state } = useStats();
    
    return (
      <View style={styles.container}>
        <StatLine title="Health" number={state.health} />
        <StatLine title="Happiness" number={state.happiness} />
        <StatLine title="Strength" number={state.strength} />
        <StatLine title="Intelligence" number={state.intelligence} />
        <StatLine title="Charisma" number={state.charisma} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 10,
    alignItems: 'center',
    paddingBottom: 30, 
    backgroundColor: Color.COLOR.LIGHT_GREEN,

  },
  lineContainer: {
    flexDirection: "row",
    width: 400,
    gap: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },
  progressContainer: {
    width: 270,
    borderRadius: 5,
    backgroundColor: Color.COLOR.TURQUOISE,
    borderWidth: 1,
    flexDirection: 'row',
},
  progress:{
    alignItems: 'center',
    backgroundColor: Color.COLOR.LIGHT_PURPLE,
    position: 'absolute',
    height: '100%',

  },
  numberContainer: {
    alignItems: 'center',
    flex: 1,
  },
});
