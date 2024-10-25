import React, { useEffect } from "react";
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
	Image,
	Switch,
	useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import NotificationDropdown from "../components/NotificationDropdown";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoSrc from "/logo.png";
import placeholderImage from "../assets/placeholders/200x150.svg";
import { languageMenuItems, userMenuItems, toolsMenuItems } from "../utils";
import CustomDropdown from "../components/CustomDropdown";

// Notifications data
const notifications = [
	{
		title: "New Update",
		message: "Amazon is changing its sales policies in 2024.",
		link: "#",
	},
	{
		title: "Latest News",
		message: "Our new product feature is live now!",
		image: placeholderImage,
		link: "#",
	},
];

// Helper functions for menu paths (can be moved to utils)
const userMenuPaths = userMenuItems
	.filter((item) => item.link)
	.map((item) => item.link);
const toolsMenuPaths = toolsMenuItems
	.filter((item) => item.link)
	.map((item) => item.link);

const Header = () => {
	const { isAuthenticated } = useAuth();
	const { colorMode, toggleColorMode, setColorMode } = useColorMode();
	const location = useLocation();
	const navigate = useNavigate();

	const bgColor = "gray.900";
	const textColor = "white";
	const menuBgColor = "gray.800";
	const menuHoverBgColor = "gray.700";
	const dividerColor = "gray.600";

	// Menu disclosures
	const toolsMenuDisclosure = useDisclosure();
	const userMenuDisclosure = useDisclosure();
	const languageMenuDisclosure = useDisclosure();

	const isUserMenuActive = userMenuPaths.includes(location.pathname);
	const isToolsMenuActive = toolsMenuPaths.includes(location.pathname);

	// Set default color mode to light
	useEffect(() => {
		setColorMode("light");
	}, [setColorMode]);

	const handleMenuItemClick = (item) => {
		if (item.isThemeToggle) {
			// toggleColorMode();  // Uncomment this if theme toggling is enabled
		} else if (item.link) {
			navigate(item.link);
		}
	};

	return (
		<Flex
			justify='space-between'
			align='center'
			p={4}
			bg={bgColor}
			color={textColor}>
			<HStack spacing={4}>
				<Link to='/'>
					<Image src={logoSrc} alt='Mercury AI' width='200px' />
				</Link>
				{isAuthenticated && (
					<>
						<Button
							ml={8}
							variant='unstyled'
							color={textColor}
							borderBottom={location.pathname === "/" ? "2px solid" : "none"}
							borderColor='cyan.500'
							borderRadius={0}
							onClick={() => navigate("/")}>
							Chat
						</Button>

						{/* Tools Menu */}
						<CustomDropdown
							label='Tools'
							isMenuActive={isToolsMenuActive}
							menuItems={toolsMenuItems}
							menuDisclosure={toolsMenuDisclosure}
							handleMenuItemClick={handleMenuItemClick}
						/>
					</>
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
				/>
				{isAuthenticated && (
					<>
						<Box w='4px' h='4px' borderRadius='full' bg={textColor} />
						<NotificationDropdown notifications={notifications} />
					</>
				)}

				{/* Language Menu */}
				<CustomDropdown
					label='EN'
					isMenuActive={false}
					menuItems={languageMenuItems}
					menuDisclosure={languageMenuDisclosure}
					handleMenuItemClick={handleMenuItemClick}
				/>

				{/* User Menu */}
				{isAuthenticated ? (
					<CustomDropdown
						label='Nome Cliente'
						buttonIcon={"ic:baseline-account-circle"}
						isMenuActive={isUserMenuActive}
						menuDisclosure={userMenuDisclosure}
						menuItems={userMenuItems}
						handleMenuItemClick={handleMenuItemClick}
						showLogoutAndThemeToggle={true}
						colorMode={colorMode}
					/>
				) : (
					<Button
						leftIcon={<Icon icon='ic:baseline-account-circle' fontSize={28} />}
						variant='ghost'
						color={textColor}
						_hover={{ bg: menuHoverBgColor }}>
						Login / Register
					</Button>
				)}
			</HStack>
		</Flex>
	);
};

export default Header;
