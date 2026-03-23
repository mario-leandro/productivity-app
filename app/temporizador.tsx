import { StyleSheet, Text, View } from "react-native";

export default function TemporizadorScreen() {
  return (
    <View style={styles.container}>
      <Text>Temporizador</Text>
      <Text>
        This is the Temporizador screen. You can add more screens to your app
        and keep the navigation structure similar to this one.
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
