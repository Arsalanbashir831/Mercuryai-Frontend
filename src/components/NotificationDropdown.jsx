// NotificationDropdown.js
import React from "react";
import {
	Box,
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	VStack,
	Image,
	useColorModeValue,
	IconButton,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const NotificationDropdown = ({ notifications, icon = "mdi:bell-outline" }) => {
	const menuBgColor = useColorModeValue("gray.800", "white");
	const menuItemColor = useColorModeValue("white", "gray.800");
	const menuHoverBgColor = useColorModeValue("gray.700", "gray.100");
	const textColor = useColorModeValue("white", "gray.800");

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				icon={<Icon icon='mdi:bell-outline' />}
				variant='ghost'
				color={textColor}
				fontSize='24px'
				_hover={{ bg: menuHoverBgColor }}
				_active={{ bg: menuHoverBgColor }}
			/>
			<MenuList
				bg={menuBgColor}
				borderColor={menuHoverBgColor}
				maxH='300px' // Control the max height for scrolling
				overflowY='auto' // Enable vertical scrolling
				p={0}>
				<VStack align='stretch' spacing={0}>
					{notifications.map((notification, index) => (
						<MenuItem
							key={index}
							bg={menuBgColor}
							color={menuItemColor}
							_hover={{ bg: menuHoverBgColor }}
							p={3}
							borderBottomWidth={1}
							borderColor={menuHoverBgColor}>
							<Flex direction='column' align='start'>
								<Text fontWeight='bold' mb={1}>
									{notification.title}
								</Text>
								{notification.image && (
									<Image
										src={notification.image}
										alt='Notification Image'
										mb={2}
									/>
								)}
								<Text fontSize='sm' mb={2}>
									{notification.message}
								</Text>
								{notification.link && (
									<Button
										size='sm'
										variant='link'
										color='blue.400'
										onClick={() => window.open(notification.link, "_blank")}>
										Read More
									</Button>
								)}
							</Flex>
						</MenuItem>
					))}
				</VStack>
				{notifications.length === 0 && (
					<Box p={4}>
						<Text>No new notifications.</Text>
					</Box>
				)}
			</MenuList>
		</Menu>
	);
};

export default NotificationDropdown;
