import React from "react";
import { Box, Flex, Spacer, Button, Icon, Text } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

type Props = {};

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Box className="font-NotoSan">
      <Header />
      <Spacer className="h-header" />
      <Box>
        <Box className="min-h-screen w-full bg-background" p={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

const Header: React.FC = () => {
  return (
    <Flex
      className="fixed z-50 h-header w-full bg-opacity-10 bg-none backdrop-blur-sm"
      alignItems="center"
      justifyContent="space-between"
      pl={4}
      pr={4}
    >
      <Box flex={1}>
        <Icon as={BiMenu} />
      </Box>
      <Box flex={1}>
        <Text textAlign="center">会社名</Text>
      </Box>
      <Flex flex={1} justifyContent="flex-end">
        <Button variant="solid" colorScheme="blackAlpha">
          ログイン
        </Button>
      </Flex>
    </Flex>
  );
};

const SideBar: React.FC = () => {
  return <Box className="h-full w-sidebar bg-backgroundLight">Side</Box>;
};

const Footer: React.FC = () => {
  return <Box>Footer</Box>;
};
export default Layout;
