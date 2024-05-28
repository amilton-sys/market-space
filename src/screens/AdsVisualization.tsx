import { AdsContent } from "@components/AdsContent";
import { AdsContentHeader } from "@components/AdsContentHeader";
import { AdsTitleDetails } from "@components/AdsTitleDetails";
import { Button } from "@components/Button";
import { CarouselComponent } from "@components/CarouselComponent";
import { StatusCard } from "@components/StatusCard";
import { VStack, Text, HStack, ScrollView } from "native-base";
import { useState } from "react";

export function AdsVisualization() {
  const [isDesactivated, setIsDesactivated] = useState(false);
  return (
    <VStack flex={1}>
      <ScrollView>
        <VStack bg="gray.600" flex={1}>
          <VStack
            bg="blue.700"
            h={122}
            justifyContent="center"
            alignItems="center"
          >
            <VStack alignItems="center" mt={9}>
              <Text fontFamily="heading" color="gray.700">
                Pré visualização do anúncio
              </Text>
              <Text fontFamily="body" fontSize="sm" color="gray.700">
                É assim que seu produto vai aparecer!
              </Text>
            </VStack>
          </VStack>
          <CarouselComponent isActive={isDesactivated} />
          <VStack px={5}>
            <AdsContentHeader />
            <StatusCard bg="gray.500" h={22} w={46} mr={2} mt={3} isUsed />
            <AdsTitleDetails />
            <AdsContent />
          </VStack>
        </VStack>
      </ScrollView>
      <VStack>
        <HStack
          px={5}
          space={2}
          alignItems="center"
          justifyContent="center"
          bg="gray.700"
          h={90}
        >
          <Button isBack title="Voltar e editar" isGray w={160} />
          <Button isPub title="Publicar" isBlue w={160} />
        </HStack>
      </VStack>
    </VStack>
  );
}
