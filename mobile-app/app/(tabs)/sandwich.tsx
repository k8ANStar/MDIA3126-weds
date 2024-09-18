import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View>
			<Text>Sandwich Page: BLT 🥪</Text>
			<Link href="/cheese">Cheese 🧀</Link>
			<Link href="/">Home 🏠</Link>
		</View>
	);
}