import {Box, Center, Heading, Text, Tooltip, Image} from "@chakra-ui/react";
import darkicon from "../assets/darkicon.png"

export default function Header(props) {

    return (
        <Box marginTop="20" marginBottom="10">
            <Center marginBottom="5">
                <a href="https://github.com/babaiyu/indonesian_jokes" target="_blank">
                    <Tooltip hasArrow label="Fork me!" bg="gray.300" color="black" placement="right-start">
                        <img className="iconStyle" src={darkicon} alt="github-logo"/>
                    </Tooltip>
                </a>
                <Heading
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="unset"
                    fontWeight="extrabold"
                >Indonesia Jokes
                </Heading>
                <Box
                    marginLeft="20"
                    border="1px" borderColor="grey"
                    bg={props.isLightMode ? "black" : "white"}
                    borderRadius="10" w="3rem" h="5"
                    onClick={props.toggleTheme}>
                    <Box
                        float={props.isLightMode ? "left" : "right"}
                        bg={props.isLightMode ? "white" : "black"}
                        borderRadius="10" w="5" h="5">
                    </Box>
                </Box>
            </Center>
            <Center>
                <Text textAlign="center">
                    Kumpulan jokes lucu yang tersedia dalam bahasa Indonesia. Project ini
                    dibuat untuk memeriahkan #hacktoberfest2022
                </Text>
            </Center>
            <Center my={4}>
                <Box mx={2}>
                    <a href="https://github.com/babaiyu/indonesian_jokes/issues" target="_blank">
                        <Image src="https://img.shields.io/github/issues/babaiyu/indonesian_jokes" alt="issue-count" />
                    </a>
                </Box>
                <Box mx={2}>
                    <a href="https://github.com/babaiyu/indonesian_jokes/pulls" target="_blank">
                        <Image src="https://img.shields.io/github/issues-pr/babaiyu/indonesian_jokes" alt="pull-request-count" />
                    </a>
                </Box>
                <Box mx={2}>
                    <a href="https://github.com/babaiyu/indonesian_jokes/graphs/contributors" target="_blank">
                        <Image src="https://img.shields.io/github/contributors/babaiyu/indonesian_jokes" alt="contributor-count" />
                    </a>
                </Box>
            </Center>
        </Box>
    );
}
