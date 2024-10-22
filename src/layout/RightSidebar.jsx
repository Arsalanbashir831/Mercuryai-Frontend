import { Box, Button, VStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const RightSidebar = ({ headerComponent, headerButton, children }) => {
	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerComponent && headerComponent}

			{headerButton && (
				<Box p={4}>
					<Button
						leftIcon={<Icon icon={headerButton.icon} />}
						colorScheme='teal'
						width='100%'
						onClick={headerButton.onClick}>
						{headerButton.label}
					</Button>
				</Box>
			)}

			<Box
				flex={1}
				overflowY='auto'
				m={4}
				mt={0}
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
