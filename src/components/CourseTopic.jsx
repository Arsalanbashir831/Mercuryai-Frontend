import React from "react";
import {
	Box,
	Heading,
	Button,
	HStack,
	VStack,
	IconButton,
	Text,
	Progress,
	Flex,
	Card,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import VideoPlayer from "./VideoPlayer";
import CustomButton from "./CustomButton";

const CourseTopic = () => {
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
			<Heading size='lg' color='white' mb={6} textAlign='center'>
				Video Title
			</Heading>

			<VideoPlayer />

			{/* Bottom Navigation */}
			<Flex justify='space-between' align='center' mt={4}>
				<HStack spacing={4}>
					<Icon icon='mdi:chevron-left' width='24' height='24' color='white' />
					<HStack color='white'>
						<Icon icon='mdi:clock-outline' />
						<Text>30 Minutes</Text>
					</HStack>
				</HStack>

				<HStack spacing={4}>
					<IconButton
						aria-label='Favorite'
						icon={<Icon icon='mdi:star-outline' />}
						variant='ghost'
						color='white'
						_hover={{ bg: "whiteAlpha.100" }}
					/>
					<CustomButton label='Complete Lesson' />
					<Icon icon='mdi:chevron-right' width='24' height='24' color='white' />
				</HStack>
			</Flex>

			{/* Additional Sections */}
			<VStack spacing={4} my={6}>
				<Card w='100%' p={4} variant='outline' bg='whiteAlpha.100'>
					<Heading size='md' color='white' mb={2}>
						Links and Resources
					</Heading>
					{/* Add your links content here */}
				</Card>

				<Card w='100%' p={4} variant='outline' bg='whiteAlpha.100'>
					<Flex justify='space-between' align='center'>
						<Heading size='md' color='white'>
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
