import React from "react";
import { Box, Flex, Input, IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ChatArea = () => (
	<Flex flex={1} direction='column' height='100%'>
		<Box flex={1} overflowY='auto' p={4}>
			{/* Chat messages would go here */}
			{[...Array(50)].map((_, i) => (
				<Box
					key={i}
					p={2}
					mb={2}
					bg={i % 2 === 0 ? "blue.100" : "green.100"}
					borderRadius='md'>
					Message {i + 1}
				</Box>
			))}
		</Box>
		<Flex p={4} borderTop='1px' borderColor='gray.200'>
			<IconButton icon={<Icon icon='bi:paperclip' />} mr={2} />
			<Input placeholder='Type a message...' mr={2} />
			<IconButton
				icon={<Icon icon='bi:arrow-up-circle-fill' />}
				colorScheme='blue'
			/>
		</Flex>
	</Flex>
);

export default ChatArea;
