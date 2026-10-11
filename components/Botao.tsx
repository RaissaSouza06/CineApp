import { Pressable, Text, StyleSheet } from "react-native";

interface BotaoProps {
  texto: string;
  onPress: () => void;
  cor?: string;
}

export default function Botao({ texto, onPress, cor = "#2563EB" }: BotaoProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        { backgroundColor: cor },
        pressed && styles.botaoPressionado,
      ]}
    >
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  botaoPressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});