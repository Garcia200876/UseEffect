import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Exercício 1 – Mensagem de boas-vindas
function BoasVindas() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      window.alert('Seja muito bem-vindo ao nosso app!');
    } else {
      Alert.alert('Olá!', 'Seja muito bem-vindo ao nosso app!');
    }
  }, []); // array vazio: roda só uma vez, quando o componente carrega

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 1 – Mensagem inicial</Text>
      <Text style={styles.texto}>
        Essa mensagem de boas-vindas aparece só uma vez, quando a tela abre.
      </Text>
    </View>
  );
}

// Exercício 2 – Contador com monitoramento
function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('O valor do contador mudou!');
  }, [contador]); // roda sempre que "contador" mudar

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 2 – Contador</Text>
      <Text style={styles.valor}>{contador}</Text>
      <View style={styles.row}>
        <Button title="Menos 1" onPress={() => setContador(contador - 1)} />
        <Button title="Mais 1" onPress={() => setContador(contador + 1)} />
      </View>
    </View>
  );
}

// Exercício 3 – Alterando o título
function AlterarTitulo() {
  const [nome, setNome] = useState('');
  const [titulo, setTitulo] = useState('Oi, tudo bem?');

  useEffect(() => {
    const novoTitulo = nome.trim() ? `Oi, ${nome}! Tudo bem?` : 'Oi, tudo bem?';
    setTitulo(novoTitulo);

    // No navegador, também altera o título da aba
    if (Platform.OS === 'web') {
      document.title = novoTitulo;
    }
  }, [nome]); // roda sempre que "nome" mudar

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 3 – Título dinâmico</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva o seu nome aqui"
        value={nome}
        onChangeText={setNome}
      />
    </View>
  );
}

export default function App() {
  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.container}
    >
      <BoasVindas />
      <Contador />
      <AlterarTitulo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#1e293b' }, // fundo geral da tela
  container: { padding: 20, paddingTop: 60, gap: 16 },
  card: {
    backgroundColor: '#e0f2fe', // fundo dos cartões
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#0c4a6e' },
  texto: { color: '#0f172a' },
  valor: { fontSize: 40, textAlign: 'center', fontWeight: 'bold', color: '#0c4a6e' },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#0c4a6e' },
  input: {
    borderWidth: 1,
    borderColor: '#0284c7',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fffbeb', // fundo do campo de texto
  },
});
