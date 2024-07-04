import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import Color from "../constants/Color";
import TopBar from "../components/shared/TopBar";
import ItemWithBadge from "../components/OccupationScreen/ItemWithBadge";
import FinanceDialogBox from "../components/FinanceScreen/FinanceDialogBox";
import HorizontalProgressBar from "../components/FinanceScreen/HorizontalProgressBar";
import { bills, houses } from "../data/financeData";
import CustomSwitch from "../components/shared/CustomSwitch";
import Item from "../components/shared/Item";

export default function FinanceScreen() {
	const [modalShown, setModalShown] = useState(false);
	const [selectedBill, setSelectedBill] = useState();
	const [isEnabled, setIsEnabled] = useState(true);

	const toggleSwitch = (newValue) => {
		setIsEnabled(newValue);
	};

	let houseCount = 1;
	let billCount = 0;

	const formatPrice = (price) => {
		if (price >= 1000) {
			return `${(price / 1000).toFixed(1)}K`;
		}
		return price;
	};

	function handleBillPress(job) {
		setModalShown(true);
		setSelectedBill(job);
	}

	function handleCloseBtnPress() {
		setModalShown(false);
	}

	const styles = StyleSheet.create({
		container: {
			alignItems: "center",
			flex: 1,
			backgroundColor: Color.COLOR.DARK_PURPLE,
		},
		billListTitle: {
			color: "white",
			fontSize: 30,
			fontWeight: "600",
			paddingVertical: "5%",
			backgroundColor: Color.COLOR.LIGHT_PURPLE,
			width: "100%",
			textAlign: "center",
		},
		scrollView: {
			alignItems: "center",
		},
	});
	return (
		<View style={styles.container}>
			{/* Adjust styling for Ios devices */}
			<SafeAreaView />

			<TopBar title={"Finance"} />
			<FinanceDialogBox
				onCloseBtnPress={handleCloseBtnPress}
				visible={modalShown}
				bill={selectedBill}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				bounces={false}
			>
				<Item
					title={"Bills auto-pay"}
					orderNumber={2}
					rightComponent={
						<CustomSwitch
							value={isEnabled}
							onValueChange={toggleSwitch}
							activeColor={Color.COLOR.DARK_PURPLE}
						/>
					}
				/>
				<Item
					title={"Time until next bill payment"}
					rightComponent={
						<HorizontalProgressBar
							progressContainerColor={Color.COLOR.LIGHT_GREEN}
							progressColor={Color.COLOR.DARK_PURPLE}
						/>
					}
					orderNumber={1}
				/>
				<Text style={styles.billListTitle}>House</Text>
				{houses.map((house) => (
					<ItemWithBadge
						orderNumber={houseCount++}
						key={houseCount}
						title={house.title}
						value={formatPrice(house.price)}
						onPress={() => handleBillPress(house)}
					/>
				))}
				<Text style={styles.billListTitle}>Bills</Text>
				{bills.map((bill) => (
					<ItemWithBadge
						orderNumber={billCount++}
						key={billCount + houseCount}
						title={bill.title}
						value={formatPrice(bill.price)}
						onPress={() => handleBillPress(bill)}
					/>
				))}
			</ScrollView>
		</View>
	);
}
