import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
type Props = IButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
        w="full"
        h={14}
        bg="blue.700"
        rounded="sm"
        _pressed={{
            bg: "blue.500",
        }}
    >
      <Text color="gray.700" fontSize="sm" fontFamily="heading">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
