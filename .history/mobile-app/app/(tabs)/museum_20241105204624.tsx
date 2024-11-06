import DataDisplay from "@/components/molecules/DataDisplay";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View>
			<Text>Museum Artwork</Text>
			<Link href="/">Home 🏠</Link>
			<DataDisplay />
		</View>
	);
}
