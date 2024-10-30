import { Tabs } from "expo-router";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: true,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "🏠",
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome5 name="grin-hearts" size={24} color="black" />
					),
				}}
			/>
			<Tabs.Screen
				name="cheese"
				options={{
					title: "🧀",
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome5 name="smile" size={24} color="black" />
					),
				}}
			/>
			<Tabs.Screen
				name="sandwich"
				options={{
					title: "🥪",
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome5 name="meh" size={24} color="black" />
					),
				}}
			/>
			    <Tabs.Screen
        name="api"
        name="camera"
        options={{
       
          title: 'Camera',
          tabBarIcon: ({ focused }) => (
           
            <TabBarIcon emoji="🤳" focused={focused} />
          ),
        }}
      />
		</Tabs>
	);
}
