import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View className="border-black">
			<button class="outline outline-offset-2 outline-blue-500 ...">
				Button A
			</button>

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
