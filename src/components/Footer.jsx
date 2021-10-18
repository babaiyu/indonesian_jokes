import { Stack, Divider, Center, Text } from "@chakra-ui/react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Stack marginTop="20" marginBottom="10">
      <Divider />
      <Center>
        <Text fontSize="sm">Copyright &copy; {year}</Text>
      </Center>
    </Stack>
  );
}
