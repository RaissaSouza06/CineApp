import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Botao from "../components/Botao";

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Sobre o CineApp</Text>
        
        <View style={styles.item}>
          <Text style={styles.label}>Disciplina:</Text>
          <Text style={styles.valor}>Programação para Dispositivos Móveis I</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Instituição:</Text>
          <Text style={styles.valor}>Fatec Registro</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Finalidade:</Text>
          <Text style={styles.valor}>
            Projeto prático de catálogo de filmes para avaliação dos conceitos fundamentais de React Native, Expo Router, Estados e Componentização.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Versão:</Text>
          <Text style={styles.valor}>1.0.0</Text>
        </View>

        <Botao
          texto="Voltar ao Catálogo"
          onPress={() => router.back()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#38BDF8",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#94A3B8",
    fontWeight: "bold",
  },
  valor: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 2,
  },
});