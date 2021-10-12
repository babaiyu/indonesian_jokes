import { Box, WrapItem } from "@chakra-ui/react";

export default function ListItem({ item }) {
  return (
    <WrapItem>
      <Box
        width="max-content"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Box m="2" fontWeight="semibold" as="h4" lineHeight="tight">
          {item.jokes}
        </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {item.author}
        </Box>
      </Box>
    </WrapItem>
  );
}
