import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Modal } from "react-native";
import Color from "../../constants/Color";
import Button from "../shared/Button";
import CloseButton from "../shared/CloseButton";

export default function FinanceDialogBox({ onCloseBtnPress, visible, bill }) {
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
		billTitle: {
			fontSize: 40,
			fontWeight: "bold",
			textAlign: "center",
			paddingHorizontal: "10%",
			marginBottom: "3%",
			marginTop: "10%",
		},
		price: {
			fontSize: 30,
			marginVertical: "3%",
			fontWeight: "bold",
		},
		levelSalaryContainer: {
			justifyContent: "center",
			alignItems: "center",
			paddingVertical: "3%",
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
					<CloseButton onPress={onCloseBtnPress} />
					<Text style={styles.billTitle}>{bill && bill.title}</Text>
					<View style={styles.levelSalaryContainer}>
						<Text style={styles.price}>Price: ${bill && bill.price}</Text>
					</View>
					<Button
						style={styles.button}
						enabled={bill && bill.price < 300}
					>
						Pay
					</Button>
				</View>
			</View>
		</Modal>
	);
}
