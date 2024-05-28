import { Box, Text, IBoxProps, HStack } from "native-base";
import { XCircle } from "phosphor-react-native";

type Props = IBoxProps & {
  isUsed?: boolean;
  isBottomSheet?: boolean;
};

export function StatusCard({ isUsed = false, isBottomSheet = false }: Props) {
  return (
    <Box
      bg={isUsed ? "gray.200" : "blue.500"}
      alignItems="center"
      justifyContent="center"
      rounded="full"
      w={58}
      h={19}
      mr={1}
    >
      <HStack>
        <Text
          color={isBottomSheet && isUsed ? "gray.300" : "gray.700"}
          fontSize="xs"
          fontFamily="heading"
          ml={isBottomSheet ? 0.5 : 0}
        >
          {isUsed ? "USADO" : "NOVO"}
        </Text>
        {isBottomSheet && !isUsed ? (
          <XCircle
            color="white"
            weight="fill"
            size={14}
            style={{
              alignSelf: "center",
              marginLeft: 6,
            }}
          />
        ) : undefined}
      </HStack>
    </Box>
  );
}
