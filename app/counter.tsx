import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CounterContext } from "../Contexts/counterContext";

const Counter = () => {
  const { counter, add } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      {/* Cool Counter Display - matches parent style */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterLabel}>Child Counter</Text>
        <Text style={styles.counterDisplay}>{counter}</Text>
      </View>

      {/* Cool Button - matches parent style */}
      <TouchableOpacity style={styles.button} onPress={() => add(1)}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A", // Match parent dark background
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3A3A3A", // Subtle border to separate from parent
  },

  // Cool Counter Display - exactly like parent
  counterContainer: {
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    padding: 25, // Slightly smaller than parent
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#E94B3C", // Different accent color (red) to distinguish from parent
    shadowColor: "#E94B3C",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  
  counterLabel: {
    color: "#8B8B8B",
    fontSize: 14, // Slightly smaller than parent
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  
  counterDisplay: {
    color: "#E94B3C", // Red accent to match the container border
    fontSize: 36, // Smaller than parent's 48px
    fontWeight: "bold",
    textShadowColor: "#E94B3C",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  // Cool Button - matches parent style but with red accent
  button: {
    backgroundColor: "#E94B3C", // Red instead of blue
    borderRadius: 12, // Slightly smaller radius
    paddingVertical: 14, // Slightly smaller padding
    paddingHorizontal: 30,
    shadowColor: "#E94B3C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16, // Slightly smaller than parent
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});