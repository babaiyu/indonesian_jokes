import { Box, Text } from "@chakra-ui/react";

export default function ListItem() {
  return (
    <Box
      as="div"
      borderRadius="3xl"
      overflow="hidden"
      bg="red.200"
      padding="5"
      width={300}
      minHeight="md"
      maxHeight="xl"
    >
      <Text>Ini List Item</Text>
    </Box>
  );
}
