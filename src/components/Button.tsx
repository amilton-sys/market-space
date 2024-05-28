import {
  Plus,
  WhatsappLogo,
  Power,
  TrashSimple,
  Tag,
  ArrowLeft,
} from "phosphor-react-native";
import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  ITextProps,
  HStack,
  Box,
  Pressable,
} from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
type Props = IButtonProps &
  ITextProps & {
    title: string;
    isGray?: boolean;
    isBlack?: boolean;
    isAdd?: boolean;
    isBlue?: boolean;
    isWhatsApp?: boolean;
    isDesactive?: boolean;
    isRemove?: boolean;
    isBack?: boolean;
    isPub?: boolean;
  };
export function Button({
  title,
  isGray = false,
  isBlack = false,
  isAdd = false,
  isBlue = false,
  isWhatsApp = false,
  isDesactive = false,
  isRemove = false,
  isBack = false,
  isPub = false,
  ...rest
}: Props) {
  return (
    <NativeBaseButton
      alignItems="center"
      justifyContent="center"
      w="full"
      h={12}
      bg={
        isGray
          ? "gray.500"
          : isBlack
          ? "gray.100"
          : isBlue
          ? "blue.700"
          : (undefined as ColorType)
      }
      rounded="sm"
      _pressed={{
        bg: isGray
          ? "gray.400"
          : isBlack
          ? "gray.200"
          : isBlue
          ? "blue.500"
          : (undefined as ColorType),
      }}
      {...rest}
    >
      <HStack alignItems="center" justifyContent="center">
        <Box alignItems="center">
          {isAdd && (
            <Plus
              style={{
                marginRight: -20,
                marginLeft: 20,
              }}
              color="white"
              size={14}
            />
          )}
          {isWhatsApp && (
            <WhatsappLogo
              style={{
                marginRight: -20,
                marginLeft: 20,
              }}
              color="white"
              weight="fill"
              size={19}
            />
          )}
          {isDesactive && (
            <Power
              color="white"
              size={19}
              style={{
                marginHorizontal: 5,
              }}
            />
          )}
          {isRemove && (
            <TrashSimple
              color="gray"
              size={19}
              style={{
                marginHorizontal: 5,
              }}
            />
          )}
          {isBack && (
            <ArrowLeft
              color="gray"
              size={19}
              style={{
                marginRight: -25,
                marginLeft: 20,
              }}
            />
          )}
          {isPub && (
            <Tag
              color="white"
              size={19}
              style={{
                marginRight: -40,
                marginLeft: 20,
              }}
            />
          )}
        </Box>
        <Text
          textAlign="center"
          color={isGray ? "gray.200" : "gray.700"}
          fontSize="sm"
          fontFamily="heading"
          {...rest}
        >
          {title}
        </Text>
      </HStack>
    </NativeBaseButton>
  );
}
