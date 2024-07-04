import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OccupationScreen from "../screens/OccupationScreen";
import FinanceScreen from "../screens/FinanceScreen";
import SocialScreen from "../screens/SocialScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import StudyScreen from "../screens/StudyScreen";
import SkillsScreen from "../screens/SkillsScreen";
import EntertainmentScreen from "../screens/EntertainmentScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SetNameScreen from "../screens/SetNameScreen";
import SetGenderScreen from "../screens/SetGenderScreen";
import { StatsProvider } from "../context/stats-context";
import { NavigationContainer } from "@react-navigation/native";


export default function Navigator() {
	const Stack = createNativeStackNavigator();

	function OnboardingScreenStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
				/>

				<Stack.Screen
					name="SetName"
					component={SetNameScreen}
				/>
				<Stack.Screen
					name="SetGender"
					component={SetGenderScreen}
				/>
				<Stack.Screen
					name="HomeScreenStack"
					component={HomeScreenStack}
				/>

			</Stack.Navigator>
		);
	}

	function OccupationScreenStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Occupation"
					component={OccupationScreen}
				/>
				<Stack.Screen
					name="Skills"
					component={SkillsScreen}
				/>
				<Stack.Screen
					name="OnboardingScreenStack"
					component={OnboardingScreenStack}
				/>
			</Stack.Navigator>
		);
	}

	function SocialScreenStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Social"
					component={SocialScreen}
				/>
				<Stack.Screen
					name="AddFriend"
					component={AddFriendScreen}
				/>
			</Stack.Navigator>
		);
	}

	function ActivitiesScreenStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Activities"
					component={ActivitiesScreen}
				/>
				<Stack.Screen
					name="Study"
					component={StudyScreen}
				/>
				<Stack.Screen
					name="Occupation"
					component={OccupationScreen}
				/>
				<Stack.Screen
					name="Skills"
					component={SkillsScreen}
				/>
				<Stack.Screen
					name="Entertainment"
					component={EntertainmentScreen}
				/>
			</Stack.Navigator>
		);
	}


	function HomeScreenStack() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="OccupationScreenStack"
					component={OccupationScreenStack}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Finance"
					component={FinanceScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SocialScreenStack"
					component={SocialScreenStack}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ActivitiesScreenStack"
					component={ActivitiesScreenStack}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		);
	}

	return <OnboardingScreenStack />;

}
