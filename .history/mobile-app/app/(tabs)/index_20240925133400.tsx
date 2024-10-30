import { Link } from "expo-router";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn"; // Ensure this is correct

export default function HomeScreen() {
	return (
		<View>
			<Text style={tailwind("border border-gray-400 p-2 m-2")}>Home Page</Text>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🥪</Link>
		</View>
	);
}
