import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box marginTop="20" marginBottom="10">
      <Center marginBottom="5">
        <Heading
          as="h2"
          size="2xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="unset"
          fontWeight="extrabold"
        >
          Indonesia Jokes
        </Heading>
      </Center>
      <Center>
        <Text textAlign="center" color="gray.600">
          Kumpulan jokes lucu yang tersedia dalam bahasa Indonesia. Project ini
          dibuat untuk memeriahkan #hacktoberfest2021
        </Text>
      </Center>
    </Box>
  );
}
