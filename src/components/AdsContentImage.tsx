import { Text, VStack } from "native-base";
import { AdsPhoto } from "./AdsPhoto";

export function AdsContentImages() {
  return (
    <VStack px={6} mt={5} space={3}>
      <Text fontFamily="heading">Imagens</Text>
      <Text fontFamily="body">
        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
      </Text>
      <AdsPhoto/>
    </VStack>
  );
}
