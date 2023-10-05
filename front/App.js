import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GestionarProducto from './componenentes/producto/GestionarProducto';

export default function App() {
  return (
    <View style={styles.container}>
      <GestionarProducto></GestionarProducto>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
