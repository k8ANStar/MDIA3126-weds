import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View >
			<h1 class="border border-gray-400 p-2 m-2 inline-block">Home Page</h1>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
		</View>
	);
}
