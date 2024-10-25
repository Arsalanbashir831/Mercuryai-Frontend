import { Box, VStack, Flex } from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";

const RightSidebar = ({ headerComponent, headerButton, children }) => {
	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerComponent && headerComponent}

			{headerButton && (
				<Box p={4}>
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
				bg='blackAlpha.500'
				borderRadius={10}>
				<VStack
					spacing={2}
					align='stretch'
					maxH={"calc(100% - 10px)"}
					overflowY='auto'
					p={4}
					sx={{
						"&::-webkit-scrollbar": { width: "4px" },
						"&::-webkit-scrollbar-track": { background: "gray.900" },
						"&::-webkit-scrollbar-thumb": {
							background: "gray.600",
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
