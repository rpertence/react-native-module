import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import usePermissions from "react-native-native-module-sample";

export default function HomeScreen() {
  const [depotMapSpotId, setDepotMapSpotId] = useState("");
  const [containerId, setContainerId] = useState("");
  const [result, setResult] = useState("");

  const { checkAllowed } = usePermissions();

  const onDepotMapSpotIdChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setDepotMapSpotId(e.nativeEvent.text);
  };

  const onContainerIdChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setContainerId(e.nativeEvent.text);
  };

  const onButtonClick = () => {
    const isAllowed = checkAllowed(depotMapSpotId, containerId);
    setResult(isAllowed ? "Allowed" : "Not allowed");
  };

  return (
    <View style={styles.container}>
      <Text>Depot Map Spot ID</Text>
      <TextInput style={styles.input} onChange={onDepotMapSpotIdChange} />
      <Text>Container ID</Text>
      <TextInput style={styles.input} onChange={onContainerIdChange} />
      <Button title="Check Permissions" onPress={onButtonClick} />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    width: 100,
    marginVertical: 10,
    padding: 5,
  },
});
