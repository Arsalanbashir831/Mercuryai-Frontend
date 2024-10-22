import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const colors = {
	bgColor: {
		light: "gray.100",
		dark: "gray.900",
	},
	textColor: {
		light: "gray.800",
		dark: "white",
	},
	iconColor: {
		light: "blue.500",
		dark: "blue.300",
	},
	menuBgColor: {
		light: "white",
		dark: "gray.800",
	},
	menuItemColor: {
		light: "gray.800",
		dark: "white",
	},
	menuHoverBgColor: {
		light: "gray.100",
		dark: "gray.700",
	},
	dividerColor: {
		light: "gray.200",
		dark: "gray.600",
	},
};

const theme = extendTheme({ config, colors });

export default theme;
