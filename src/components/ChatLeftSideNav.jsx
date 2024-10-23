import { useState } from "react";
import { groupChatsByDate } from "../utils";
import { Box, Heading } from "@chakra-ui/react";

// Mock Data with Timestamps
const chatData = [
	{ id: 1, title: "Chat 1", timestamp: new Date() },
	{ id: 2, title: "Chat 2", timestamp: new Date(Date.now() - 86400000) },
	{ id: 3, title: "Chat 3", timestamp: new Date(Date.now() - 2 * 86400000) },
	{ id: 4, title: "Chat 4", timestamp: new Date(Date.now() - 10 * 86400000) },
	{ id: 5, title: "Chat 5", timestamp: new Date(Date.now() - 20 * 86400000) },
	{ id: 6, title: "Chat 6", timestamp: new Date(Date.now() - 40 * 86400000) },
];

export default function ChatLeftSideNav() {
	const [selectedChat, setSelectedChat] = useState(1);
	const groupedChats = groupChatsByDate(chatData);

	const handleChatClick = (chatId) => {
		setSelectedChat(chatId);
	};

	return Object.entries(groupedChats).map(
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
							bg={selectedChat === chat.id ? "blue.500" : "transparent"}
							_hover={{
								bg: selectedChat === chat.id ? "blue.600" : "blue.500",
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
	);
}
