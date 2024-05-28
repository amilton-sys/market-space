import {
  Actionsheet,
  HStack,
  IActionsheetProps,
  IActionsheetContentProps,
  VStack,
  Text,
  Checkbox,
  Pressable,
} from "native-base";
import { X } from "phosphor-react-native";
import { StatusCard } from "./StatusCard";
import { Button } from "./Button";
import { useState } from "react";
import { Switch } from "react-native";

type Props = IActionsheetProps & IActionsheetContentProps & {
  buttonClose?: () => void;
};

export function BottonSheet({buttonClose, ...rest }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Actionsheet {...rest} _ style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}>
      <Actionsheet.Content {...rest}>
        <VStack w="full" h={550} p={4}>
          <HStack alignItems="center">
            <Text fontSize="xl" fontFamily="heading" flex={1}>
              Filtrar anúncios
            </Text>
            <Pressable onPress={buttonClose}>
              <X color="gray" size={22} />
            </Pressable>
          </HStack>
          <Text
            color="gray.100"
            fontSize="sm"
            fontFamily="heading"
            mt={4}
            mb={2}
          >
            Condição
          </Text>
          <HStack>
            <StatusCard bg="blue.700" isBottomSheet h={28} w={76} mr={2} />
            <StatusCard bg="gray.500" isBottomSheet h={28} w={76} isUsed />
          </HStack>
          <Text color="gray.100" fontSize="sm" fontFamily="heading" mt={4}>
            Aceita troca?
          </Text>
          <Switch style={{
            alignSelf:"flex-start",
          }} onValueChange={toggleSwitch} value={isEnabled} />
          <Text
            color="gray.100"
            fontSize="sm"
            fontFamily="heading"
            mt={4}
            mb={3}
          >
            Meios de pagamento aceitos
          </Text>
          <VStack space={2} flex={1}>
            <Checkbox
              _checked={{
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              }}
              _pressed={{
                bg: "blue.500",
                color: "white",
                borderColor: "blue.500",
              }}
              value="boleto"
              accessibilityLabel="boleto"
            >
              Boleto
            </Checkbox>
            <Checkbox
              _checked={{
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              }}
              _pressed={{
                bg: "blue.500",
                color: "white",
                borderColor: "blue.500",
              }}
              value="Pix"
              accessibilityLabel="Pix"
            >
              Pix
            </Checkbox>
            <Checkbox
              _checked={{
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              }}
              _pressed={{
                bg: "blue.500",
                color: "white",
                borderColor: "blue.500",
              }}
              value="Dinheiro"
              accessibilityLabel="Dinheiro"
            >
              Dinheiro
            </Checkbox>
            <Checkbox
              _checked={{
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              }}
              _pressed={{
                bg: "blue.500",
                color: "white",
                borderColor: "blue.500",
              }}
              value="boleto"
              accessibilityLabel="boleto"
            >
              Cartão de Crédito
            </Checkbox>
            <Checkbox
              _checked={{
                bg: "blue.700",
                color: "white",
                borderColor: "blue.700",
              }}
              _pressed={{
                bg: "blue.500",
                color: "white",
                borderColor: "blue.500",
              }}
              value="boleto"
              accessibilityLabel="boleto"
            >
              Depósito Bancário
            </Checkbox>
          </VStack>
          <HStack justifyContent="space-between">
            <Button title="Resetar filtros" w={160} isGray />
            <Button title="Aplicar filtros" w={160} isBlack />
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
