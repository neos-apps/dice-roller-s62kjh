import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  const [value, setValue] = useState<number>(rollDice);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tap the dice to roll</Text>
      <TouchableOpacity
        style={styles.dice}
        onPress={() => setValue(rollDice())}
        activeOpacity={0.7}
      >
        <Text style={styles.diceNumber}>{value}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 32,
    letterSpacing: 0.5,
  },
  dice: {
    width: 160,
    height: 160,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  diceNumber: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#222',
  },
});
