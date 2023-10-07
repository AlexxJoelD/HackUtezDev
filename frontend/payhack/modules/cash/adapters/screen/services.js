import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../../../../kernel/components/Loading";


export default function Services({ navigation, route: { params: { user } } }) {

  const [selectedServices, setSelectedServices] = useState([]);
  const [enabledButton, setEnabledButton] = useState(true)

  const servicios = ["Agua", "Luz", "Teléfono", "Internet"];

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.viewForm}>
        <View style={styles}>
          {servicios.map((servicio) => (
            <TouchableOpacity
              key={servicio}
              onPress={() => handleServiceToggle(servicio)}
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: selectedServices.includes(servicio)
                  ? "gray"
                  : "gray", //borde
                borderRadius: 5,
                marginVertical: 5,
                backgroundColor: selectedServices.includes(servicio)
                  ? "#1AA07B"
                  : "white",
              }}
            >
              <Text
                style={{
                  color: selectedServices.includes(servicio)
                    ? "white"
                    : "black",
                }}
              >
                {servicio}
              </Text>
            </TouchableOpacity>
          ))}
          <Text>Has seleccionado: {selectedServices.join(", ")}</Text>
        </View>

        <Button
          title="Siguiente"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          disabled={!Object.keys(selectedServices)[0]}
          onPress={() => {
            navigation.navigate("unitPrice", { selectedServices, user });
          }}
        />
      </View>
      <Loading show={false} text="Registrando" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 159,
    marginTop: 100,
  },
  viewForm: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  btnContainer: {
    marginBottom: 20,
    width: "95%",
  },
  btn: {
    marginTop: 5,
    backgroundColor: "#1AA07B",
  },
  screen: {
    backgroundColor: "white",
  },
  label: {
    color: "#1AA07B",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
  },
});