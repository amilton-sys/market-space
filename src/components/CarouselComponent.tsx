import React, { useRef, useState } from "react";
import { useWindowDimensions, Pressable } from "react-native";
import { Box, Center, HStack, Image, ScrollView, Text } from "native-base";

const DATA = [
  {
    id: 1,
    imageURI:
      "https://img.elo7.com.br/product/600x380/44A93B0/placa-decorativa-leao-juda-placa-decorativa-leao-juda.jpg",
  },
  {
    id: 2,
    imageURI:
      "https://www.quadrorama.com.br/wp-content/uploads/2020/12/leao_juda_tb.png",
  },
  {
    id: 3,
    imageURI:
      "https://www.awebic.com/wp-content/uploads/2024/01/leao-da-tribo-de-juda.jpeg",
  },
];

type Props = {
  isActive?: boolean;
};

export function CarouselComponent({ isActive = false }: Props) {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<typeof ScrollView>(null);

  const handleScroll = (event: any) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const scrollIndicator = (index: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };

  return (
    <Box>
      <ScrollView
        w="full"
        height={180}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {DATA.map(({ id, imageURI }) => (
          <Box key={id} width={width} bgColor="gray.100">
            <Image
              source={{ uri: imageURI }}
              alt="Imagens do produto"
              resizeMode="cover"
              width="100%"
              height="100%"
            />
            {isActive && (
              <Center
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 0, 0, 0.5)"
              >
                <Text color="white" fontSize="md" textTransform="uppercase">
                  Anúncio desativado
                </Text>
              </Center>
            )}
          </Box>
        ))}
      </ScrollView>
      <HStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top={175}
        width="100%"
      >
        {DATA.map((_, index) => (
          <Pressable key={index} onPress={scrollIndicator}>
            <Box
              opacity={index === currentIndex ? 1 : 0.5}
              w={120}
              height={0.5}
              bg="gray.700"
              rounded="full"
              marginX={1}
            />
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}
