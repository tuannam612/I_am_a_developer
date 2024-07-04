import { StyleSheet, View, Text, Modal } from "react-native";
import Color from "../../constants/Color";
import Button from "../shared/Button";

export default function CustomAlert({ onBtnPress, visible, title, message }) {
	const styles = StyleSheet.create({
		container: {
			justifyContent: "center",
			flex: 1,
			alignItems: "center",
			backgroundColor: "#0000006f",
		},
		innerContainer: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
			width: "90%",
			borderRadius: 20,
			paddingVertical: "3%",
		},
		title: {
			fontSize: 40,
			fontWeight: "bold",
			textAlign: "center",
			paddingHorizontal: "10%",
			marginVertical: "3%",
		},
		message: {
			fontSize: 30,
			marginVertical: "3%",
			fontWeight: "bold",
		},
		messageContainer: {
			justifyContent: "center",
			alignItems: "center",
			paddingVertical: "3%",
			paddingHorizontal: "5%",
			backgroundColor: Color.COLOR.TURQUOISE,
			borderRadius: 10,
			marginVertical: "3%",
			width: "85%",
		},
		button: {
			width: "75%",
			marginVertical: "3%",
		},
	});
	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			statusBarTranslucent={true}
		>
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					{title && <Text style={styles.title}>{title}</Text>}
					<View style={styles.messageContainer}>
						{message && <Text style={styles.message}>{message}</Text>}
					</View>
					<Button
						style={styles.button}
						enabled={true}
						onPress={onBtnPress}
					>
						OK
					</Button>
				</View>
			</View>
		</Modal>
	);
}
