import { StyleSheet, Text, View } from "react-native";

export default function DiarioScreen() {
  return (
    <View style={styles.container}>
      <Text>Diario</Text>
      <Text>
        This is the Diario screen. You can add more screens to your app and keep
        the navigation structure similar to this one.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
