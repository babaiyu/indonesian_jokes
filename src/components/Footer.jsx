import { Stack, Divider, Center, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack marginTop="20" marginBottom="10">
      <Divider />
      <Center>
        <Text fontSize="sm">Copyright &copy; 2021</Text>
      </Center>
    </Stack>
  );
}
