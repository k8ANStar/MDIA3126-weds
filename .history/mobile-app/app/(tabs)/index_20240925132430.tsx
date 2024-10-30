import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import tailwind from 

export default function HomeScreen() {
	return (
		<View>
			<Text class="border border-gray-400 p-2 m-2 inline-block">
				<h1>Home Page</h1>
			</Text>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
		</View>
	);
}
