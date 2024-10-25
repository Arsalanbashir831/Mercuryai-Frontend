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
	useColorMode,
	useTheme,
	IconButton,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const NotificationDropdown = ({ notifications, icon = "mdi:bell-outline" }) => {
	const { colorMode } = useColorMode(); // Detect light/dark mode
	const theme = useTheme(); // Access custom theme colors

	const menuBgColor = theme.colors.notificationBgColor[colorMode];
	const menuItemColor = theme.colors.menuItemColor[colorMode];
	const menuHoverBgColor = theme.colors.menuHoverBgColor[colorMode];
	const textColor = theme.colors.textColor[colorMode];

	return (
		<Menu>
			<MenuButton
				as={IconButton}
				icon={<Icon icon={icon} />}
				variant='ghost'
				color={textColor}
				fontSize='24px'
				_hover={{ bg: menuHoverBgColor }}
				_active={{ bg: menuHoverBgColor }}
			/>
			<MenuList
				bg={menuBgColor}
				borderColor={menuHoverBgColor}
				maxH='300px' // Control max height for scrolling
				overflowY='auto'
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
										w='100%'
										objectFit='cover'
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
