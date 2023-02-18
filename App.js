import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Alert,
	Image,
	SafeAreaView,
	TouchableWithoutFeedback,
	Button,
	Platform,
	Dimensions,
	ScrollView,
} from "react-native";
import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";

const Separator = () => <View style={styles.separator} />;
export default function App() {
	// console.log(Dimensions.get("screen"))
	const { landscape } = useDeviceOrientation();
	return (
		// <View
		// 	style={{
		// 		backgroundColor: "red",
		// 		width: "100%",
		// 		height: "100%",
		// 		flex: 1,
		// 	}}
		// >
		// 	<View style={{ backgroundColor: "blue", flex: 1 }} />
		// 	<View style={{ backgroundColor: "yellow", flex: 1 }} />
		// 	<View style={{ backgroundColor: "orange", flex: 1 }} />
		// </View>
		<ScrollView>
		<SafeAreaView style={styles.container}>
			<Text>Hello World!!</Text>
			<Text>Open up App.js to start working on your app!</Text>
			{/* <Image
		  style={styles.tinyLogo}
		  source={require('./assets/david.jpg')}/> */}
			<TouchableWithoutFeedback onPress={() => console.log("Image Touched")}>
				<Image
					style={styles.logo}
					source={{
						width: "100%",
						height: 300,
						uri: "https://picsum.photos/200/300",
					}}
				/>
			</TouchableWithoutFeedback>

			{/* <StatusBar style="auto" /> */}
			<View>
				<Text style={styles.title}>
					The title and onPress handler are required. It is recommended to set
					accessibilityLabel to help make your app usable by everyone.
				</Text>
				<Button
					title="Click me"
					color="#841584"
					accessibilityLabel="Learn more about this purple button"
					onPress={() =>
						Alert.alert("My Alert", "Simple Button pressed", [
							{ text: "Yes", onPress: () => console.log("Yes") },
							{ text: "No", onPress: () => console.log("No") },
						])
					}
				></Button>
			</View>
			<Separator />
			<View style ={{
		    backgroundColor: "black",
		    width: "100%",
		    height: landscape ? "100%" : "30%",
		    marginTop: 10,
		    marginLeft: 0,
		    padding: 6,
		  }}>
				<Text style={{color: "white", fontSize: 16, textAlign: "center"}}>hello there </Text>
			</View>
		</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		// justifyContent: "center",

		padding: Platform.OS === "android" ? 10 : 0,
		paddingTop: Platform.OS === "android" ? 50 : 0,
		// paddingTop: Platform.OS === "android" ? StatusBar.Height : 0,
		tinyLogo: {
			width: 10,
			height: 10,
		},
		logo: {
			width: 66,
			height: 58,
		},
		title: {
			textAlign: "center",
			marginVertical: 8,
		},
		separator: {
			marginVertical: 8,
			borderBottomColor: "#737373",
			borderBottomWidth: StyleSheet.hairlineWidth,
		},
	},
});
