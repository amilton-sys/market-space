import { Center, Heading, ITextProps, Text } from "native-base";
import LogoSvg from "@assets/logo.svg";

type Props = ITextProps & {
  title: string;
  subtitle: string;
  w: number;
  h: number;
};

export function Header({ title, subtitle, w, h, ...rest }: Props) {
  return (
    <Center>
      <LogoSvg width={w} height={h} />
      <Text fontSize="4xl" fontFamily="heading" {...rest}>
        {title}
      </Text>
      <Text color="gray.300" fontSize="sm">
        {subtitle}
      </Text>
    </Center>
  );
}
