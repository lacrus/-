const { View, Text, StyleSheet } = require("react-native");

export default function Items({ i, handleBorrarTarea, refInput }) {
  return (
    <View style={styles.itemLista}>
      <Text
        onPress={() => handleBorrarTarea(i.index)}
        style={styles.textoLista}
      >
        {i.item.texto}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemLista: {
    margin: 3,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#fafafa",
  },
  textoLista: {
    textAlign: "center",
  },
});
