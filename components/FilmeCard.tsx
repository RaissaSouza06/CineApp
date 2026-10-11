import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface FilmeProps {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  imagem: any; 
  sinopse: string;
  onSelecionar: () => void;
}

export default function FilmeCard({
  titulo,
  genero,
  ano,
  imagem,
  onSelecionar,
}: FilmeProps) {
  const [favorito, setFavorito] = useState(false);

  const sourceImage = typeof imagem === "string" ? { uri: imagem } : imagem;

  return (
    <View style={styles.card}>
      <Image source={sourceImage} style={styles.imagem} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalhe}>{genero} • {ano}</Text>

        <View style={styles.acoes}>
          <Pressable
            onPress={() => setFavorito(!favorito)}
            style={({ pressed }) => [
              styles.btnFavorito,
              pressed && styles.pressionado,
            ]}
          >
            <Text style={styles.txtFavorito}>
              {favorito ? "★ Favorito" : "☆ Favoritar"}
            </Text>
          </Pressable>

          <Pressable
            onPress={onSelecionar}
            style={({ pressed }) => [
              styles.btnDetalhes,
              pressed && styles.pressionado,
            ]}
          >
            <Text style={styles.txtDetalhes}>Detalhes</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  imagem: {
    width: 90,
    height: 130,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  detalhe: {
    fontSize: 14,
    color: "#94A3B8",
    marginBottom: 12,
  },
  acoes: {
    flexDirection: "row",
    gap: 8,
  },
  btnFavorito: {
    backgroundColor: "#334155",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  btnDetalhes: {
    backgroundColor: "#2563EB",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  pressionado: {
    opacity: 0.7,
  },
  txtFavorito: {
    color: "#FACC15",
    fontSize: 12,
    fontWeight: "bold",
  },
  txtDetalhes: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});