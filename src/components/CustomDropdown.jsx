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
	colorMode,
}) {
	const bgColor = "gray.900";
	const textColor = "white";
	const iconColor = "blue.300";
	const menuBgColor = "gray.800";
	const menuItemColor = "white";
	const menuHoverBgColor = "gray.700";
	const dividerColor = "gray.600";

	const { logout } = useAuth();

	return (
		<Menu {...menuDisclosure}>
			<MenuButton
				as={Button}
				leftIcon={<Icon icon={buttonIcon} fontSize={28} />}
				rightIcon={
					<Icon
						icon={menuDisclosure.isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
					/>
				}
				variant='ghost'
				color={textColor}
				borderBottom={isMenuActive ? "2px solid" : "none"}
				borderColor='cyan.500'
				borderBottomRadius={0}
				_hover={{
					bg: "transparent",
					borderBottom: "2px solid",
					borderColor: "cyan.500",
				}}
				_active={{
					bg: menuHoverBgColor,
					borderBottom: "2px solid",
					borderColor: "cyan.500",
				}}>
				{label}
			</MenuButton>
			<MenuList bg={menuBgColor} border='none'>
				{menuItems.map((item) => (
					<MenuItem
						key={label}
						color='white'
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

				{showLogoutAndThemeToggle && (
					<>
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
										icon={colorMode === "dark" ? "bi:sun-fill" : "line-md:moon"}
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
