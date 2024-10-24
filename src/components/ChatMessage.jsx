import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const ChatMessage = ({ message, isUser }) => (
	<Flex
		justify={isUser ? "flex-end" : "flex-start"}
		mb={3}
		p={4}
		maxWidth='100%'
		alignItems='center'>
		{!isUser && <Avatar size='xs' src='/favicon.png' />}
		<Box
			bg={isUser ? "blue.500" : "transparent"}
			color='white'
			px={4}
			py={2}
			borderRadius='3xl'
			maxW={isUser ? "400px" : "600px"}>
			<Text>{message}</Text>
		</Box>
	</Flex>
);

export default ChatMessage;
