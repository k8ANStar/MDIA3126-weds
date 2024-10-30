import { Link } from "expo-router";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function HomeScreen() {
	return (
		<View>
			<Text>Home Page</Text>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🥪</Link>
		</View>
	);
}
