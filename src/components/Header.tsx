import { Center, Heading, Text } from "native-base";
import LogoSvg from "@assets/logo.svg";

export function Header() {
  return (
    <Center>
      <LogoSvg />
      <Heading fontSize="4xl">marketspace</Heading>
      <Text color="gray.300" fontSize="sm">
        Seu espaço de compra e venda
      </Text>
    </Center>
  );
}
