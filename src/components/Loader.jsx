import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
// import loading from "./loading.gif";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        {/* <Image src={loading} alt="loading"></Image> */}
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;
