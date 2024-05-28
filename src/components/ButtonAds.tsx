import React from "react";
import { Pressable, HStack, Heading, Text, VStack } from "native-base";
import { Tag, ArrowRight } from "phosphor-react-native";

export function ButtonAds() {
  return (
    <Pressable
      p={4}
      justifyContent="center"
      mt={3}
      bg="rgba(0, 0, 255, 0.1)"
      w="full"
      h={66}
      rounded="sm"
      _pressed={{
        bg: "rgba(0, 0, 255, 0.3)",
      }}
    >
      <HStack alignItems="center">
        <Tag color="#364d9d" size={22} />
        <VStack ml={3} flex={1}>
          <Heading color="gray.100" fontSize="md">
            4
          </Heading>
          <Text color="gray.100" fontSize="xs" fontFamily="body">
            anúncios ativos
          </Text>
        </VStack>
        <Text color="blue.500" fontSize="xs" fontFamily="heading" mr={2}>
          Meus anúncios
        </Text>
        <ArrowRight color="#364d9d" size={16}/>
      </HStack>
    </Pressable>
  );
}
