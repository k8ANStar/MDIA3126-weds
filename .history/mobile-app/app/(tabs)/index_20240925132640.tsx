import { Link } from "expo-router";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function HomeScreen() {
	return (
		<View>
			<Text
				style={tailwind("border border-gray-400 p-2 m-2 text-lg font-bold")}
			>
				Home Page
			</Text>
			<Link href="/cheese" style={tailwind("text-blue-500")}>
				Cheese 🧀
			</Link>
			<Link href="/sandwich" style={tailwind("text-blue-500")}>
				Sandwich 🥪
			</Link>
		</View>
	);
}
