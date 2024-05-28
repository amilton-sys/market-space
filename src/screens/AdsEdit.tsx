import { AdsContentImages } from "@components/AdsContentImage";
import { AdsForm } from "@components/AdsForm";
import { AdsHeader } from "@components/AdsHeader";
import { ScrollView, VStack } from "native-base";

export function AdsEdit() {
  return (
    <VStack bg="gray.600" flex={1}>
      <ScrollView>
        <AdsHeader title="Editar anúncio" myAds myAdsCreate />
        <AdsContentImages />
        <AdsForm />
      </ScrollView>
    </VStack>
  );
}
