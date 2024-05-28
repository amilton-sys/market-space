import {
  VStack,
  Text,
  TextArea,
  HStack,
  Radio,
  ScrollView,
  Checkbox,
} from "native-base";
import { Input } from "./Input";
import { useState } from "react";
import { Switch } from "react-native";
import { Button } from "./Button";

export function AdsForm() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [radioButton, setRadioButton] = useState("");
  return (
    <VStack>
      <VStack px={6} mt={9}>
        <Text fontSize="md" fontFamily="heading" mb={3}>
          Sobre o produto
        </Text>
        <Input placeholder="Título do anúncio" px={3} />
        <TextArea
          placeholder="Descrição do produto"
          autoCompleteType
          bg="gray.700"
          fontSize="md"
          borderWidth={0}
          numberOfLines={3}
          p={3}
          _focus={{
            bg: "gray.700",
            borderWidth: 1,
            borderColor: "gray.100",
          }}
        />
        <Radio.Group
          name="My produts"
          defaultValue="1"
          value={radioButton}
          onChange={(nextValue) => setRadioButton(nextValue)}
        >
          <HStack space={9} mt={4}>
            <Radio value="1">Produto novo</Radio>
            <Radio value="2">Produto usado</Radio>
          </HStack>
        </Radio.Group>
        <Text fontSize="md" fontFamily="heading" mt={6}>
          Venda
        </Text>
        <Input placeholder="Valor do produto" px={3} mt={3} />
        <Text fontSize="md" fontFamily="heading">
          Aceita troca?
        </Text>
        <Switch
          style={{
            alignSelf: "flex-start",
          }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text fontSize="md" fontFamily="heading">
          Meios de pagamento aceitos
        </Text>
        <VStack space={1}>
          <Checkbox
            _checked={{
              bg: "blue.700",
              color: "white",
              borderColor: "blue.700",
              _pressed: {
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              },
            }}
            value="boleto"
          >
            Boleto
          </Checkbox>
          <Checkbox
            _checked={{
              bg: "blue.700",
              color: "white",
              borderColor: "blue.700",
              _pressed: {
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              },
            }}
            value="Pix"
          >
            Pix
          </Checkbox>
          <Checkbox
            _checked={{
              bg: "blue.700",
              color: "white",
              borderColor: "blue.700",
              _pressed: {
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              },
            }}
            value="Dinheiro"
          >
            Dinheiro
          </Checkbox>
          <Checkbox
            _checked={{
              bg: "blue.700",
              color: "white",
              borderColor: "blue.700",
              _pressed: {
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              },
            }}
            value="boleto"
          >
            Cartão de Crédito
          </Checkbox>
          <Checkbox
            _checked={{
              bg: "blue.700",
              color: "white",
              borderColor: "blue.700",
              _pressed: {
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              },
            }}
            value="boleto"
          >
            Depósito Bancário
          </Checkbox>
        </VStack>
      </VStack>
      <HStack
        h={90}
        bg="gray.700"
        space={3}
        alignItems="center"
        justifyContent="center"
        mt={6}
      >
        <Button title="Cancelar" isGray w={160} />
        <Button title="Avançar" isBlack w={160} />
      </HStack>
    </VStack>
  );
}
