import { CoutnerContext } from "@/Contexts/counterContext";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const { counter, add } = useContext(CoutnerContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {counter}</Text>
      <Button title="Increase" onPress={(add)} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
