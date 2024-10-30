import { Link } from "expo-router";
import { View, Text, Sty } from "react-native";

export default function HomeScreen() {
	return (
		<View class="border border-gray-400 p-2 m-2 inline-block">
			<h1>Home Page</h1>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
		</View>
	);
}
