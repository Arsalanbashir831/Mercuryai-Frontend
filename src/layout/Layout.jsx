import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	return (
		<Flex direction='column' height='100vh' overflow='hidden'>
			<Header />
			<Box as='main' flex='1' overflow='hidden'>
				<Outlet />
			</Box>
			<Box as='footer' bg='gray.800' p={4} color='white'>
				Footer
			</Box>
		</Flex>
	);
};

export default Layout;
