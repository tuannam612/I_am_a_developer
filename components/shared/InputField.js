import { StyleSheet, View, TextInput } from "react-native";
import Color from "../../constants/Color";

export default function InputField({ style, placeholder, value,onChangeText }) {
	const styles = StyleSheet.create({
		textInput: {},
		inputFieldContainer: {
			backgroundColor: Color.COLOR.TURQUOISE,
			borderRadius: 5,
			padding: "5%",
			width: "100%",
			marginVertical: "2%",
		},
	});
	return (
		<View style={[style, styles.inputFieldContainer]}>
			<TextInput
				placeholder={placeholder ? placeholder : ""}
				style={styles.textInput}
				placeholderTextColor={Color.COLOR.BLACK_TRANSPARENT}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
}
