import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import React from "react";

export default function EditarProducto() {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Editar Producto"}
            </Text>
            <Text style={{ fontSize: 16 }}>
                {"En el siguiente formulario se pueden Editar los diferentes productos de la tienda"}
            </Text>
            <Text>{"\n"}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Nombre"}
            </Text>
            <TextInput
                placeholder="Ingrese el nombre del producto"
                style={style.input}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Descripción"}
            </Text>
            <TextInput
                placeholder="Ingrese la descripcion del producto"
                style={style.input}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Precio"}
            </Text>
            <TextInput
                placeholder="Ingrese el precio del producto"
                style={style.input}
            />

            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Categoria"}
            </Text>
            <TextInput
                placeholder="Ingrese la categoria del producto"
                style={style.input}
            />

            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {"Imagen"}
            </Text>
            <TextInput
                placeholder="Ingrese la imagen del producto"
                style={style.input}
            />
            
            <Button
                title="Editar"
                color="blue"
                accessibilityLabel="Inicio de sesion"
            />
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
