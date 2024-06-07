import { View, Image, StyleSheet, TextInput, Button } from "react-native";
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
        <Image
          style={{ width: 350, height: 100, marginTop: 200, marginBottom: 100 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/CEUTEC_HONDURAS.png/1024px-CEUTEC_HONDURAS.png",
          }}
        ></Image>
      <View style={styles.containerBackground}>
        <TextInput style={styles.input} placeholder="Correo"></TextInput>
        <TextInput style={styles.input} placeholder="Clave"></TextInput>
        <Button title="Entrar"></Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerBackground: {
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
    height: '100%',
    backgroundColor: "#192A57",
    borderTopLeftRadius: 70,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#dcdcdc",
    marginBottom: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
});