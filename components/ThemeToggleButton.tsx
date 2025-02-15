import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from './ThemeProvider';

export default function ThemeToggleButton() {
    const { currentTheme, toggleTheme } = useTheme();

    return (
      <Pressable onPress={() => toggleTheme()}>
        <MaterialIcons name={currentTheme === "light" ? "dark-mode" : "light-mode"} size={24} color="black" />
      </Pressable>
    )
}