import { Box, Button, VStack, Flex, Heading, Divider } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const LeftSidebar = ({ header, headerButton, children, footerButton }) => {
	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerButton && (
				<Box p={4}>
					<Button
						leftIcon={<Icon icon={headerButton.icon} />}
						colorScheme='teal'
						borderRadius='2xl'
						width='100%'>
						{headerButton.label}
					</Button>
				</Box>
			)}

			{header && (
				<Box p={4} pb={1}>
					<Heading
						size='md'
						textAlign='center'
						color='white'
						bg='blackAlpha.500'
						p={4}
						mb={0}
						borderTopRadius={10}>
						{header}
					</Heading>
				</Box>
			)}

			<Box
				flex={1}
				overflowY='auto'
				position='relative'
				m={4}
				mt={0}
				bg='blackAlpha.500'
				borderRadius={header ? "0 0 10px 10px" : "10px"}>
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

			<Divider mx={4} mb={4} w='90%' />

			{footerButton && (
				<Box px={4} pb={4}>
					<Button colorScheme='teal' width='100%' borderRadius='2xl'>
						{footerButton.label}
					</Button>
				</Box>
			)}
		</Flex>
	);
};

export default LeftSidebar;
