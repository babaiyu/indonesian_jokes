import { Container, Divider } from "@chakra-ui/react";
import List from "./List";

const data = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <Container maxW="container.lg" centerContent>
      <Divider orientation="horizontal" colorScheme="blue" marginBottom="10" />
      <List data={data} />
    </Container>
  );
}
