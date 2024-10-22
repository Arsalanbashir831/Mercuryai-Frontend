import React, { useState } from "react";
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
	useColorMode,
	useColorModeValue,
	useDisclosure,
	Image,
	Switch,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import NotificationDropdown from "./NotificationDropdown";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import { Link, useLocation } from "react-router-dom";

import logoSrc from "/logo.png";

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
	const { colorMode, toggleColorMode } = useColorMode();

	const bgColor = useColorModeValue("gray.900", "gray.100");
	const textColor = useColorModeValue("white", "gray.800");
	const iconColor = useColorModeValue("blue.300", "blue.500");
	const menuBgColor = useColorModeValue("gray.800", "white");
	const menuItemColor = useColorModeValue("white", "gray.800");
	const menuHoverBgColor = useColorModeValue("gray.700", "gray.100");
	const dividerColor = useColorModeValue("gray.600", "gray.200");

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

	const toggleMenu = (menu) => {
		setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
	};

	const handleMenuItemClick = (item) => {
		if (item.isLogout) {
			logout();
		} else if (item.isThemeToggle) {
			// toggleColorMode();
		}
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
					<Link to='/'>
						<Image src={logoSrc} alt='Mercury AI' mx='auto' width='200px' />
					</Link>
					{isAuthenticated && (
						<Button
							ml={8}
							variant='unstyled'
							color={textColor}
							borderBottom={location.pathname === "/" ? "2px solid" : "none"}
							borderColor='teal'
							borderRadius={0}>
							Chat
						</Button>
					)}
				</HStack>
				<HStack spacing={4}>
					{isAuthenticated && <Text>Cosa c'è di nuovo ?</Text>}
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
								{userMenuItems.map((item) => (
									<MenuItem
										key={item.label}
										color={menuItemColor}
										bg={menuBgColor}
										_hover={{ bg: menuHoverBgColor }}
										onClick={() => handleMenuItemClick(item)}>
										<Flex align='center' gap={3}>
											<Icon icon={item.icon} />
											{item.label}
											{item.isThemeToggle && (
												<Text ml='auto' fontSize='sm'>
													{colorMode === "dark" ? "DARK" : "LIGHT"}
												</Text>
											)}
										</Flex>
									</MenuItem>
								))}

								{/* Divider */}
								<Box my={2} h='1px' bg={dividerColor} />

								{/* Theme Toggle and Logout Row */}
								<Box px={3} py={2}>
									<Flex justify='space-between' align='center'>
										<IconButton
											icon={<Icon icon='mdi:logout' />}
											variant='ghost'
											size='sm'
											onClick={logout}
											color={menuItemColor}
											bg='red.900'
											_hover={{ bg: "red.800" }}
										/>
										<Flex align='center' gap={2}>
											<Switch
												colorScheme='blue'
												isChecked={colorMode !== "dark"}
												// onChange={toggleColorMode}
												size='md'
											/>
											<Icon
												icon={
													colorMode === "dark" ? "bi:sun-fill" : "line-md:moon"
												}
											/>
										</Flex>
									</Flex>
								</Box>
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
