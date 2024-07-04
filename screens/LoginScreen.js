
import {
	View,
	Text,
	KeyboardAvoidingView,
	ScrollView,
	Alert,
} from "react-native";

import InputField from "../components/shared/InputField";
import Button from "../components/shared/Button";
import { onboardingScreensStyle } from "../constants/styles";
import { emailPattern, passwordPattern } from "../constants/pattern";
import { useState } from "react";
import { login } from "../util/auth";
import CustomAlert from "../components/shared/CustomAlert";
import { fetchCharacterData } from "../util/http";
import { useStats } from "../context/stats-context";
import { set } from "firebase/database";
export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [alertTitle, setAlertTitle] = useState();
	const [alertMessage, setAlertMessage] = useState();
	const [alertShown, setAlertShown] = useState(false);
	const {data, setData} = useStats();
	function closeAlert() {
		setAlertShown(false);
	}
	function handleRegisterBtnPress() {
		navigation.replace("Register");
	}


	async function handleLoginBtnPress() {

		if (!emailPattern.test(email)) {
			setAlertTitle("Invalid input");
			setAlertMessage("Please enter a valid email");
			setAlertShown(true);
		} else if (!passwordPattern.test(password)) {
			setAlertTitle("Invalid input");
			setAlertMessage("Please enter a valid password");
			setAlertShown(true);
		} else {
			try {
				const respone = await login(email, password);
				let parts = email.split("@");
				const charResponse = await fetchCharacterData(parts[0]);
				if (charResponse) {
					console.log(charResponse)
					const parsedData = {
						...charResponse,
						name: charResponse.name,
						gender: charResponse.gender,
						age: parseInt(charResponse.age),
						money: parseInt(charResponse.money),
						health: parseInt(charResponse.health),
						happiness: parseInt(charResponse.happiness),
						strength: parseInt(charResponse.strength),
						intelligence: parseInt(charResponse.intelligence),
						charisma: parseInt(charResponse.charisma),
						friends: Object.keys(charResponse.friends),
						dating: charResponse.dating,
						skills: Object.keys(charResponse.skills),
						fullTimeJobs: charResponse.fullTimeJobs,
						partTimeJobs: Object.keys(charResponse.partTimeJobs),
					};
					setData(parsedData)
					navigation.replace("HomeScreenStack");
				}
				else navigation.replace("SetName");
			} catch (error) {
				console.log(error);
				setAlertTitle("Login failed");
				setAlertMessage("Your email or password is incorrect. Please try again later!");
				setAlertShown(true);
			}
		}

	}
	return (
		<ScrollView contentContainerStyle={onboardingScreensStyle.scrollView}>
			<KeyboardAvoidingView
				style={onboardingScreensStyle.container}
				behavior="padding"
			>

				<CustomAlert
					title={alertTitle}
					message={alertMessage}
					visible={alertShown}
					onBtnPress={closeAlert}
				/>

				<View style={onboardingScreensStyle.titleContainer}>
					<Text style={onboardingScreensStyle.title}>I AM</Text>
					<Text style={onboardingScreensStyle.title}>A DEVELOPER</Text>
				</View>

				<InputField
					placeholder={"Email"}
					onChangeText={(value) => setEmail(value)}
				/>
				<InputField
					placeholder={"Password"}
					onChangeText={(value) => setPassword(value)}
				/>

				<Button
					enabled={true}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}

					//trigger login function whenever press the button

					onPress={() => handleLoginBtnPress()}

				>
					Login
				</Button>
				<Text style={onboardingScreensStyle.secondaryText}>
					{"\n"}Don't have an account?
				</Text>
				<Button
					enabled={true}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}
					onPress={handleRegisterBtnPress}
				>
					Register
				</Button>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
