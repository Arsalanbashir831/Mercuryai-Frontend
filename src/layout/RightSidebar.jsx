import { Box, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";

const RightSidebar = ({ headerComponent, headerButton, children }) => {
	// Define dynamic colors based on light/dark mode
	const bgColor = useColorModeValue("gray.100", "blackAlpha.500");
	const scrollTrackColor = useColorModeValue("gray.300", "gray.900");
	const scrollThumbColor = useColorModeValue("gray.500", "gray.600");

	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerComponent && headerComponent}

			{headerButton && (
				<Box py={4} pr={4}>
					<CustomButton
						label={headerButton.label}
						leftIcon={headerButton.icon}
						onClick={headerButton.onClick}
					/>
				</Box>
			)}

			<Box
				flex={1}
				overflowY='auto'
				m={4}
				ml={0}
				mt={headerComponent || headerButton ? 0 : 4}
				bg={bgColor}
				borderRadius={10}>
				<VStack
					spacing={2}
					align='stretch'
					maxH={"calc(100% - 10px)"}
					overflowY='auto'
					p={4}
					sx={{
						"&::-webkit-scrollbar": { width: "4px" },
						"&::-webkit-scrollbar-track": { background: scrollTrackColor },
						"&::-webkit-scrollbar-thumb": {
							background: scrollThumbColor,
							borderRadius: "full",
						},
					}}>
					{children}
				</VStack>
			</Box>
		</Flex>
	);
};

export default RightSidebar;
