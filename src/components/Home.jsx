import { Container, Divider } from "@chakra-ui/react";
import List from "./List";
import jokes from "../assets/jokes.json";

const data = jokes.data;

export default function Home() {
  return (
    <Container maxW="container.lg" centerContent>
      <Divider orientation="horizontal" colorScheme="blue" marginBottom="10" />
      <List data={data} />
    </Container>
  );
}
