import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View class="m-2">
			<h1>Home Page</h1>
			<Link href="/cheese">
				Cheese 🧀
			</Link>
			<Link href="/sandwich">Sandwich 🏠</Link>
			<button class="outline outline-2 outline-offset-2 ...">Button A</button>
			<button class="outline-dashed outline-2 outline-offset-2 ...">
				Button B
			</button>
			<button class="outline-dotted outline-2 outline-offset-2 ...">
				Button C
			</button>
			<button class="outline-double outline-3 outline-offset-2 ...">
				Button D
			</button>
		</View>
	);
}
