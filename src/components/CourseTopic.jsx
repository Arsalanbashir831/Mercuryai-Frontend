import React from "react";
import {
	Box,
	Heading,
	Button,
	HStack,
	VStack,
	IconButton,
	Text,
	Flex,
	Card,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import VideoPlayer from "./VideoPlayer";
import CustomButton from "./CustomButton";

const CourseTopic = () => {
	// Define colors based on the current color mode
	const cardBgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.200");
	const textColor = useColorModeValue("gray.800", "white");
	const iconColor = useColorModeValue("black", "white");

	return (
		<Box
			maxW='800px'
			mx='auto'
			p={4}
			h='100%'
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": {
					width: "0.4em",
				},
				"&::-webkit-scrollbar-track": {
					width: "0.4em",
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: "transparent",
					borderRadius: "16px",
				},
			}}>
			{/* Course Topic Header */}
			<Heading size='lg' color={textColor} mb={6} textAlign='center'>
				Video Title
			</Heading>

			<VideoPlayer />

			{/* Bottom Navigation */}
			<Flex justify='space-between' align='center' mt={4}>
				<HStack spacing={4}>
					<Icon
						icon='mdi:chevron-left'
						width='24'
						height='24'
						color={iconColor}
					/>
					<HStack color='white'>
						<Icon icon='mdi:clock-outline' color={iconColor} />
						<Text color={textColor}>30 Minutes</Text>
					</HStack>
				</HStack>

				<HStack spacing={4}>
					<IconButton
						aria-label='Favorite'
						icon={<Icon icon='mdi:star-outline' color={iconColor} />}
						variant='ghost'
						color='white'
						_hover={{ bg: "whiteAlpha.100" }}
					/>
					<CustomButton label='Complete Lesson' />
					<Icon
						icon='mdi:chevron-right'
						width='24'
						height='24'
						color={iconColor}
					/>
				</HStack>
			</Flex>

			{/* Additional Sections */}
			<VStack spacing={4} my={6}>
				<Card
					w='100%'
					p={4}
					variant='outline'
					bg={cardBgColor}
					borderColor={iconColor}>
					<Heading size='md' color={textColor} mb={2}>
						Links and Resources
					</Heading>
					{/* Add your links content here */}
				</Card>

				<Card
					w='100%'
					p={4}
					variant='outline'
					bg={cardBgColor}
					borderColor={iconColor}>
					<Flex justify='space-between' align='center'>
						<Heading size='md' color={textColor}>
							Summary AI
						</Heading>
						<CustomButton label='Generate Summary' w={40} />
					</Flex>
				</Card>
			</VStack>
		</Box>
	);
};

export default CourseTopic;
