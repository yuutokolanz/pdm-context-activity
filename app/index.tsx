import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ThemeProvider, { useTheme } from '@/components/ThemeProvider'
import { router, Stack } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function Home() {
  const { theme } = useTheme();
  const goSide = () => {
    router.push('/SideScreen');
  };

    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Stack.Screen 
        options={{
          title: "Home"
        }}
      />
        <Text style={{ color: theme.textColor }}>Home Screen</Text>
        <CustomButton  text="Go to Second Screen" themeColor={theme.primaryColor} onPress={goSide} />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });