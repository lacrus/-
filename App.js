import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Items from "./componentes/Items";
import Input from "./componentes/Input";

export default function App() {
  let [input, setInput] = useState("");
  const [tareas, setTareas] = useState([]);

  const refInput = useRef("");

  const image = {
    uri: "https://images.unsplash.com/photo-1660422605160-7be25e219853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1997&q=80",
  };

  function handleTexto(e) {
    setInput(e);
  }

  function handleAgregarTarea() {
    // setTareas((tareasActuales) => [
    //   ...tareasActuales,
    //   { texto: input, key: tareas.length + "" + input },
    // ]);
    setTareas((tareasActuales) => [
      ...tareasActuales,
      { texto: input, id: tareas.length + "" + input },
    ]);
  }

  function handleBorrarTarea(o) {
    let tareasFiltradas = tareas.filter((i, index) => index !== o);
    setTareas(tareasFiltradas);
    console.log(refInput.current);
  }

  return (
    <View style={styles.contenedorApp}>
      <ImageBackground source={image} style={styles.imagen}>
        <Input
          handleTexto={handleTexto}
          handleAgregarTarea={handleAgregarTarea}
          refInput={refInput}
        />
        <View style={styles.contenedorLista}>
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={tareas}
            renderItem={(i) => {
              i.index;
              return (
                <Items
                  i={i}
                  handleBorrarTarea={handleBorrarTarea}
                  refInput={refInput}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorApp: {
    flex: 1,
    paddingTop: 50,
    // paddingHorizontal: 16,
  },
  imagen: {
    flex: 1,
    // width: "100%",
    // justifyContent: "center",
    paddingHorizontal: 16,
  },
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
    borderColor: "#cccccc",
    width: "60%",
    marginRight: 8,
    padding: 8,
  },
  contenedorLista: {
    flex: 5,
    // alignItems: "stretch",
  },
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
