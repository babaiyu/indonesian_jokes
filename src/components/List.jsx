import { Wrap, WrapItem } from "@chakra-ui/react";
import ListItem from "./ListItem";

export default function List(props) {
  const { data } = props;

  return (
    <Wrap spacing="20px" align="center">
      {data.map((i, index) => (
        <WrapItem key={index}>
          <ListItem />
        </WrapItem>
      ))}
    </Wrap>
  );
}
