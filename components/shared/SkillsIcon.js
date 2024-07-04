import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PressableOpacityWrapper from "./PressableOpacityWrapper";

export default function SkillsIcon() {
	const navigation = useNavigation();
	return (
		<PressableOpacityWrapper
			onPress={() => {
				navigation.navigate("Skills");
			}}
		>
			<MaterialCommunityIcons
				name="card-account-details"
				size={34}
				color={"white"}
			/>
		</PressableOpacityWrapper>
	);
}
