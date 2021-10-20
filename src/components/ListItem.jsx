import { Box, WrapItem, Avatar } from "@chakra-ui/react";
import theme from "../theme";

export default function ListItem({ item }) {
  // Navigate to github profile
  const onNavigate = () => {
    let link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    link.href = `https://github.com/${item.username}`;
    link.target = "_blank";

    let event = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });

    link.dispatchEvent(event);
  };

  return (
    <WrapItem>
      <Box
        width="max-content"
        borderWidth="thick"
        borderRadius="lg"
        overflow="hidden"
        p="2.5"
        borderColor={`rgb(${Math.floor(Math.random() * 256)},${
          100 + Math.floor(Math.random() * 256)
        },${50 + Math.floor(Math.random() * 256)})`}
        maxWidth="sm"
      >
        <Box fontWeight="semibold" as="h4" fontSize="larger" lineHeight="tight" mb="5">
          "{item.jokes}"
        </Box>
        <Box
          as="span"
          mt="2"
          color="gray.600"
          fontSize="sm"
          onClick={onNavigate}
          style={{ cursor: "pointer" }}
        >
          <Avatar
            name={item?.name || ""}
            src={item?.avatar || ""}
            size="xs"
            mr="1"
          />
          {item.name}
        </Box>
      </Box>
    </WrapItem>
  );
}
