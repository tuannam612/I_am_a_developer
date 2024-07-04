import { StyleSheet, View, Text, Pressable } from "react-native";
import Color from "../../constants/Color";
import { useEffect, useState } from "react";

export default function SocialItem({
	orderNumber,
	personObject,
	onBtnPress,
	screen,
}) {
	const [buttonLabel, setButtonLabel] = useState("");
	const [socialBtnBgColor, setSocialBtnBgColor] = useState("white");
	const [socialBtnTextColor, setSocialBtnTextColor] = useState("black");

	useEffect(() => {
		if (screen === "Social") {
			if (personObject.isFriend) {
				setButtonLabel("Date");
			}
			if (personObject.isDating) {
				setButtonLabel("Dating");
				setSocialBtnTextColor("white");
				setSocialBtnBgColor(Color.COLOR.LIGHT_PURPLE);
			}
			if (personObject.isBreakup) {
				setButtonLabel("Broke up");
				setSocialBtnBgColor("lightgrey");
				setSocialBtnTextColor("grey");
			}
			if (
				!personObject.isFriend &&
				!personObject.isDating &&
				!personObject.isBreakup
			) {
				setButtonLabel("Add");
			}
		}
		if (screen === "AddFriend") {
			if (personObject.isFriend) {
				setButtonLabel("Added");
				setSocialBtnTextColor("white");
				setSocialBtnBgColor(Color.COLOR.LIGHT_PURPLE);
			} else if (personObject.isBreakup) {
				setButtonLabel("Broke up");
				setSocialBtnTextColor("grey");
				setSocialBtnBgColor("lightgrey");
			} else {
				setButtonLabel("Add");
			}
		}
	}, []);

	const styles = StyleSheet.create({
		container: {
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor:
				orderNumber % 2 === 0 ? Color.COLOR.LIGHT_GREEN : Color.COLOR.TURQUOISE,
			flexDirection: "row",
			width: "100%",
			paddingHorizontal: "5%",
			paddingVertical: "3%",
		},
		btnContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: socialBtnBgColor,
			paddingVertical: "4%",
			paddingHorizontal: "4%",
			borderRadius: 10,
		},
		activeBtnContainer: {
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
		},
		personName: {
			fontSize: 20,
		},
		btnText: {
			fontSize: 25,
			color: socialBtnTextColor,
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.personName}>{personObject.name}</Text>
			<Pressable onPress={() => onBtnPress(buttonLabel, personObject)}>
				<View style={styles.btnContainer}>
					<Text style={styles.btnText}>{buttonLabel}</Text>
				</View>
			</Pressable>
		</View>
	);
}
