import { Container, Divider } from "@chakra-ui/react";
import Header from "./Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Divider orientation="horizontal" colorScheme="blue" />
    </Container>
  );
}
