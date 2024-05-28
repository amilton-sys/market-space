import { HStack, Text } from "native-base";
import { UserPhoto } from "./UserPhoto";

const PHOTO_SIZE = 6;

export function AdsContentHeader() {
  return (
    <HStack alignItems="center">
      <UserPhoto
        alignSelf="flex-start"
        size={PHOTO_SIZE}
        isProfile
        alt="Foto de perfil"
        mr={2}
        source={{
          uri: "https://github.com/amilton-sys.png",
        }}
      />
      <Text color="gray.300">Amilton José</Text>
    </HStack>
  );
}
