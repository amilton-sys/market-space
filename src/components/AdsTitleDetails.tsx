import { HStack, Text } from "native-base";

export function AdsTitleDetails() {
  return (
    <HStack>
      <Text flex={1} mt={2} fontFamily="heading" fontSize="xl">
        Bicicleta
      </Text>
      <Text color="blue.700" mt={2} fontFamily="heading" fontSize="xl">
        <Text fontSize="sm">R$</Text> 120,00
      </Text>
    </HStack>
  );
}
