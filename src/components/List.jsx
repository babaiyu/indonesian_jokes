import { Center, Wrap } from "@chakra-ui/react";
import ListItem from "./ListItem";

export default function List(props) {
  const { data } = props;

  return (
    <Center>
      <Wrap>
        {data.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Wrap>
    </Center>
  );
}
