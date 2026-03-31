import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.avatar}
        />
      </View>

      <TouchableOpacity style={styles.settingsButton}>
        <FontAwesome name="cog" size={22} color="#111827" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  settingsButton: {
    padding: 8,
  },
});
