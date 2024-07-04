import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import InputField from "../components/shared/InputField";
import Button from "../components/shared/Button";
import { onboardingScreensStyle } from "../constants/styles";
import { useState } from "react";
import GenderItem from "../components/SetGenderScreen/GenderItem";
import { useStats } from "../context/stats-context";

export default function SetGenderScreen({ navigation }) {
	const [gender, initialGender] = useState();
	const {state,setGender}=useStats();
	const maleImage = require("../assets/favicon.png");
	const femaleImage = require("../assets/favicon.png");

	function confirmSetGender() {
		if (gender) {
			setGender(gender);
			navigation.replace("HomeScreenStack");
		}
	}

	function selectGender(genderTitle) {
		if (genderTitle !== gender) {
			initialGender(genderTitle);
		} else initialGender(undefined);
	}

	return (
		<ScrollView contentContainerStyle={onboardingScreensStyle.scrollView}>
			<KeyboardAvoidingView
				style={onboardingScreensStyle.container}
				behavior="padding"
			>
				<View style={onboardingScreensStyle.titleContainer}>
					<Text style={onboardingScreensStyle.title}>
						Please choose the gender of your character
					</Text>
				</View>
				<View style={onboardingScreensStyle.rowContainer}>
					<GenderItem
						genderTitle={"Male"}
						gender={gender}
						onPress={selectGender}
						image={maleImage}
					/>
					<GenderItem
						genderTitle={"Female"}
						gender={gender}
						onPress={selectGender}
						image={femaleImage}
					/>
				</View>
				<Button
					enabled={gender}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}
					onPress={confirmSetGender}
				>
					Confirm
				</Button>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
