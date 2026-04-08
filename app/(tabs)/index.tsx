import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const arrOptions = [
    { id: 1, name: "Lista de Tarefas" },
    { id: 2, name: "Foco" },
    { id: 3, name: "Diário" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.apresentacao}>
        <Text style={styles.apresentacaoText}>Olá, Mario!</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Qual das opções vai utilizar agora?</Text>
        </View>

        <View style={styles.options}>
          {arrOptions.map((option) => (
            <View style={styles.card} key={option.id}>
              <Text>{option.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apresentacao: {
    width: "100%",
    height: 80,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  apresentacaoText: {
    fontSize: 30,
  },
  content: {
    width: "100%",
    // height: "100%",
    // backgroundColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  options: {
    width: "100%",
    height: 200,
    // backgroundColor: "#ddd",
    marginTop: 12,
    padding: 8,
  },
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
