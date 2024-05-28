import { AdsContent } from "@components/AdsContent";
import { AdsContentHeader } from "@components/AdsContentHeader";
import { AdsHeader } from "@components/AdsHeader";
import { AdsTitleDetails } from "@components/AdsTitleDetails";
import { Button } from "@components/Button";
import { CarouselComponent } from "@components/CarouselComponent";
import { StatusCard } from "@components/StatusCard";
import { VStack, Text, HStack, ScrollView } from "native-base";
import { useState } from "react";

export function AdsDetails() {
  const [isDesactivated, setIsDesactivated] = useState(false);
  return (
    <VStack bg="gray.600" flex={1}>
      <AdsHeader myAdsDetais title={""} />
      <CarouselComponent isActive={isDesactivated} />
      <VStack px={5}>
        <AdsContentHeader />
        <StatusCard bg="gray.500" h={22} w={46} mr={2} mt={3} isUsed />
        <AdsTitleDetails />
        <AdsContent />
      </VStack>
      <VStack px={5} space={2}>
        <Button
          isDesactive
          isBlack
          title={isDesactivated ? "Reativar anúncio" : "Desativar anúncio"}
          bgColor={isDesactivated ? "blue.700" : "gray.100"}
          onPress={() => setIsDesactivated(!isDesactivated)}
        />
        <Button isRemove isGray title="Excluir anúncio" />
      </VStack>
    </VStack>
  );
}
