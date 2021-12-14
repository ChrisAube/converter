import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import logo from "./assets/download.jpg";

export default function App() {
  const [text, setConvert] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.textBox}
        placeholder="USD Here"
        onChangeText={(text) => setConvert(text)}
        numeric
        keyboardType="numeric"
        defaultValue={text}
      />
      <Text style={{ color: "#444", fontSize: 30 }}>
        Lets convert USD to Euro!
      </Text>
      <Text style={{ color: "#0", fontSize: 30 }}>{text * 0.89}</Text>
      <View style={styles.view}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  textBox: {
    textAlign: "center",
    fontSize: 40,
    color: "#444",
  },
  view: {
    height: 50,
  },
});
