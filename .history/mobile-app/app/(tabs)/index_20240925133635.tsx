import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
	return (
		<View>
			<Text style={styles.borderStyle}>Home Page</Text>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🥪</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	borderStyle: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 8,
		margin: 8,
	},
});
