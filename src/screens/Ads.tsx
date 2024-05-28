import { AdsContent } from "@components/AdsContent";
import { AdsContentHeader } from "@components/AdsContentHeader";
import { AdsHeader } from "@components/AdsHeader";
import { AdsTitleDetails } from "@components/AdsTitleDetails";
import { Button } from "@components/Button";
import { CarouselComponent } from "@components/CarouselComponent";
import { StatusCard } from "@components/StatusCard";
import { VStack, Text, HStack } from "native-base";


export function Ads() {
  return (
    <VStack bg="gray.600" flex={1}>
      <AdsHeader title={""} />
      <CarouselComponent />
      <VStack px={5}>
        <AdsContentHeader />
        <StatusCard bg="gray.500" h={22} w={46} mr={2} mt={3} isUsed />
        <AdsTitleDetails />
        <AdsContent />
      </VStack>
      <HStack
        p={3}
        bg="gray.700"
        alignItems="center"
        justifyContent="space-between"
        h={90}
      >
        <Text color="blue.500" mt={2} fontFamily="heading" fontSize="xl">
          <Text fontSize="md">R$</Text> 120,00
        </Text>
        <Button isWhatsApp isBlue title="Entrar em contato" w={170} />
      </HStack>
    </VStack>
  );
}
