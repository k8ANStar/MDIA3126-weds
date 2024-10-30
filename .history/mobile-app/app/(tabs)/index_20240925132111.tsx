import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View class=>
			<h1 class="border-4 border-indigo-500/50 ...">Home Page</h1>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
		</View>
	);
}
