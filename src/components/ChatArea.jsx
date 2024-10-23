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
	const bgColor = "gray.900";
	const textColor = "white";
	const menuBgColor = "gray.800";
	const menuItemColor = "white";
	const menuHoverBgColor = "gray.700";

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
		const newMessages = [...messages, newUserMessage];
		setMessages(newMessages);
		setInputValue("");
		setMessageCount((prev) => prev + 1);

		// Automatically respond with a dummy message
		const randomResponse =
			automatedResponses[Math.floor(Math.random() * automatedResponses.length)];

		// Add a small delay to simulate real-time response
		setTimeout(() => {
			const aiResponse = { text: randomResponse, isUser: false };
			setMessages((prevMessages) => [...prevMessages, aiResponse]);
		}, 1000);
	};

	useEffect(() => {
		if (messageCount >= 2) {
			setIsWarningVisible(true);
			setIsDisabled(true);

			// Disable input and buttons for 10 seconds
			setTimeout(() => {
				setIsDisabled(false);
				setMessageCount(0); // Reset the limit
				setIsWarningVisible(false);
			}, 50000);
		}
	}, [messageCount]);

	return (
		<Flex
			flex={1}
			direction='column'
			height='100%'
			m={4}
			pb={4}
			bg={bgColor}
			borderRadius={10}>
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
				maxH={"calc(100% - 10px)"}
				sx={{
					"&::-webkit-scrollbar": { width: "4px" },
					"&::-webkit-scrollbar-track": { background: "gray.900" },
					"&::-webkit-scrollbar-thumb": {
						background: "gray.600",
						borderRadius: "full",
					},
				}}>
				{messages.map((msg, index) => (
					<ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
				))}
			</Box>

			{/* Input Area with Buttons inside the field */}
			<Flex p={4} direction='column'>
				{isWarningVisible && (
					<Box
						bg='white'
						color='black'
						p={3}
						mx={4}
						textAlign='center'
						borderRadius='3xl'
						borderBottomEndRadius={0}
						borderBottomStartRadius={0}>
						<Text>
							Hi Customer Name, you have exceeded the limit of 25 daily
							messages. Please wait 24:00 (Timer) to regain access to the chat,
							otherwise upgrade.
						</Text>
					</Box>
				)}
				<InputGroup>
					{/* Attachment Button */}
					<InputLeftElement>
						<Menu>
							<MenuButton
								as={IconButton}
								variant='ghost'
								color='black'
								_hover={{ bg: "transparent" }}
								_active={{ bg: "transparent" }}
								icon={<Icon icon='bi:paperclip' fontSize={20} />}
								isDisabled={isDisabled}
							/>
							<MenuList bg={menuBgColor} borderColor='blue.900'>
								{attachmentCommands.map(
									({ icon, label, command, color }, index) => (
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
									)
								)}
							</MenuList>
						</Menu>
					</InputLeftElement>

					{/* Text Input */}
					<Input
						placeholder='Type a message...'
						color={textColor}
						bg={menuBgColor}
						_hover={{ borderColor: "transparent" }}
						_active={{ bg: menuBgColor, outline: "none" }}
						_focusVisible={{ bg: menuBgColor, outline: "none" }}
						borderRadius='full'
						borderColor='transparent'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						ref={inputRef}
						isDisabled={isDisabled}
						onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
					/>

					{/* Send Button */}
					<InputRightElement>
						<IconButton
							icon={
								<Icon
									icon='bi:arrow-up-circle-fill'
									fontSize={24}
									color='teal'
								/>
							}
							colorScheme='transparent'
							borderRadius='full'
							onClick={handleSendMessage}
							isDisabled={isDisabled}
						/>
					</InputRightElement>
				</InputGroup>

				{/* Message */}
				<Text fontSize='xs' color='gray.400' mt={2} textAlign='center'>
					MercuryAI può commettere errori. Considera di verificare le
					informazioni importanti.
				</Text>
			</Flex>
		</Flex>
	);
};

export default ChatArea;
