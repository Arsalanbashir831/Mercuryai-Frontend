import { useState } from "react";
import { groupChatsByDate } from "../utils";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

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

	// Dynamic colors based on light/dark mode
	const sectionColor = useColorModeValue("gray.600", "gray.300");
	const chatTextColor = useColorModeValue("black", "white");
	const selectedBgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
	const hoverBgColor = useColorModeValue("blackAlpha.50", "whiteAlpha.100");

	const handleChatClick = (chatId) => {
		setSelectedChat(chatId);
	};

	return Object.entries(groupedChats).map(
		([section, chats]) =>
			chats.length > 0 && (
				<Box key={section} mb={2}>
					<Heading size='xs' mb={2} color={sectionColor}>
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
							py={2}
							px={3}
							color={chatTextColor}
							bg={selectedChat === chat.id ? selectedBgColor : "transparent"}
							_hover={{
								bg: selectedChat === chat.id ? selectedBgColor : hoverBgColor,
							}}
							borderRadius='md'
							cursor='pointer'
							onClick={() => handleChatClick(chat.id)}>
							{chat.title}
						</Box>
					))}
				</Box>
			)
	);
}
