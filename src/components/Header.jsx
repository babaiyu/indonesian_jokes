import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box marginTop="20" marginBottom="20">
      <Center>
        <Heading as="h2" size="2xl">
          Indonesia Jokes
        </Heading>
      </Center>
      <Center>
        <Text textAlign="center">
          Kumpulan jokes-jokes lucu yang tersedia dalam bahasa Indonesia.
          Project ini dibuat untuk memeriahkan #hacktoberfest2021
        </Text>
      </Center>
    </Box>
  );
}
