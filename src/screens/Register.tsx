import { Header } from "@components/Header";
import { VStack, Text, Center, Skeleton, ScrollView } from "native-base";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";

const PHOTO_SIZE = 88;
export function Register() {
  return (
    <VStack flex={1} bg="gray.600">
      <Center alignItems="center" justifyContent="center" p={10}>
        <Header
          title="Boas vindas!"
          subtitle="Crie sua conta e use o espaço para comprar  itens variados e vender seus produtos"
          w={60}
          h={40}
          fontSize="xl"
          mb={15}
        />
        <UserPhoto
          source={{
            uri: "https://github.com/amilton-sys.png",
          }}
          alt="Foto do usuário"
          size={PHOTO_SIZE}
        />
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Senha" isPassword />
        <Input placeholder="Confirmar senha" isPassword />

        <Button title="Criar" isBlack />

        <Text mb={4} mt={16} color="gray.300" fontSize="sm">
          Já tem uma conta?
        </Text>

        <Button title="Ir para o login" isGray />
      </Center>
    </VStack>
  );
}
