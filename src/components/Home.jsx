import { Container, Divider } from "@chakra-ui/react";
import List from "./List";
import jokes from "../assets/jokes.json";

const data = jokes.data;

export default function Home(props) {
  return (
    <Container maxW="container.xl" centerContent>
      <Divider orientation="horizontal" borderColor={props.isLightMode ? "black" : "white"} marginBottom="10" />
      <List data={data} />
    </Container>
  );
}
