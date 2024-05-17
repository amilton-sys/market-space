import { Header } from "@components/Header";
import { VStack, Text, Center, Pressable } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react-native";
export function Login() {
  const [show, setShow] = useState(false);
  return (
    <VStack flex={1} bg="white">
      <Center
        bg="gray.600"
        h={560}
        alignItems="center"
        justifyContent="center"
        rounded="3xl"
        p={10}
      >
        <Header />
        <Text mb={4} mt={100}>
          Acesse sua conta
        </Text>
        <Input placeholder="E-mail" />
        <Input
          placeholder="Senha"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              {show ? (
                <Eye size={24} color="gray" style={{marginRight:15}}/>
              ) : (
                <EyeSlash size={24} color="gray" style={{marginRight:15}} />
              )}
            </Pressable>
          }
        />
        <Button title="Entrar" />
      </Center>
    </VStack>
  );
}
