import { HStack, VStack, Text, Heading } from "native-base";
import { Button } from "@components/Button";
import { UserPhoto } from "./UserPhoto";
const PHOTO_SIZE = 45;

export function HomeHeader() {
  return (
    <HStack alignItems="center">
      <UserPhoto size={PHOTO_SIZE} isProfile alt="Foto do usuário" source={{
        uri: "https://github.com/amilton-sys.png",
      }}/>
      <VStack justifyContent="center" ml={2} flex={1}>
        <Text color="gray.100" fontSize="md" fontWeight="body">
          Boas vindas,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Amilton!
        </Heading>
      </VStack>
      <Button title="Criar anúncio" isBlue color="gray.700" w={140} h={10} p={2} isAdd/>
    </HStack>
  );
}
