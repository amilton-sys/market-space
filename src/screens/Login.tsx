import { Header } from "@components/Header";
import { VStack, Text, Center } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
export function Login() {
  return (
    <VStack flex={1} bg="white">
      <Center
        bg="gray.600"
        h={560}
        alignItems="center"
        justifyContent="center"
        rounded="3xl"
        p={10}
        flex={1}
      >
        <Header
          title="marketspace"
          subtitle="Seu espaço de compra e venda"
          w={160}
          h={64}
          fontSize={33}
        />
        <Text mb={3} mt={60}>
          Acesse sua conta
        </Text>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" isPassword />
        <Button title="Entrar" isBlue />
      </Center>
      <Center p={10}>
        <Text mt={15} mb={4} color="gray.300" fontSize="sm">
          Ainda não tem uma conta?
        </Text>
        <Button
          title="Criar uma conta"
          isGray
        />
      </Center>
    </VStack>
  );
}
