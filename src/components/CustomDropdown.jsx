import React from "react";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Switch,
	Text,
	useColorMode,
	useTheme,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/AuthContext";

export default function CustomDropdown({
	label,
	buttonIcon,
	isMenuActive,
	menuItems,
	menuDisclosure,
	handleMenuItemClick,
	showLogoutAndThemeToggle = false,
	pathName, isPathName=false
}) {
	const { logout } = useAuth();
	const { colorMode, toggleColorMode } = useColorMode();
	const theme = useTheme(); // Access theme object

	// Use theme colors dynamically based on the current color mode
	const bgColor = colorMode === "dark" ? "gray.900" : "gray.100";
	const textColor = theme.colors.textColor[colorMode];
	const iconColor = theme.colors.iconColor[colorMode];
	const menuBgColor = theme.colors.menuBgColor[colorMode];
	const menuHoverBgColor = theme.colors.menuHoverBgColor[colorMode];
	const dividerColor = theme.colors.dividerColor[colorMode];

	return (
		<Menu {...menuDisclosure}>
			<MenuButton
				as={Button}
				leftIcon={<Icon icon={buttonIcon} fontSize={28} color={iconColor} />}
				rightIcon={
					<Icon
						icon={menuDisclosure.isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
					/>
				}
				variant='ghost'
				color={textColor}
				bg={bgColor}
				borderBottom={isMenuActive ? "2px solid" : "none"}
				borderColor='cyan.500'
				borderBottomRadius={0}
				_hover={{
					bg: { bgColor },
					borderBottom: "2px solid",
					borderColor: "cyan.500",
				}}
				_active={{
					bg: { bgColor },
					borderBottom: "2px solid",
					borderColor: "cyan.500",
				}}>
				{label}
			</MenuButton>

			<MenuList bg={menuBgColor} border='none'>
				{menuItems.map((item) => (
					<MenuItem
						key={item.label}
						color={textColor}
						bg={ item.link=== pathName && isPathName?menuHoverBgColor:menuBgColor}
						_hover={{ bg: menuHoverBgColor }}
						onClick={() => handleMenuItemClick(item)}>
						<Flex align='center' gap={3}>
							<Icon icon={item.icon} />
							{item.label}
						</Flex>
					</MenuItem>
				))}

				{showLogoutAndThemeToggle && (
					<>
						<Box my={2} h='1px' bg={dividerColor} />
						<Box px={3} py={2}>
							<Flex justify='space-between' align='center'>
								<IconButton
									icon={<Icon icon='mdi:logout' />}
									variant='ghost'
									color='white'
									bg='red.700'
									_hover={{ bg: "red.600" }}
									size='sm'
									onClick={logout}
								/>
								<Flex align='center' gap={2}>
									<Switch
										colorScheme='blue'
										isChecked={colorMode === "dark"}
										onChange={toggleColorMode}
										size='md'
									/>
									<Icon
										icon={colorMode !== "dark" ? "bi:sun-fill" : "line-md:moon"}
										color={colorMode !== "dark" ? "cyan" : "white"}
									/>
								</Flex>
							</Flex>
						</Box>
					</>
				)}
			</MenuList>
		</Menu>
	);
}
