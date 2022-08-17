import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useCountContext } from "../context/CountContext";

const CountScreen = () => {
  const { count, setCount } = useCountContext();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrymentCount = () => {
    if (count) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button title="Increment" onPress={incrementCount}>
        Increment
      </Button>
      <View style={styles.seperator} />
      <Button title="Decryment" onPress={decrymentCount}>
        Increment
      </Button>
    </View>
  );
};

export default CountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 48,
    fontWeight: "bold",
  },
  button: {
    marginVertical: 5,
  },
  seperator: {
    margin: 5,
  },
});
