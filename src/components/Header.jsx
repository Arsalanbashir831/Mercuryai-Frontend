import React, { useState, useEffect } from "react";
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
	useDisclosure,
	Image,
	Tabs,
	TabList,
	Tab,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import NotificationDropdown from "./NotificationDropdown";
import { useAuth } from "../context/AuthContext"; // Import the Auth Context
import LoginModal from "./LoginModal";
import { use } from "framer-motion/client";
import { useLocation } from "react-router-dom";

const languageMenuItems = [
	{ label: "English - EN" },
	{ label: "Deutsch - DE" },
	{ label: "Español - ES" },
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

const notifications = [
	{
		title: "New Update",
		message: "Amazon is changing its sales policies in 2024.",
		link: "#",
	},
	{
		title: "Latest News",
		message: "Our new product feature is live now!",
		image: "https://via.placeholder.com/250x150",
		link: "#",
	},
];

const Header = () => {
	const { isAuthenticated, login, logout } = useAuth();
	const logoSrc = "./logo.png";

	const bgColor = useColorModeValue("gray.900", "gray.100");
	const textColor = useColorModeValue("white", "gray.800");
	const iconColor = useColorModeValue("blue.300", "blue.500");
	const menuBgColor = useColorModeValue("gray.800", "white");
	const menuItemColor = useColorModeValue("white", "gray.800");
	const menuHoverBgColor = useColorModeValue("gray.700", "gray.100");

	// Generic state to handle multiple toggles
	const [isOpen, setIsOpen] = useState({
		userMenu: false,
		languageMenu: false,
	});

	const location = useLocation();

	const {
		isOpen: isLoginOpen,
		onOpen: onLoginOpen,
		onClose: onLoginClose,
	} = useDisclosure();

	// Toggle function to handle state changes for both menus
	const toggleMenu = (menu) => {
		setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
	};

	return (
		<>
			<Flex
				justify='space-between'
				align='center'
				p={4}
				bg={bgColor}
				color={textColor}>
				<HStack spacing={4}>
					<Image src={logoSrc} alt='Logo' mx='auto' width='200px' />
					{isAuthenticated && (
						<Button
							ml={8}
							variant='unstyled'
							color={textColor}
							borderBottom={location.pathname === "/" ? "2px solid" : "none"}
							borderColor='teal'
							borderRadius={0}
							// _hover={{ bg: menuHoverBgColor }}
							// _active={{ bg: menuHoverBgColor }}
						>
							Chat
						</Button>
					)}
				</HStack>
				<HStack spacing={4}>
					{isAuthenticated && <Text>Cosa c'è di nuovo ?</Text>}{" "}
					<IconButton
						icon={<Icon icon='ic:baseline-facebook' />}
						variant='ghost'
						color={textColor}
						fontSize='24px'
						_hover={{ bg: menuHoverBgColor }}
						_active={{ bg: menuHoverBgColor }}
					/>
					{isAuthenticated && (
						<>
							<Box w='4px' h='4px' borderRadius='full' bg={textColor} />
							<NotificationDropdown notifications={notifications} />
						</>
					)}
					{/* Language Menu */}
					<Menu
						isOpen={isOpen.languageMenu}
						onOpen={() => toggleMenu("languageMenu")}
						onClose={() => toggleMenu("languageMenu")}>
						<MenuButton
							as={Button}
							rightIcon={
								<Icon
									icon={
										isOpen.languageMenu ? "mdi:chevron-up" : "mdi:chevron-down"
									}
								/>
							}
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
					{/* User Menu or Login/Register Button */}
					{isAuthenticated ? (
						<Menu
							isOpen={isOpen.userMenu}
							onOpen={() => toggleMenu("userMenu")}
							onClose={() => toggleMenu("userMenu")}>
							<MenuButton
								as={Button}
								leftIcon={
									<Icon icon='ic:baseline-account-circle' fontSize={28} />
								}
								rightIcon={
									<Icon
										icon={
											isOpen.userMenu ? "mdi:chevron-up" : "mdi:chevron-down"
										}
									/>
								}
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
					) : (
						<Button
							leftIcon={
								<Icon icon='ic:baseline-account-circle' fontSize={28} />
							}
							variant='ghost'
							color={textColor}
							_hover={{ bg: menuHoverBgColor }}
							_active={{ bg: menuHoverBgColor }}
							onClick={onLoginOpen}>
							Login / Register
						</Button>
					)}
				</HStack>
			</Flex>

			<LoginModal isOpen={isLoginOpen} onClose={onLoginClose} onLogin={login} />
		</>
	);
};

export default Header;
