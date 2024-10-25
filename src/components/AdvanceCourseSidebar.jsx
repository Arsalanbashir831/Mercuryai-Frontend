import React, { useState } from "react";
import { Box, VStack, Text, Flex, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

const AdvanceCourseSidebar = ({ isUpgraded, setIsUpgraded, location }) => {
	const navigate = useNavigate();
	const [expandedTopics, setExpandedTopics] = useState({
		"Topic 1": true,
		"Topic 2": false,
		"Topic 3": false,
		"Topic 4": false,
		"Topic 5": false,
	});

	// Extract query params from the URL
	const queryParams = new URLSearchParams(location?.search);
	const selectedTopic = queryParams.get("topic");
	const selectedLesson = queryParams.get("lesson");

	// Toggle topic expansion
	const toggleTopic = (topic) => {
		setExpandedTopics((prev) => ({
			...prev,
			[topic]: !prev[topic],
		}));
	};

	return (
		<Box h='100vh' position='relative'>
			{/* User Profile Section */}
			<Flex align='center' mb={6}>
				<Icon icon='ph:user-circle' width='30' height='30' color='#FFFFFF' />
				<Box ml={2}>
					<Text fontSize='sm' textColor='white'>
						Nome Cliente
					</Text>
					<Text fontSize='xs' color='blue.200'>
						0% COMPLETE
					</Text>
				</Box>
			</Flex>

			{/* Dashboard Link */}
			<Button
				variant='ghost'
				color='gray.300'
				bg={
					location.pathname ===
						"/dashboard/mercury-ai-pro-advance-training-course" &&
					!selectedTopic
						? "whiteAlpha.100"
						: "transparent"
				}
				_hover={{ bg: "whiteAlpha.100" }}
				w='full'
				mb={4}
				p={2}
				justifyContent='flex-start'
				onClick={() => navigate(``)}>
				Dashboard
			</Button>

			{/* Navigation Items */}
			<VStack align='stretch' spacing={1}>
				{Object.entries(expandedTopics).map(([topic, isExpanded]) => (
					<Box key={topic}>
						<Button
							variant='ghost'
							w='full'
							justifyContent='space-between'
							alignItems='center'
							py={2}
							px={3}
							fontSize='sm'
							color='gray.300'
							bg={selectedTopic === topic ? "whiteAlpha.100" : "transparent"}
							_hover={{ bg: "whiteAlpha.100" }}
							onClick={() => toggleTopic(topic)}
							rightIcon={
								<Icon
									icon={isExpanded ? "ph:caret-down" : "ph:caret-right"}
									width='16'
									height='16'
								/>
							}>
							{topic}
						</Button>

						{/* Lessons */}
						{isExpanded && (
							<VStack align='stretch' ml={4} mt={1} spacing={1}>
								{[1, 2, 3].map((lesson) => (
									<Button
										key={lesson}
										variant='ghost'
										size='sm'
										w='full'
										justifyContent='flex-start'
										py={1}
										px={3}
										fontSize='sm'
										color='gray.300'
										leftIcon={
											<Icon
												icon='ph:dot'
												width='16'
												height='16'
												color='#FFFFFF'
											/>
										}
										bg={
											selectedLesson === lesson.toString()
												? "whiteAlpha.100"
												: "transparent"
										}
										_hover={{ bg: "whiteAlpha.100" }}
										// Navigate with topic name and lesson number as query params
										onClick={() =>
											navigate(`?topic=${topic}&lesson=${lesson}`)
										}>
										Lesson {lesson} - Topic {lesson}
									</Button>
								))}
							</VStack>
						)}
					</Box>
				))}
			</VStack>

			{/* Locked Overlay */}
			{isUpgraded && (
				<Box
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='0'
					w='full'
					h='full'
					bg='blackAlpha.700'
					backdropFilter='blur(10px)'
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					color='white'
					fontSize='2xl'
					zIndex='10'>
					<Icon icon='mdi:lock' width='64' height='64' />
					{/* <Button
						mt={4}
						colorScheme='blue'
						size='lg'
						onClick={() => setIsUpgraded(false)}>
						Unlock Course
					</Button> */}
					<CustomButton
						label='Unlock Course'
						onClick={() => setIsUpgraded(false)}
						w={40}
					/>
				</Box>
			)}
		</Box>
	);
};

export default AdvanceCourseSidebar;
