import { Box, Center, Heading } from "@chakra-ui/layout";
import React from "react";
import Loader from "react-loader-spinner";
import { useLanguagesQuery } from "../generated/graphql";

interface FetchProps {}

const Fetch: React.FC<FetchProps> = () => {
  const { error, data, loading } = useLanguagesQuery();
  return (
    <>
      <Box m="40px">
        <pre>
          {loading ? (
            <Center>
              <Loader
                type="Rings"
                color="#FFA500"
                height={100}
                width={100}
                timeout={3000}
              />
            </Center>
          ) : error ? (
            <Heading color="red">{error}</Heading>
          ) : (
            JSON.stringify(data?.languages, null, 2)
          )}
        </pre>
      </Box>
    </>
  );
};
export default Fetch;
