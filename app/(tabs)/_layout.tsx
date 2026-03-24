import { colors } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarActiveBackgroundColor: "#869674",
        tabBarInactiveTintColor: colors.tertiary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarefas"
        options={{
          title: "Tarefas",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="foco"
        options={{
          title: "Foco",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diario"
        options={{
          title: "Diário",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
