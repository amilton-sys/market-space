import { Text, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";

import { THEME } from "./src/theme";
import { Loading } from "@components/Loading";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Register /> : <Loading />}
    </NativeBaseProvider>
  );
}
