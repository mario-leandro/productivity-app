import AppHeader from "@/components/AppHeader";
import { colors } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <AppHeader />,
        tabBarActiveTintColor: colors.tertiary_colors.tertiary_900,
        // tabBarActiveBackgroundColor: colors.primary_colors.primary_100,
        tabBarInactiveTintColor: colors.muted,
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
