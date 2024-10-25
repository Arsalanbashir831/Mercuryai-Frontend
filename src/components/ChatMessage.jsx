import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const ChatMessage = ({ message, isUser }) => {
	const botBg = useColorModeValue("gray.100", "transparent");
	const textColor = useColorModeValue("black", "white");
	const boxShadow = useColorModeValue("md", "none");

	return (
		<Flex
			justify={isUser ? "flex-end" : "flex-start"}
			align='center'
			mb={3}
			p={2}
			maxWidth='100%'
			gap={2}>
			{/* Display Avatar for non-user messages */}
			{!isUser && <Avatar size='sm' src='/favicon.png' />}

			{/* Message Bubble */}
			<Box
				bg={isUser ? "blue.500" : botBg}
				px={4}
				py={2}
				borderRadius='3xl'
				boxShadow={boxShadow}
				maxW='80%'
				wordBreak='break-word'
				overflowWrap='anywhere'
				transition='all 0.3s ease'>
				<Text fontSize='md' color={isUser ? "white" : textColor}>
					{message}
				</Text>
			</Box>
		</Flex>
	);
};

export default ChatMessage;
