import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

type CustomButtonProps = {
  text: string;
  themeColor: string;
  onPress: () => void;
};

export default function CustomButton({ text, themeColor, onPress }: CustomButtonProps) {
  return (
    <Pressable onPress={() => onPress()} style={({ pressed }) => [styles.button, { backgroundColor: themeColor, opacity: pressed ? 0.7 : 1 }]}> 
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
