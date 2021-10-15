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

  const randomColor = () => {
    const skipColors = ['white', 'black', 'current', 'currentColor', 'transparent'];
    const colors = Object
      .keys(theme.colors)
      .filter(color => !skipColors.includes(color))
      .map(color => color);
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <WrapItem>
      <Box
        width="max-content"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgGradient={`linear(to-r, ${randomColor()}.200, ${randomColor()}.500)`}
        p="2.5"
      >
        <Box fontWeight="semibold" as="h4" lineHeight="tight">
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
