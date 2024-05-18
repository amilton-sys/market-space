import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  ITextProps,
} from "native-base";
type Props = IButtonProps &
  ITextProps & {
    title: string;
    isGray?: boolean;
    isBlack?: boolean;
  };
export function Button({
  title,
  isGray = false,
  isBlack = false,
  ...rest
}: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={12}
      bg={isGray ? "gray.500" : "blue.700" || isBlack ? "gray.100" : "blue.700"}
      rounded="sm"
      _pressed={{
        bg: isGray ? "gray.400" : "blue.500" || isBlack ? "gray.200" : "blue.500",
      }}
      {...rest}
    >
      <Text
        color={isGray ? "gray.200" : "gray.700"}
        fontSize="sm"
        fontFamily="heading"
        {...rest}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
