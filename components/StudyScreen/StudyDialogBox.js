import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Pressable,
	Modal,
	Dimensions,
	Animated,
	ScrollView,
} from "react-native";
import Color from "../../constants/Color";
import Button from "../shared/Button";
import CloseButton from "../shared/CloseButton";
import SkillBadge from "../shared/SkillBadge";
import CourseBadge from "../shared/CourseBadge";

const { width } = Dimensions.get("window");

export default function StudyDialogBox({
	onCloseBtnPress,
	visible,
	studyItem,
}) {
	const [currentPage, setCurrentPage] = useState(0);
	const [scrollEventFromClick, setScrollEventFromClick] = useState(false);
	const [previousPosition, setPreviousPosition] = useState(0);

	const scrollX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setCurrentPage(0);
	}, [visible]);

	const handlePageChange = (event) => {
		setScrollEventFromClick(false);
		if (!scrollEventFromClick) {
			const contentOffsetX = event.nativeEvent.contentOffset.x;
			const middleScrollPosition = 0.5; // Middle scroll position
			const currentPosition = contentOffsetX / (width * 0.5);
			let direction = "right";

			if (currentPosition !== previousPosition) {
				const newPageIndex = Math.floor(currentPosition);
				const crossedMiddle =
					direction === "right"
						? currentPosition >= middleScrollPosition
						: currentPosition < middleScrollPosition;

				if (crossedMiddle && newPageIndex !== currentPage) {
					setCurrentPage(newPageIndex);
				}
			}
			if (currentPosition === 0) {
				setCurrentPage(0);
			}
			// Determine scroll direction
			direction = currentPosition > previousPosition ? "right" : "left";
			setPreviousPosition(currentPosition);
		}
	};

	const handleIndexClick = (pageIndex) => {
		setScrollEventFromClick(true);
		scrollViewRef.current.scrollTo({
			x: pageIndex * width,
			animated: true,
		});
	};

	const isPrerequisiteCoursesValid = studyItem?.prerequisiteCourses?.length > 0;
	const isSkillsRequiredValid = studyItem?.skillsRequired?.length > 0;
	const isSkillTypeValid = studyItem?.skillType?.length > 0;

	const scrollViewRef = useRef();
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
			shadowColor: "#000000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 8,
		},
		blueishContainer: {
			backgroundColor: Color.COLOR.TURQUOISE,
			padding: "4%",
			width: "85%",
			borderRadius: 15,
		},
		studyItemInfoContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "baseline",
			flexWrap: "wrap",
		},
		title: {
			fontSize: 40,
			fontWeight: "bold",
			textAlign: "center",
			paddingHorizontal: "10%",
			marginBottom: "3%",
			marginTop: "10%",
		},
		requirement: {
			fontSize: 25,
			marginVertical: "5%",
			fontWeight: "bold",
			alignSelf: "flex-start",
			paddingHorizontal: "10%",
		},
		detailText: {
			fontSize: 20,
			marginVertical: "3%",
			fontWeight: "bold",
		},
		button: {
			width: "75%",
			marginBottom: "3%",
			marginTop: "6%",
		},
		multipleStatsContainer: {
			flexDirection: "row",
			alignItems: "baseline",
			flexWrap: "wrap",
			columnGap: 10,
		},
		dotContainer: {
			flexDirection: "row",
			justifyContent: "center",
			marginTop: 15,
		},
		dot: {
			width: 10,
			height: 10,
			borderRadius: 5,
			backgroundColor: Color.COLOR.DARK_PURPLE,
			marginHorizontal: 5,
		},
		activeDot: {
			backgroundColor: Color.COLOR.TURQUOISE,
		},
		scrollView: {
			flexDirection: "row",
		},
		pageContainer: {
			width: width * 0.9,
			alignItems: "center",
			justifyContent: "flex-start",
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
					<Text style={styles.title}>{studyItem && studyItem.title}</Text>
					<ScrollView
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						onScroll={(event) => {
							Animated.event(
								[{ nativeEvent: { contentOffset: { x: scrollX } } }],
								{ useNativeDriver: false }
							)(event);
							handlePageChange(event);
						}}
						scrollEventThrottle={16}
						ref={scrollViewRef}
					>
						<View style={styles.pageContainer}>
							<Text style={styles.requirement}>Requirements</Text>
							<View style={styles.blueishContainer}>
								<View style={styles.studyItemInfoContainer}>
									<Text style={styles.detailText}>Intelligence:</Text>
									<Text style={styles.detailText}>
										{studyItem && studyItem.intelligenceRequired}
									</Text>
								</View>
								<View style={styles.studyItemInfoContainer}>
									<Text style={styles.detailText}>Time:</Text>
									<Text style={styles.detailText}>
										{studyItem && studyItem.timeRequired}
									</Text>
								</View>
								<View style={styles.multipleStatsContainer}>
									{isSkillsRequiredValid && (
										<Text style={styles.detailText}>Skills:</Text>
									)}
									{isSkillsRequiredValid &&
										studyItem.skillsRequired.map((skill) => (
											<SkillBadge
												key={skill}
												title={skill}
											/>
										))}
								</View>
								<View style={styles.multipleStatsContainer}>
									{isPrerequisiteCoursesValid && (
										<Text style={styles.detailText}>Prerequisite Courses:</Text>
									)}
									{isPrerequisiteCoursesValid &&
										studyItem.prerequisiteCourses.map((course) => (
											<CourseBadge
												title={course}
												key={course}
											/>
										))}
								</View>
							</View>
						</View>
						<View style={styles.pageContainer}>
							<Text style={styles.requirement}>Gains</Text>
							<View style={styles.blueishContainer}>
								<View style={styles.studyItemInfoContainer}>
									<Text style={styles.detailText}>Intelligence:</Text>
									<Text style={styles.detailText}>
										{studyItem && studyItem.intelligenceGained}
									</Text>
								</View>
								<View style={styles.multipleStatsContainer}>
									{isSkillTypeValid && (
										<Text style={styles.detailText}>Skills:</Text>
									)}
									{isSkillTypeValid && (
										<SkillBadge
											title={studyItem.skillType}
											key={studyItem.skillType}
										/>
									)}
								</View>
							</View>
						</View>
					</ScrollView>
					<View style={styles.dotContainer}>
						<Pressable onPress={() => handleIndexClick(0)}>
							<View
								style={[styles.dot, currentPage === 0 && styles.activeDot]}
							/>
						</Pressable>
						<Pressable onPress={() => handleIndexClick(1)}>
							<View
								style={[styles.dot, currentPage === 1 && styles.activeDot]}
							/>
						</Pressable>
					</View>
					<Button
						style={styles.button}
						enabled={studyItem && !studyItem.isFinished}
					>
						Enrol
					</Button>
				</View>
			</View>
		</Modal>
	);
}
