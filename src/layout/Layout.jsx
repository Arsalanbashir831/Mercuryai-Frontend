import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	const bgColor = useColorModeValue("gray.700", "gray.100");

	return (
		<Flex direction='column' height='100vh' overflow='hidden' bg={bgColor}>
			<Header />
			<Box as='main' flex='1' overflow='hidden'>
				<Outlet />
			</Box>
		</Flex>
	);
};

export default Layout;
