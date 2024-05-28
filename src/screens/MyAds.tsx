import { AdsHeader } from "@components/AdsHeader";
import { CardAds } from "@components/CardAds";
import {
  Box,
  CheckIcon,
  FlatList,
  HStack,
  Select,
  Text,
  VStack,
} from "native-base";
import { Check } from "phosphor-react-native";
import { useState } from "react";

export function MyAds() {
  const [cardAds, setCardAds] = useState<string[]>(["1", "2", "3", "4", "5"]);
  const [service, setService] = useState("Todos");
  return (
    <VStack>
      <AdsHeader title="Meus anúncios" myAds />
      <VStack px={6} mt={6}>
        <HStack alignContent="center" mb={3}>
          <Text flex={1} mt={7} color="gray.300">
            9 anúncios
          </Text>
          <Select
            rounded="md"
            selectedValue={service}
            minWidth="111"
            accessibilityLabel="Todos"
            placeholder="Todos"
            mt={1}
            _selectedItem={{
              bg: "blue.700",
              rounded: "md",
              endIcon: <Check size={20} color="white" />,
            }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item
              _pressed={{
                bg: "blue.100",
                rounded: "md",
              }}
              label="Todos"
              value="all"
            />
            <Select.Item
              _pressed={{
                bg: "blue.100",
                rounded: "md",
              }}
              label="Novos"
              value="new"
            />
            <Select.Item
              _pressed={{
                bg: "blue.100",
                rounded: "md",
              }}
              label="Usados"
              value="used"
            />
          </Select>
        </HStack>
        <FlatList
          data={cardAds}
          keyExtractor={(item) => item}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardAds title={item} />}
          contentContainerStyle={{ paddingBottom: 60 }}
          style={{ marginTop: 15 }}
        />
      </VStack>
    </VStack>
  );
}
