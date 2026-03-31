import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.apresentacao}>
        <Text style={styles.apresentacaoText}>Olá, Mario!</Text>
      </View>

      <View style={styles.content}>
        <Text>Qual das opções vai utilizar agora?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apresentacao: {
    width: 100,
    height: 60,
    // backgroundColor: "#eee",
  },
  apresentacaoText: {
    fontSize: 24,
    padding: 10,
  },
  content: {
    width: 100,
    height: 80,
    backgroundColor: "#ccc",
  },
});
