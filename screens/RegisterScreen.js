
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
import { signup } from "../util/auth";
import { useState } from "react";
import { emailPattern, passwordPattern } from "../constants/pattern";

import CustomAlert from "../components/shared/CustomAlert";



export default function RegisterScreen({ navigation }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [reenterPassword, setReenterPassword] = useState();

	const [alertShown, setAlertShown] = useState(false);
	const [alertTitle, setAlertTitle] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	function closeAlert() {
		setAlertShown(false);
	}

	async function handleRegisterBtnPress() {
		if (!emailPattern.test(email)) {
			setAlertMessage("Please enter a valid email");
			setAlertShown(true);
			// Alert.alert("Please enter a valid email");
		} else if (!passwordPattern.test(password)) {
			setAlertMessage(
				"A password must contain at least 6 characters with 1 capital letter and 1 non-capital letter"
			);
			setAlertShown(true);
			// Alert.alert("A password must contain at least 6 characters with 1 capital letter and 1 non-capital letter");
		} else if (password !== reenterPassword) {
			setAlertMessage("Re-entered password does not match");
			setAlertShown(true);
			// Alert.alert("Re-enter password does not match");

		} else {
			try {
				const response = await signup(email, password);
				// If none of the conditions above were met and no error occurred during signup, proceed with navigation
				navigation.replace("Login");
			} catch (error) {
				// Handle error response from signup

				if (error.response.data.error.message == "EMAIL_EXISTS") {
					setAlertTitle("Signup failed");
					setAlertMessage(
						"Your email is already existed. Please use another email or log in"
					);
					setAlertShown(true);
					// Alert.alert(
					// 	"Signup failed",
					// 	"Your email is already existed. Please use another email or log in"
					// );
				}

			}
		}
	}
	function handleLoginBtnPress() {
		navigation.replace("Login");
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
				<InputField
					placeholder={"Re-enter password"}
					onChangeText={(value) => setReenterPassword(value)}
				/>

				<Button
					enabled={true}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}
					onPress={() => handleRegisterBtnPress()}
				>
					Register
				</Button>
				<Text style={onboardingScreensStyle.secondaryText}>
					{"\n"}Already have an account?
				</Text>
				<Button
					enabled={true}
					style={onboardingScreensStyle.outerBtnContainer}
					btnTextStyle={onboardingScreensStyle.btnText}
					onPress={handleLoginBtnPress}
				>
					Login
				</Button>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
