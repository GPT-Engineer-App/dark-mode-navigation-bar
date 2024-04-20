import { Box, Flex, IconButton, useColorMode, useColorModeValue, Image } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = colorMode === "light" ? FaMoon : FaSun;

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
      <Flex align="center" mr={5}>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYyUyMGxvZ298ZW58MHx8fHwxNzEzNjQwMTM2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
      </Flex>

      <IconButton icon={<SwitchIcon />} onClick={toggleColorMode} variant="ghost" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
    </Flex>
  );
};

export default Index;
