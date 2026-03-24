import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "@app/tasks";

export async function saveTasks(tasks: any[]) {
  await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export async function getTasks() {
  const data = await AsyncStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}
