import {
  FormControl,
  Input as NativeBaseInput,
  IInputProps,
  Pressable,
} from "native-base";
import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";
type Props = IInputProps & {
  errorMessage?: string | null;
  isPassword?: boolean;
};
export function Input({
  errorMessage = null,
  isInvalid,
  isPassword = false,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;
  const [show, setShow] = useState(false);
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={10}
        px={4}
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
                <Eye size={24} color="gray" style={{ marginRight: 15 }} />
              ) : (
                <EyeSlash size={24} color="gray" style={{ marginRight: 15 }} />
              )}
            </Pressable>
          ) : undefined
        }
        type={isPassword ? show ? "text" : "password" : "text"}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
