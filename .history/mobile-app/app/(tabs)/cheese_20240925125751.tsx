import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View >
			<Text>Cheese Page 🧀</Text>
			<Link href="/" asChild>
				<Pressable>
					<Text>Home</Text>
				</Pressable>
			</Link>

			<Link href="/sandwich">Sandwich 🥪</Link>
			<Link href="/">Home 🏠</Link>
		</View>
	);
}
