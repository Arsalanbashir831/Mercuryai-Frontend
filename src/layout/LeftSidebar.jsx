import { Box, VStack, Flex, Heading, Divider } from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";

const LeftSidebar = ({ header, headerButton, children, footerButton }) => {
	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerButton && (
				<Box p={4}>
					<CustomButton
						label={headerButton.label}
						leftIcon={headerButton.icon}
						borderRadius='2xl'
					/>
				</Box>
			)}

			{header && (
				<Box p={4} pr={0} pb={1} w='100%'>
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
				mr={0}
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
					<CustomButton label={footerButton.label} borderRadius='2xl' />
				</Box>
			)}
		</Flex>
	);
};

export default LeftSidebar;
