import { Center, IPressableProps, Pressable } from "native-base";
import { Plus } from "phosphor-react-native";

type Props = IPressableProps & {};

export function AdsPhoto({ ...rest }) {
  return (
    <Pressable
      bg="gray.500"
      w={100}
      h={100}
      rounded="md"
      justifyContent="center"
      alignItems="center"
      _pressed={{
        bg: "gray.400",
      }}
      {...rest}
    >
      <Plus color="gray" />
    </Pressable>
  );
}
