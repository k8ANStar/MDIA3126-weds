import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View class="m-2">
			<h1>Home Page</h1>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
			
		</View>
	);
}
