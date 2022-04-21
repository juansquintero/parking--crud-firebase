import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    placa: "",
    tipo: "",
    tipo_vehiculo: "",
    modelo: "",
    celular: "",
    fecha_ingreso: "",
    hora_ingreso: "",
    observaciones: "",
    mensulidad: "",
    fecha_ultimo_pago: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.placa === "" || state.tipo === "" || state.tipo_vehiculo === "" || state.modelo === "" || state.celular === "" || state.fecha_ingreso === "" || state.hora_ingreso === "" || state.observaciones === "" || state.mensulidad === "" || state.fecha_ultimo_pago === "") {
      alert("Por favor llene los campos");
    } else {

      try {
        await firebase.db.collection("users").add({
          placa: state.placa,
          tipo: state.tipo,
          tipo_vehiculo: state.tipo_vehiculo,
          modelo: state.modelo,
          celular: state.celular,
          fecha_ingreso: state.fecha_ingreso,
          hora_ingreso: state.hora_ingreso,
          observaciones: state.observaciones,
          mensulidad: state.mensulidad,
          fecha_ultimo_pago: state.fecha_ultimo_pago,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Placa"
          onChangeText={(value) => handleChangeText(value, "placa")}
          value={state.placa}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Tipo"
          onChangeText={(value) => handleChangeText(value, "tipo")}
          value={state.tipo}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Tipo de vehiculo"
          onChangeText={(value) => handleChangeText(value, "tipo_vehiculo")}
          value={state.tipo_vehiculo}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Modelo"
          onChangeText={(value) => handleChangeText(value, "modelo")}
          value={state.modelo}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Celular"
          onChangeText={(value) => handleChangeText(value, "celular")}
          value={state.celular}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha de ingreso"
          onChangeText={(value) => handleChangeText(value, "fecha_ingreso")}
          value={state.fecha_ingreso}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Hora de ingreso"
          onChangeText={(value) => handleChangeText(value, "hora_ingreso")}
          value={state.hora_ingreso}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Observaciones"
          onChangeText={(value) => handleChangeText(value, "observaciones")}
          value={state.observaciones}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Mesualidad"
          onChangeText={(value) => handleChangeText(value, "mesualidad")}
          value={state.mensulidad}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha de ultimo pago"
          onChangeText={(value) => handleChangeText(value, "fecha_ultimo_pago")}
          value={state.fecha_ultimo_pago}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
