import { BottonSheet } from "@components/BottonSheet";
import { ButtonAds } from "@components/ButtonAds";
import { CardAds } from "@components/CardAds";
import { HomeHeader } from "@components/HomeHeader";
import { Input } from "@components/Input";
import {
  VStack,
  Text,
  FlatList,
  useDisclose,
} from "native-base";
import { useState } from "react";

export function Home() {
  const [cardAds, setCardAds] = useState<string[]>([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [nameSearched, setNameSearched] = useState("");
  function handleFilter() {
    console.log("filter");
  }
  function handleSearch() {
    console.log("search");
  }


  return (
    <VStack p={5} bg="gray.600" flex={1} pt={10}>
      <HomeHeader />
      <Text mt={4} color="gray.300">
        Seus produtos anunciados para venda
      </Text>
      <ButtonAds />
      <Text mt={7} color="gray.300">
        Compre produtos variados
      </Text>
      <Input
        mt={3}
        placeholder="Buscar anúncio"
        bg="gray.700"
        isSearch
        onFilter={onOpen}
        onChangeText={(name) => setNameSearched(name)}
      />
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
      <BottonSheet isOpen={isOpen} onClose={onClose} buttonClose={onClose} />
    </VStack>
  );
}
