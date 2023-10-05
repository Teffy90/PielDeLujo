import { StyleSheet, Text, View, Button } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';
import React from 'react'

export default function GestionarProducto() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Gestionar Producto"}
            </Text>
            <Text style={{ fontSize: 16 }}>
                {"En la siguiente tabla se pueden gestionar los diferentes productos de la tienda"}
            </Text>
            <Text>{"\n"}</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={["Nombre", "Descripcion", "Precio", "Categoria", "Imagen", "acciones"]}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows
          data={[
            ["Correa", "Correa de cuero", "$40.000", "Correa", "Imagen",  <Button
            title="Editar"
            color="green"
            accessibilityLabel="Inicio de sesion"
        />],
          ]}
          textStyle={styles.text}
        />
      </Table>
      <Text>{"\n"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    head: { height: 50, backgroundColor: "#f1f8f1", width: 400 },
    text: { margin: 5 },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
  
  const style = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  