import { HStack, Text } from "native-base";
import {
  Barcode,
  QrCode,
  Money,
  CreditCard,
  Bank,
} from "phosphor-react-native";

type Props = {
  iconType: string;
  title: string;
};

const ICON_SIZE = 22;
const ICON_COLOR = "black";
export function AdsPaymentType(props: Props) {
  return (
    <HStack>
      {props.iconType === "barCode" && <Barcode size={ICON_SIZE} color={ICON_COLOR} />}
      {props.iconType === "QrCode" && <QrCode size={ICON_SIZE} color={ICON_COLOR} />}
      {props.iconType === "Money" && <Money size={ICON_SIZE} color={ICON_COLOR} />}
      {props.iconType === "CreditCard" && <CreditCard size={ICON_SIZE} color={ICON_COLOR} />}
      {props.iconType === "Bank" && <Bank size={ICON_SIZE} color={ICON_COLOR} />}
      <Text ml={2} mb={2} color="gray.200" fontFamily="body" fontSize="sm">
        {props.title}
      </Text>
    </HStack>
  );
}
