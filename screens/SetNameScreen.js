import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import InputField from "../components/shared/InputField";
import Button from "../components/shared/Button";
import { onboardingScreensStyle } from "../constants/styles";
import { useStats } from "../context/stats-context";
import { useState } from "react";
export default function SetNameScreen({ navigation }) {
	const {state,setName}=useStats();
	const [name,initialName]=useState();
	function confirmSetName() {
		setName(name);
		navigation.navigate("SetGender");
	}
	return (
		<ScrollView contentContainerStyle={onboardingScreensStyle.scrollView}>
			<KeyboardAvoidingView
				style={onboardingScreensStyle.container}
				behavior="padding"
			>
				<View style={onboardingScreensStyle.titleContainer}>
					<Text style={onboardingScreensStyle.title}>
						Please enter the name of your character
					</Text>
				</View>
				<InputField placeholder={"Name"} 
				onChangeText={(value)=>initialName(value)}
				/>
				<Button
					enabled={true}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}
					onPress={confirmSetName}
				>
					Confirm
				</Button>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
