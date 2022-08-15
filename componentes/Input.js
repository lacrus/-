const { View, Text, StyleSheet, TextInput, Button } = require("react-native");

export default function Input({ handleTexto, handleAgregarTarea, refInput }) {
  return (
    <View style={styles.contenedorInput}>
      <TextInput
        placeholder="Escribe tu tarea.."
        style={styles.inputTexto}
        onChangeText={handleTexto}
        ref={refInput}
      />
      {/* <View style={styles.boton}> */}
      <Button onPress={handleAgregarTarea} title="Agregar tarea" />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputTexto: {
    borderWidth: 1,
    borderColor: "#fafafa",
    width: "60%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#fafafa",
  },
  boton: {
    backgroundColor: "#fafafa",
  },
});
