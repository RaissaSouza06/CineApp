import { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import FilmeCard from "../components/FilmeCard";
import Botao from "../components/Botao";

export const FILMES = [
  {
    id: "1",
    titulo: "Como Se Fosse a Primeira Vez",
    genero: "Comédia / Romance",
    ano: 2004,
    imagem: require("../assets/images/comoSeFosseAPrimeiraVez.jpg"),
    sinopse: "Henry Roth apaixona-se por Lucy, que sofre de amnésia de curto prazo, e tem de a reconquistar todos os dias."
  },
  {
    id: "2",
    titulo: "Gente Grande",
    genero: "Comédia",
    ano: 2010,
    imagem: require("../assets/images/genteGrande.jpg"),
    sinopse: "Cinco amigos de infância reúnem-se com as suas famílias no fim de semana de 4 de julho para recordar os velhos tempos."
  },
  {
    id: "3",
    titulo: "Um Maluco no Golfe",
    genero: "Comédia / Esporte",
    ano: 1996,
    imagem: require("../assets/images/umMalucoNoGolfe.jpg"),
    sinopse: "Um jogador de hóquei frustrado descobre que tem uma tacada fenomenal no golfe e entra num torneio profissional para salvar a casa da sua avó."
  },
  {
    id: "4",
    titulo: "Zohan: O Agente Bom de Corte",
    genero: "Comédia",
    ano: 2008,
    imagem: require("../assets/images/zohan.jpg"),
    sinopse: "Um agente secreto israelita simula a sua própria morte para poder mudar-se para Nova Iorque e realizar o seu sonho: tornar-se cabeleireiro."
  },
  {
    id: "5",
    titulo: "Esposa de Mentirinha",
    genero: "Comédia / Romance",
    ano: 2011,
    imagem: require("../assets/images/esposaDeMentirinha.jpg"),
    sinopse: "Um cirurgião plástico convence a sua assistente a fingir ser a sua ex-esposa para encobrir uma mentira contada à sua namorada."
  },
  {
    id: "6",
    titulo: "Click",
    genero: "Comédia",
    ano: 2006,
    imagem: require("../assets/images/click.jpg"),
    sinopse: "Um homem adquire um controle remoto mágico capaz de adiantar e pausar partes da vida."
  }
];

export default function Catalogo() {
  useEffect(() => {
    console.log("Catálogo carregado com sucesso!");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.esquerdaCabecalho}>
          <Pressable 
            style={({ pressed }) => [styles.btnVoltar, pressed && styles.pressionado]} 
            onPress={() => router.push("/")}
          >
            <Text style={styles.txtVoltar}>←</Text>
          </Pressable>
          <Text style={styles.titulo}>Catálogo</Text>
        </View>

        <Botao
          texto="Sobre"
          cor="#475569"
          onPress={() => router.push("/sobre")}
        />
      </View>

      <ScrollView contentContainerStyle={styles.lista}>
        {FILMES.map((filme) => (
          <FilmeCard
            key={filme.id}
            {...filme}
            onSelecionar={() =>
              router.push({
                pathname: "/detalhes",
                params: { id: filme.id },
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 16,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  esquerdaCabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  btnVoltar: {
    backgroundColor: "#334155",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  txtVoltar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  pressionado: {
    opacity: 0.7,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  lista: {
    paddingBottom: 24,
  },
});