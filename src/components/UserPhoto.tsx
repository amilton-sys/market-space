import { Center, IImageProps, Image, Button, Icon } from "native-base";
import { PencilSimpleLine } from "phosphor-react-native";
import {} from "react-native";
type Props = IImageProps & {
  size: number;
};
export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Center mb={15} mt={15}>
      <Image
        w={size}
        h={size}
        rounded="full"
        borderWidth={2}
        borderColor="blue.700"
        {...rest}
      />
      <Button
        position="absolute"
        top={45}
        left={55}
        w={10}
        h={10}
        bg="blue.700"
        rounded="full"
        _pressed={{
          bg: "blue.500",
        }}
      >
      <Icon as={PencilSimpleLine} color="gray.600" />
      </Button>
    </Center>
  );
}
