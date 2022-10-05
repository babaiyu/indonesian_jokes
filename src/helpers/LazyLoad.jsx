import { Suspense } from "react";
import { Button, Center } from "@chakra-ui/react";

export default function LazyLoad({ children }) {
  return <Suspense fallback={<ButtonLoading />}>{children}</Suspense>;
}

const ButtonLoading = () => (
  <Center>
    <Button isLoading colorScheme="blue" variant="solid" />
  </Center>
);
