import { VStack, Text, FlatList } from "native-base";
import { AdsPaymentType } from "./AdsPaymentType";
import { useState } from "react";

export function AdsContent() {

  return (
    <VStack mb={2}>
      <Text color="gray.100" mt={2} fontFamily="body" fontSize="sm">
        Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae
        ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris
        mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
      </Text>
      <Text color="gray.100" fontSize="sm" fontFamily="heading" mt={4}>
        Aceita troca? {"  "}
        <Text color="gray.200" fontFamily="body" fontSize="sm">
          Sim
        </Text>
      </Text>
      <Text color="gray.100" fontSize="sm" fontFamily="heading" mt={2} mb={2}>
        Meios de pagamento:
      </Text>
      <AdsPaymentType iconType="barCode" title="Boleto"/>
      <AdsPaymentType iconType="QrCode" title="Pix"/>
      <AdsPaymentType iconType="Money" title="Dinheiro"/>
      <AdsPaymentType iconType="CreditCard" title="Cartão de Crédito"/>
      <AdsPaymentType iconType="Bank" title="Depósito Bancário"/>
    </VStack>
  );
}
