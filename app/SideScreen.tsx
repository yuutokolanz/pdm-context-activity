import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@/components/ThemeProvider';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

export default function SideScreen() {
  const { theme } = useTheme();
  const goHome = () => {
    if (router.canGoBack()) {
      router.dismiss();
    } else {
      router.push("/");
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}> 
      <Text style={{ color: theme.textColor }}>Second Screen</Text>
      <CustomButton  text="Go to Home Screen" themeColor={theme.primaryColor} onPress={goHome} />
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