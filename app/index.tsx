import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Botao from "../components/Botao";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require("../assets/images/index.svg")} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.titulo}>CineApp</Text>
        <Text style={styles.descricao}>
          Seu catálogo interativo de filmes favoritos. Explore os maiores sucessos do cinema!
        </Text>

        <Botao
          texto="Acessar Catálogo"
          onPress={() => router.push("/catalogo")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141c2f",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#2f3a4c",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    maxWidth: 340,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
});