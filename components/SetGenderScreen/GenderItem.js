import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Color from "../../constants/Color";

export default function GenderItem({ gender, genderTitle, image, onPress }) {
	const styles = StyleSheet.create({
		pressable: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor:
				gender === genderTitle
					? Color.COLOR.DARK_PURPLE
					: Color.COLOR.BLACK_TRANSPARENT,
			borderRadius: 10,
			padding: "3%",
		},
		genderTitleContainer: {},
		genderTitle: {
			fontSize: 20,
			marginTop: "5%",
			color: "white",
			fontWeight: "bold",
		},
		image: {
			width: 135,
			height: 135,
		},
	});
	return (
		<Pressable
			style={styles.pressable}
			onPress={() => onPress(genderTitle)}
		>
			{image && (
				<Image
					source={image}
					resizeMode="cover"
					style={styles.image}
				/>
			)}
			<Text style={styles.genderTitle}>{genderTitle}</Text>
		</Pressable>
	);
}
