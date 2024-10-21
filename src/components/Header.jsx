import React from "react";
import {
	Flex,
	HStack,
	Text,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const languageMenuItems = [
	{ label: "English - EN" },
	{ label: "Deutsch - DE" },
	{ label: "Espanol - ES" },
	{ label: "Italiano - IT" },
	{ label: "Francese - FR" },
	{ label: "中文 - ZH" },
];

const userMenuItems = [
	{ icon: "mdi:account", label: "Account" },
	{ icon: "mdi:settings", label: "Settings" },
	{ icon: "iconoir:bell-notification-solid", label: "News & Updates" },
	{ icon: "mdi:paper-edit-outline", label: "Subscription" },
	{ icon: "file-icons:moleculer", label: "Amazon API" },
	{ icon: "hugeicons:laptop-programming", label: "Training" },
	{ icon: "mdi:credit-card-outline", label: "Payment Management" },
	{ icon: "mdi:help-circle-outline", label: "Help & Contacts" },
	{ icon: "mdi:account-multiple-outline", label: "Affiliation" },
];

const Header = () => {
	const bgColor = useColorModeValue("gray.900", "gray.100");
	const textColor = useColorModeValue("white", "gray.800");
	const iconColor = useColorModeValue("blue.300", "blue.500");
	const menuBgColor = useColorModeValue("gray.800", "white");
	const menuItemColor = useColorModeValue("white", "gray.800");
	const menuHoverBgColor = useColorModeValue("gray.700", "gray.100");

	return (
		<Flex
			justify='space-between'
			align='center'
			p={4}
			bg={bgColor}
			color={textColor}>
			<HStack spacing={4}>
				<Icon icon='mdi:molecule' color={iconColor} width='32' height='32' />
				<Text fontSize='xl' fontWeight='bold'>
					MERCURY AI
				</Text>
				<Button
					variant='ghost'
					color={textColor}
					_hover={{ bg: menuHoverBgColor }}
					_active={{ bg: menuHoverBgColor }}>
					Chat
				</Button>
			</HStack>
			<HStack spacing={4}>
				<Text>Cosa c'è di nuovo ?</Text>
				<IconButton
					icon={<Icon icon='ic:baseline-facebook' />}
					variant='ghost'
					color={textColor}
					fontSize='24px'
					_hover={{ bg: menuHoverBgColor }}
					_active={{ bg: menuHoverBgColor }}
				/>
				<Box w='4px' h='4px' borderRadius='full' bg={textColor} />
				<IconButton
					icon={<Icon icon='mdi:bell-outline' />}
					variant='ghost'
					color={textColor}
					fontSize='24px'
					_hover={{ bg: menuHoverBgColor }}
					_active={{ bg: menuHoverBgColor }}
				/>
				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<Icon icon='mdi:chevron-down' />}
						variant='ghost'
						color={textColor}
						_hover={{ bg: menuHoverBgColor }}
						_active={{ bg: menuHoverBgColor }}>
						EN
					</MenuButton>
					<MenuList bg={menuBgColor} borderColor={menuHoverBgColor}>
						{languageMenuItems.map(({ label }) => (
							<MenuItem
								key={label}
								color={menuItemColor}
								bg={menuBgColor}
								_hover={{ bg: menuHoverBgColor }}>
								{label}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<Icon icon='mdi:chevron-down' />}
						variant='ghost'
						color={textColor}
						_hover={{ bg: menuHoverBgColor }}
						_active={{ bg: menuHoverBgColor }}>
						Nome Cliente
					</MenuButton>

					<MenuList bg={menuBgColor} borderColor={menuHoverBgColor}>
						{userMenuItems.map(({ icon, label }) => (
							<MenuItem
								key={label}
								color={menuItemColor}
								bg={menuBgColor}
								_hover={{ bg: menuHoverBgColor }}>
								<Flex align='center' gap={3}>
									<Icon icon={icon} />
									{label}
								</Flex>
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			</HStack>
		</Flex>
	);
};

export default Header;
