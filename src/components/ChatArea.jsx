import React, { useEffect, useRef, useState } from "react";
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useColorModeValue,
	Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import ChatMessage from "./ChatMessage";

const chatCommands = [
	{ icon: "mdi:file-export", label: "Extract Chat To CSV", command: "⌘E" },
	{ icon: "mdi:file-export", label: "Extract Chat To TXT", command: "⌘T" },
	{ icon: "mdi:share", label: "Share", command: "⌘S" },
	{ icon: "mdi:refresh", label: "Regenerate Message", command: "⌘R" },
	{ icon: "mdi:delete", label: "Delete Chat", command: "⌘D", color: "red.400" },
];

const attachmentCommands = [
	{ icon: "bi:file-earmark-text", label: "Generate Text" },
	{ icon: "bi:image", label: "Generate Images" },
	{ icon: "bi:file-earmark", label: "Generate Documents" },
	{ icon: "bi:cloud-upload", label: "Upload Documents" },
	{ icon: "bi:cloud-upload-fill", label: "Upload Images" },
];

const automatedResponses = [
	"Hello! How can I assist you today?",
	"Sure, I’ll look into that for you!",
	"Can you provide more details?",
	"I'm not sure about that. Let me double-check.",
	"Here’s what I found: [Link to information]",
	"Thank you for your patience.",
	"Is there anything else I can help with?",
	"That’s a great question! Let me explain...",
];

const ChatArea = () => {
	// Light/Dark Mode Colors
	const bgColor = useColorModeValue("gray.100", "gray.900");
	const textColor = useColorModeValue("black", "white");
	const menuBgColor = useColorModeValue("white", "gray.800");
	const menuItemColor = useColorModeValue("black", "white");
	const menuHoverBgColor = useColorModeValue("gray.200", "gray.700");
	const scrollTrackColor = useColorModeValue("gray.300", "gray.900");
	const scrollThumbColor = useColorModeValue("gray.500", "gray.600");

	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [messageCount, setMessageCount] = useState(0);
	const [isWarningVisible, setIsWarningVisible] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const inputRef = useRef(null);

	const handleSendMessage = () => {
		if (inputValue.trim() === "") return;

		const newUserMessage = { text: inputValue, isUser: true };
		setMessages((prev) => [...prev, newUserMessage]);
		setInputValue("");
		setMessageCount((prev) => prev + 1);

		const randomResponse =
			automatedResponses[Math.floor(Math.random() * automatedResponses.length)];

		setTimeout(() => {
			const aiResponse = { text: randomResponse, isUser: false };
			setMessages((prev) => [...prev, aiResponse]);
		}, 1000);
	};

	useEffect(() => {
		if (messageCount >= 2) {
			setIsWarningVisible(true);
			setIsDisabled(true);

			setTimeout(() => {
				setIsDisabled(false);
				setMessageCount(0);
				setIsWarningVisible(false);
			}, 50000);
		}
	}, [messageCount]);

	return (
		<Flex
			flex={1}
			direction='column'
			height='97%'
			m={4}
			bg={bgColor}
			borderRadius={10}
		>
			<Box p={4} borderBottom='1px' borderColor='gray.200'>
				<Flex align='center'>
					<Box flex={1}>
						<Menu
							onOpen={() => setIsOpen(true)}
							onClose={() => setIsOpen(false)}>
							<MenuButton
								as={Button}
								rightIcon={
									<Icon
										icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
										width='20'
										height='20'
									/>
								}
								variant='ghost'
								textAlign='left'
								fontWeight='bold'
								color={textColor}
								_hover={{ bg: "transparent" }}
								_active={{ bg: "transparent" }}>
								Mercury AI Chat
							</MenuButton>
							<MenuList bg={menuBgColor} borderColor='blue.900'>
								{chatCommands.map(({ icon, label, command, color }, index) => (
									<MenuItem
										key={index}
										fontSize={14}
										icon={<Icon icon={icon} />}
										command={command}
										color={color || menuItemColor}
										bg={menuBgColor}
										_hover={{ bg: menuHoverBgColor }}>
										{label}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Box>

			<Box
				flex={1}
				overflowY='auto'
				mb={4}
				maxH='calc(100% - 10px)'
				sx={{
					"&::-webkit-scrollbar": { width: "4px" },
					"&::-webkit-scrollbar-track": { background: scrollTrackColor },
					"&::-webkit-scrollbar-thumb": {
						background: scrollThumbColor,
						borderRadius: "full",
					},
				}}>
				{messages.map((msg, index) => (
					<ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
				))}
			</Box>

			<Flex p={4} direction='column'>
				{isWarningVisible && (
					<Box
						bg='white'
						color='black'
						p={3}
						mx={4}
						textAlign='center'
						borderRadius='3xl'
						borderBottomRadius={0}>
						<Text>
							You have exceeded the message limit. Please wait to regain access
							or upgrade your plan.
						</Text>
					</Box>
				)}

				<InputGroup>
					<InputLeftElement>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<Icon icon='bi:paperclip' fontSize={20} />}
								variant='ghost'
								isDisabled={isDisabled}
								bg='transparent'
								_hover={{ bg: "transparent" }}
								_active={{ bg: "transparent" }}
							/>
							<MenuList bg={menuBgColor} borderColor='blue.900'>
								{attachmentCommands.map(({ icon, label }, index) => (
									<MenuItem
										key={index}
										fontSize={14}
										icon={<Icon icon={icon} />}
										bg={menuBgColor}
										_hover={{ bg: menuHoverBgColor }}>
										{label}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</InputLeftElement>

					<Input
						placeholder='Type a message...'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
						color={textColor}
						bg={menuBgColor}
						borderRadius='full'
						isDisabled={isDisabled}
					/>

					<InputRightElement>
						<IconButton
							icon={<Icon icon='bi:arrow-up-circle-fill' fontSize={24} />}
							onClick={handleSendMessage}
							isDisabled={isDisabled}
							bg='transparent'
							_hover={{ bg: "transparent" }}
						/>
					</InputRightElement>
				</InputGroup>
			</Flex>
		</Flex>
	);
};

export default ChatArea;
