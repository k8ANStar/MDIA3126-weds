import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View>
			<h1>Home Page</h1>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
			<div class="border-4 border-indigo-500/100 ..."></div>
			<div class="border-4 border-indigo-500/75 ..."></div>
			<div class="border-4 border-indigo-500/50 ..."></div>
		</View>
	);
}
