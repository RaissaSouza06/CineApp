import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { FILMES } from "./catalogo";
import Botao from "../components/Botao";

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const filme = FILMES.find((item) => item.id === id) || FILMES[0];

  const sourceImage = typeof filme.imagem === "string" ? { uri: filme.imagem } : filme.imagem;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={sourceImage} style={styles.imagem} resizeMode="cover" />
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.subtitulo}>{filme.genero} • {filme.ano}</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>

        <Botao
          texto="Voltar ao Catálogo"
          cor="#2563EB"
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
    padding: 20,
    alignItems: "center",
  },
  imagem: {
    width: 180,
    height: 260,
    borderRadius: 12,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 16,
    color: "#38BDF8",
    marginBottom: 16,
  },
  sinopse: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
});