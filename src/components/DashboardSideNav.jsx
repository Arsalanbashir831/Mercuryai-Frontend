import { Icon } from "@iconify/react";
import { VStack, Grid, GridItem, Text } from "@chakra-ui/react";
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
					bg={currentRoute === item.link ? "blue.600" : "transparent"}
					color={currentRoute === item.link ? "white" : "gray.300"}
					_hover={{
						bg: currentRoute === item.link ? "blue.700" : "gray.700",
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
