import {
  FormControl,
  Input as NativeBaseInput,
  IInputProps,
  Pressable,
  Divider,
  HStack,
  VStack,
} from "native-base";
import { Eye, EyeSlash, MagnifyingGlass, Sliders } from "phosphor-react-native";
import { useState } from "react";
type Props = IInputProps & {
  errorMessage?: string | null;
  isPassword?: boolean;
  isSearch?: boolean;
  onSearch?: () => void;
  onFilter?: () => void;
};
export function Input({
  errorMessage = null,
  isInvalid,
  isPassword = false,
  isSearch = false,
  onSearch,
  onFilter,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;
  const [show, setShow] = useState(false);
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={10}
        px={2}
        borderWidth={0}
        fontSize="md"
        color="gray.200"
        fontFamily="body"
        placeholderTextColor="gray.400"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          borderWidth: 1,
          borderColor: "gray.200",
          bg: "gray.700",
        }}
        {...rest}
        InputRightElement={
          isPassword ? (
            <Pressable onPress={() => setShow(!show)}>
              {show ? (
                <EyeSlash size={24} color="gray" style={{ marginRight: 15 }} />
              ) : (
                <Eye size={24} color="gray" style={{ marginRight: 15 }} />
              )}
            </Pressable>
          ) : undefined || isSearch ? (
            <HStack>
              <Pressable onPress={onSearch}>
                <MagnifyingGlass size={24} color="black" />
              </Pressable>
              <Divider
                thickness="1"
                orientation="vertical"
                mx={2}
                h={18}
                mt={1}
              />
              <Pressable onPress={onFilter}>
                <Sliders size={24} color="black" style={{ marginRight: 15 }} />
              </Pressable>
            </HStack>
          ) : undefined
        }
        type={isPassword ? (show ? "text" : "password") : "text"}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
