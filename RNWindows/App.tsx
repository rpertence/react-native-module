/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import usePermissions from 'react-native-native-module-sample';

function App(): React.JSX.Element {
  const [depotMapSpotId, setDepotMapSpotId] = useState('');
  const [containerId, setContainerId] = useState('');
  const [result, setResult] = useState('');

  const {checkAllowed} = usePermissions();
  //const checkAllowed = (a: string, b: string) => true;

  const onDepotMapSpotIdChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setDepotMapSpotId(e.nativeEvent.text);
  };

  const onContainerIdChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setContainerId(e.nativeEvent.text);
  };

  const onButtonClick = () => {
    const isAllowed = checkAllowed(depotMapSpotId, containerId);
    setResult(isAllowed ? 'Allowed' : 'Not allowed');
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
    borderColor: 'black',
    height: 40,
    width: 100,
    marginVertical: 10,
    padding: 5,
  },
});

export default App;
