import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
  SafeAreaView,
} from "react-native";
import useSpotPermissions from "react-native-spot-permissions";

export default function HomeScreen() {
  const [depotMapSpotId, setDepotMapSpotId] = useState("");
  const [containerId, setContainerId] = useState("");
  const [result, setResult] = useState("");

  const { checkAllowed } = useSpotPermissions();

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
    <SafeAreaView style={styles.container}>
      <Text>Depot Map Spot ID</Text>
      <TextInput style={styles.input} onChange={onDepotMapSpotIdChange} />
      <Text>Container ID</Text>
      <TextInput style={styles.input} onChange={onContainerIdChange} />
      <Button title="Check Permissions" onPress={onButtonClick} />
      <Text>Result: {result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
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
