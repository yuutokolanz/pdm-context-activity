import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Stack } from "expo-router";

export default function _layout() {
  return(
    <ThemeProvider>
      <Stack
      screenOptions={{
        headerRight: () => <ThemeToggleButton />, 
      }}
      >
      </Stack>
    </ThemeProvider>
  )
}