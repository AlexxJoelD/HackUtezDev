import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../../../../kernel/components/Loading";
import { Button, Icon, Input } from "@rneui/base";

const UnitPrice = ({ route, navigation }) => {
  const { selectedServices, user } = route.params;

  const [payload, setPayload] = useState({});

  const changePayLoad = (text, service) => {
    console.log(payload);
    setPayload((prevPayload) => ({
      ...prevPayload,
      [service]: text,
    }));
  };

  if (!selectedServices || selectedServices.length === 0) {
    return null; // Manejar el caso en que no hay servicios seleccionados
  }
  const [error, setError] = useState(payload);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(payload);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.viewForm}>
        <View style={styles.container}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "#1AA07B",
              marginVertical: 15,
            }}
          >
            Pago de servicio
          </Text>

          {selectedServices.map((service) => (
            <View key={service} style={styles.containerMax}>
              <Text style={styles.label}>{service}</Text>
              <Input
                style={styles.input}
                placeholder="00.00"
                rightIcon={
                  <Icon
                    type="material-community"
                    name="currency-usd"
                    size={22}
                  />
                }
                keyboardType="decimal-pad"
                onChangeText={(text) => changePayLoad(text, service)}
              />
            </View>
          ))}

          <Text style={{marginLeft: 10, marginVertical: 10}}>Nota: Los valores ingresados son centavos</Text>
          <Button
            title="Siguiente"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={() => {
              navigation.navigate("metdhodPay", { pricesPayload: payload, user });
            }}
            disabled={!Object.keys(payload)[selectedServices.length-1]}
            disabledStyle={{backgroundColor: "#16b98d"}}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UnitPrice;

const styles = StyleSheet.create({
  containerMax: {
    width: "100%",
  },
  logo: {
    width: "100%",
    height: 159,
    marginTop: 100,
  },
  viewForm: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    marginTop: 20,
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
    backgroundColor: "#1AA07B",
    marginLeft: 18,
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