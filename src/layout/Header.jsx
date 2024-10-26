import React from "react";
import {
	Flex,
	HStack,
	Text,
	Button,
	IconButton,
	Image,
	useColorMode,
	useTheme,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomDropdown from "../components/CustomDropdown";
import NotificationDropdown from "../components/NotificationDropdown";
import logoSrc from "/logo.png";
import { languageMenuItems, userMenuItems, toolsMenuItems } from "../utils";
import placeholderImage from "../assets/placeholders/200x150.svg";

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

const Header = () => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const toolsMenuDisclosure = useDisclosure();
	const userMenuDisclosure = useDisclosure();
	const languageMenuDisclosure = useDisclosure();

	const { colorMode } = useColorMode();
	const theme = useTheme();

	const isUserMenuActive = userMenuItems.some(
		(item) => item.link === location.pathname
	);
	const isToolsMenuActive = toolsMenuItems.some(
		(item) => item.link === location.pathname
	);

	const bgColor = theme.colors.bgColor[colorMode];
	const textColor = theme.colors.textColor[colorMode];
	const menuHoverBgColor = theme.colors.menuHoverBgColor[colorMode];

	const handleMenuItemClick = (item) => {
		if (item.link) navigate(item.link);
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
							borderBottomRadius={0}
							onClick={() => navigate("/")}>
							Chat
						</Button>

						<CustomDropdown
						pathName ={location.pathname}
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

				<CustomDropdown
					label='EN'
					menuItems={languageMenuItems}
					menuDisclosure={languageMenuDisclosure}
					handleMenuItemClick={handleMenuItemClick}
				/>

				{isAuthenticated ? (
					<CustomDropdown
						label='Nome Cliente'
						buttonIcon='ic:baseline-account-circle'
						isMenuActive={isUserMenuActive}
						menuItems={userMenuItems}
						menuDisclosure={userMenuDisclosure}
						showLogoutAndThemeToggle={true}
						handleMenuItemClick={handleMenuItemClick}
					/>
				) : (
					<Button variant='ghost' color={textColor}>
						Login / Register
					</Button>
				)}
			</HStack>
		</Flex>
	);
};

export default Header;
