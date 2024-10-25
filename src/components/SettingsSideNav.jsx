import { Icon } from "@iconify/react";
import {
	VStack,
	Grid,
	GridItem,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const navigationItems = [
	{
		title: "Account",
		icon: "mdi:account",
		link: "/settings/account",
	},
	{
		title: "Amazon API",
		icon: "file-icons:moleculer",
		link: "/settings/amazon-api",
	},
	{
		title: "Payment Management",
		icon: "mdi:credit-card-outline",
		link: "/settings/payment-management",
	},
	{
		title: "Subscription",
		icon: "mdi:paper-edit-outline",
		link: "/settings/subscription",
	},
];

export default function SettingsSideNav({ currentRoute }) {
	const navigate = useNavigate();

	// Define colors based on color mode
	const activeBg = useColorModeValue(
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)",
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
	);
	const hoverBg = useColorModeValue("gray.200", "gray.600");
	const textColor = useColorModeValue("gray.800", "gray.200");
	const activeColor = "white";

	const handleNavigation = (link) => {
		navigate(link);
	};

	return (
		<VStack spacing={1} align='stretch'>
			{navigationItems.map((item) => (
				<Grid
					key={item.link}
					templateColumns='24px 1fr'
					gap={3}
					px={2}
					py={2}
					alignItems='center'
					borderRadius='lg'
					cursor='pointer'
					bg={currentRoute === item.link ? activeBg : "transparent"}
					color={currentRoute === item.link ? activeColor : textColor}
					_hover={{
						bg: currentRoute === item.link ? activeBg : hoverBg,
					}}
					transition='all 0.15s'
					onClick={() => {
						handleNavigation(item.link);
					}}>
					<GridItem display='flex' justifyContent='center'>
						<Icon icon={item.icon} style={{ width: "20px", height: "20px" }} />
					</GridItem>
					<Text fontSize='xs'>{item.title}</Text>
				</Grid>
			))}
		</VStack>
	);
}
