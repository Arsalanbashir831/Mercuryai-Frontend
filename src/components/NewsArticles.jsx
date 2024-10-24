import React from "react";
import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import placeholderImage from "../assets/placeholders/600x400.svg";

const NewsCard = ({ title, description }) => (
	<Box
		bg='whiteAlpha.100'
		borderRadius='md'
		overflow='hidden'
		position='relative'
		_hover={{ transform: "translateY(-2px)", transition: "transform 0.2s" }}>
		<Box bg='lightblue' position='relative' maxH='200px' overflow='hidden'>
			<Image
				src={placeholderImage}
				alt='News Article'
				w='100%'
				h='200px'
				objectFit='cover' // Ensures the image fits within the box
			/>
		</Box>
		<Box p={4}>
			<Heading size='sm' color='white' mb={2}>
				{title}
			</Heading>
			<Text color='gray.300' fontSize='sm' mb={3}>
				{description}
			</Text>
			<Button size='sm' colorScheme='blue' borderRadius='full'>
				Read More
			</Button>
		</Box>
	</Box>
);

const NewsArticles = () => {
	const newsItems = Array(6).fill({
		title: "Mercury AI Changes",
		description:
			"Mercury AI recently introduced advanced algorithms for natural language processing, improving real-time responses.",
	});

	return (
		<Container
			maxW='container'
			p={4}
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": {
					width: "8px",
				},
				"&::-webkit-scrollbar-track": {
					background: "rgba(255, 255, 255, 0.1)",
					borderRadius: "4px",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "rgba(255, 255, 255, 0.2)",
					borderRadius: "4px",
				},
			}}>
			<VStack align='stretch' spacing={6} h='100vh'>
				<Heading color='white' size='lg'>
					News & Articles
				</Heading>

				{/* Search Bar */}
				<InputGroup size='lg' bg='whiteAlpha.200' borderRadius='full'>
					<Input
						placeholder='Use AI to get everything you want'
						borderRadius='full'
						color='white'
						_placeholder={{ color: "gray.400" }}
					/>
					<InputRightElement pr={2}>
						<Icon icon='mdi:magnify' width='24' height='24' color='#3182CE' />
					</InputRightElement>
				</InputGroup>

				{/* Latest News Section */}
				<Box>
					<Heading color='white' size='md' mb={4}>
						Latest News
					</Heading>
					<Box
						overflowX='auto'
						css={{
							"&::-webkit-scrollbar": {
								height: "8px",
							},
							"&::-webkit-scrollbar-track": {
								background: "rgba(255, 255, 255, 0.1)",
								borderRadius: "4px",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "rgba(255, 255, 255, 0.2)",
								borderRadius: "4px",
							},
						}}>
						<SimpleGrid
							columns={3}
							spacing={4}
							minChildWidth='300px'
							minW='max-content'
							pb={2}>
							{newsItems.slice(0, 4).map((item, index) => (
								<NewsCard
									key={index}
									title={item.title}
									description={item.description}
								/>
							))}
						</SimpleGrid>
					</Box>
				</Box>

				{/* Important News Section */}
				<Box>
					<Heading color='white' size='md' mb={4}>
						Important News
					</Heading>
					<Box>
						<VStack spacing={4} align='stretch' pb={150}>
							{newsItems.map((item, index) => (
								<Box key={index} bg='whiteAlpha.100' p={6} borderRadius='md'>
									<Heading size='md' color='white' mb={3}>
										{item.title}
									</Heading>
									<Text color='gray.300' mb={4}>
										{item.description}
									</Text>
									<Button
										colorScheme='blue'
										size='sm'
										borderRadius='full'
										float='right'>
										Read More
									</Button>
								</Box>
							))}
						</VStack>
					</Box>
				</Box>
			</VStack>
		</Container>
	);
};

export default NewsArticles;
