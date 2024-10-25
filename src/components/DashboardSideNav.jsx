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
		title: "MercuryAi Training Course",
		icon: "octicon:book-16",
		link: "/dashboard/mercury-ai-training-course",
	},
	{
		title: "Mercury Ai Pro Advance Training Course",
		icon: "octicon:rocket-16",
		link: "/dashboard/mercury-ai-pro-advance-training-course",
	},
	{
		title: "News & Articles",
		icon: "tabler:news",
		link: "/dashboard/news-articles",
	},
	{
		title: "Referral Program",
		icon: "octicon:gift-16",
		link: "/dashboard/referral-program",
	},
];

export default function DashboardSideNav({ currentRoute }) {
	const navigate = useNavigate();

	const activeBg = "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)";
	const hoverBg = useColorModeValue("gray.200", "gray.700");
	const textColor = useColorModeValue("gray.700", "gray.300");
	const activeColor = "white";

	const handleNavigation = (link) => {
		navigate(link);
	};

	return (
		<VStack spacing={1} align='stretch' role='navigation' aria-label='Sidebar'>
			{navigationItems.map((item) => (
				<Grid
					key={item.link}
					templateColumns='24px 1fr'
					gap={3}
					px={3}
					py={2}
					alignItems='center'
					borderRadius='lg'
					cursor='pointer'
					bg={currentRoute === item.link ? activeBg : "transparent"}
					color={currentRoute === item.link ? activeColor : textColor}
					_hover={{ bg: currentRoute === item.link ? activeBg : hoverBg }}
					transition='background 0.2s ease'
					tabIndex={0} // Makes it focusable with the keyboard
					onClick={() => handleNavigation(item.link)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") handleNavigation(item.link);
					}}
					role='button'
					aria-current={currentRoute === item.link ? "page" : undefined}>
					<GridItem display='flex' justifyContent='center'>
						<Icon icon={item.icon} width='20px' height='20px' />
					</GridItem>
					<Text fontSize='xs' fontWeight='medium'>
						{item.title}
					</Text>
				</Grid>
			))}
		</VStack>
	);
}
