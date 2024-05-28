import { Box, HStack, Heading, IPressableProps, VStack } from "native-base";
import { ArrowLeft, Plus, PencilSimpleLine } from "phosphor-react-native";
import { Pressable, Text } from "react-native";

type Props = IPressableProps & {
  myAds?: boolean;
  myAdsDetais?: boolean;
  myAdsCreate?: boolean;
  title: string;
};

export function AdsHeader({
  myAds = false,
  myAdsDetais = false,
  myAdsCreate = false,
  title,
  ...rest
}: Props) {
  return (
    <VStack>
      {myAds ? (
        <Box alignItems="center" mt={9}>
          <HStack alignItems="center">
            <Pressable {...rest}>
              <ArrowLeft
                size={24}
                color="black"
                style={{
                  marginLeft: -110,
                  marginRight: 60,
                }}
              />
            </Pressable>
            <Heading fontSize="xl">{title}</Heading>
            {!myAdsCreate && (
              <Pressable>
                <Plus
                  style={{
                    marginRight: -90,
                    marginLeft: 60,
                  }}
                />
              </Pressable>
            )}
          </HStack>
        </Box>
      ) : (
        <HStack>
          <Box mt={9} ml={6} flex={1}>
            <Pressable {...rest}>
              <ArrowLeft size={24} color="black" />
            </Pressable>
          </Box>
          {myAdsDetais && (
            <Box mt={9} mr={6}>
              <Pressable {...rest}>
                <PencilSimpleLine size={24} color="black" />
              </Pressable>
            </Box>
          )}
        </HStack>
      )}
    </VStack>
  );
}
