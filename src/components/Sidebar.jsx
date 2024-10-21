import React, { useState } from "react";
import { Box, Button, VStack, Flex, Heading } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

// Mock Data with Timestamps
const chatData = [
	{ id: 1, title: "Chat 1", timestamp: new Date() },
	{ id: 2, title: "Chat 2", timestamp: new Date(Date.now() - 86400000) },
	{ id: 3, title: "Chat 3", timestamp: new Date(Date.now() - 2 * 86400000) },
	{ id: 4, title: "Chat 4", timestamp: new Date(Date.now() - 10 * 86400000) },
	{ id: 5, title: "Chat 5", timestamp: new Date(Date.now() - 20 * 86400000) },
	{ id: 6, title: "Chat 6", timestamp: new Date(Date.now() - 40 * 86400000) },
];

// Helper Function to Group Chats by Date
const groupChatsByDate = (chats) => {
	const today = new Date();

	const grouped = {
		today: [],
		yesterday: [],
		last7Days: [],
		older: [],
	};

	chats.forEach((chat) => {
		const chatDate = chat.timestamp;
		const diffInDays = Math.floor((today - chatDate) / 86400000);

		if (diffInDays === 0) {
			grouped.today.push(chat);
		} else if (diffInDays === 1) {
			grouped.yesterday.push(chat);
		} else if (diffInDays <= 7) {
			grouped.last7Days.push(chat);
		} else {
			grouped.older.push(chat);
		}
	});

	return grouped;
};

const Sidebar = () => {
	const [selectedChat, setSelectedChat] = useState(1); // Track selected chat
	const groupedChats = groupChatsByDate(chatData);

	const handleChatClick = (chatId) => {
		setSelectedChat(chatId);
	};

	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			<Box p={4}>
				<Button
					leftIcon={<Icon icon='dashicons:plus-alt' />}
					colorScheme='teal'
					borderRadius='2xl'
					width='100%'>
					New Chat
				</Button>
			</Box>

			<Box
				flex={1}
				overflowY='auto'
				position='relative'
				m={4}
				mt={0}
				bg='blackAlpha.500'
				borderRadius={10}>
				<VStack align='stretch' spacing={4} p={4}>
					{Object.entries(groupedChats).map(
						([section, chats]) =>
							chats.length > 0 && (
								<Box key={section}>
									<Heading size='xs' mb={2} color='gray.300'>
										{section === "today"
											? "Today"
											: section === "yesterday"
											? "Yesterday"
											: section === "last7Days"
											? "Last 7 Days"
											: "Older"}
									</Heading>
									{chats.map((chat) => (
										<Box
											key={chat.id}
											py={1}
											px={2}
											color='white'
											bg={selectedChat === chat.id ? "teal.500" : "transparent"}
											_hover={{
												bg: selectedChat === chat.id ? "teal.600" : "teal.500",
											}}
											borderRadius='full'
											mb={1}
											cursor='pointer'
											onClick={() => handleChatClick(chat.id)}>
											{chat.title}
										</Box>
									))}
								</Box>
							)
					)}
				</VStack>
			</Box>

			<Box px={4} pb={4}>
				<Button colorScheme='teal' width='100%' borderRadius='2xl'>
					Effettua subito l’upgrade
				</Button>
			</Box>
		</Flex>
	);
};

export default Sidebar;
