import { Routes, Route } from "react-router-dom";
import { Box, Flex, useColorModeValue, useTheme } from "@chakra-ui/react";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
	const theme = useTheme();

	const bgColor = useColorModeValue(
		theme.colors.bgColor.dark,
		theme.colors.bgColor.light
	);

	return (
		<Flex direction='column' height='100vh' overflow='hidden' bg={bgColor}>
			<Header />
			<Box as='main' flex='1' overflow='hidden'>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route
						path='/dashboard/mercury-ai-training-course'
						element={<Dashboard />}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
			</Box>
		</Flex>
	);
};

export default App;
