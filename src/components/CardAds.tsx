import React from "react";
import { VStack, Text, Heading, HStack, Center } from "native-base";
import ProducImage from "@assets/product.png";
import { UserPhoto } from "./UserPhoto";
import { StatusCard } from "./StatusCard";
import { Dimensions, ImageBackground } from "react-native";

type Props = {
  title: string;
  isActive?: boolean;
};

export function CardAds({ title, isActive = false }: Props) {
  return (
    <VStack mb={5} w={160}>
      <ImageBackground
        source={ProducImage}
        defaultSource={ProducImage}
        alt="Imagem do produto"
        style={{
          width: "100%",
          height: 120,
          justifyContent: "center",
        }}
        borderRadius={10}
        resizeMode="stretch"
      >
        <HStack justifyContent="space-between" bottom={5}>
          <UserPhoto
            ml={1}
            bottom={21}
            size={8}
            isProfile
            alt="Foto do usuário"
            borderColor="gray.700"
            source={{
              uri: "https://github.com/amilton-sys.png",
            }}
          />
          <StatusCard mr={1} bottom={11} isUsed />
        </HStack>
        {!isActive && (
          <Center
            position="absolute"
            rounded="lg"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
          >
            <Text color="white" fontSize="xs" textTransform="uppercase" mt={20}>
              Anúncio desativado
            </Text>
          </Center>
        )}
      </ImageBackground>
      <Text mt={2} ml={1} color="gray.100" fontSize="sm">
        {title}
      </Text>
      <Text ml={1} color="gray.100" fontSize="sm" fontFamily="heading">
        R$ <Heading fontSize="xl">59,90</Heading>
      </Text>
    </VStack>
  );
}
