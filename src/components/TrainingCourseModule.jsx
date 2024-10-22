import React, { useRef } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	IconButton,
	Image,
	VStack,
	Progress,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const TrainingCourseModule = () => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [currentModule, setCurrentModule] = React.useState(1);

	// Ref for horizontal scrolling
	const moduleListRef = useRef(null);

	const modules = [
		{ id: 1, name: "Module 1" },
		{ id: 2, name: "Module 2" },
		{ id: 3, name: "Module 3" },
		{ id: 4, name: "Module 4" },
		{ id: 5, name: "Module 5" },
		{ id: 6, name: "Module 6" },
		{ id: 7, name: "Module 7" },
	];

	const handlePlayPause = () => setIsPlaying(!isPlaying);

	// Scroll the module list horizontally
	const scrollModules = (direction) => {
		if (moduleListRef.current) {
			const scrollAmount = 100; // Adjust scroll amount as needed
			moduleListRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	// Select the next/previous module
	const handleModuleChange = (direction) => {
		setCurrentModule((prev) => {
			const newModule =
				direction === "next"
					? Math.min(prev + 1, modules.length)
					: Math.max(prev - 1, 1);
			return newModule;
		});
	};

	return (
		<Container
			maxW='3xl'
			p={4}
			maxH='100%'
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": { width: "4px" },
				"&::-webkit-scrollbar-track": { background: "transparent" },
				"&::-webkit-scrollbar-thumb": {
					background: "transparent",
					borderRadius: "full",
				},
			}}>
			<VStack spacing={4} align='stretch'>
				{/* Module Navigation */}
				<Flex
					alignItems='center'
					justifyContent='space-between'
					mb={6}
					gap={2} // Ensures proper spacing between arrows and list
				>
					{/* Left Arrow */}
					<IconButton
						icon={<Icon icon='mdi:chevron-left' width='24' height='24' />}
						variant='ghost'
						color='blue.400'
						aria-label='Previous module'
						onClick={() => {
							scrollModules("left");
							handleModuleChange("prev");
						}}
					/>

					{/* Scrollable Module List */}
					<Box
						ref={moduleListRef}
						overflowX='auto'
						whiteSpace='nowrap'
						flex='1'
						px={2} // Padding to avoid overlap with arrows
						sx={{
							"&::-webkit-scrollbar": { height: "4px" },
							"&::-webkit-scrollbar-track": { background: "transparent" },
							"&::-webkit-scrollbar-thumb": {
								background: "gray.500",
								borderRadius: "full",
							},
						}}>
						{modules.map((module) => (
							<Button
								key={module.id}
								leftIcon={<Icon icon='octicon:book-16' />}
								w='auto'
								variant={currentModule === module.id ? "solid" : "ghost"}
								bg={currentModule === module.id ? "blue.500" : "transparent"}
								mx={1}
								color='white'
								onClick={() => setCurrentModule(module.id)}
								_hover={{
									bg:
										currentModule === module.id ? "blue.600" : "whiteAlpha.200",
								}}>
								{module.name}
							</Button>
						))}
					</Box>

					{/* Right Arrow */}
					<IconButton
						icon={<Icon icon='mdi:chevron-right' width='24' height='24' />}
						variant='ghost'
						color='blue.400'
						aria-label='Next module'
						onClick={() => {
							scrollModules("right");
							handleModuleChange("next");
						}}
					/>
				</Flex>

				{/* Video Title */}
				<Heading as='h2' size='md' fontStyle='italic' mb={4} color='gray.200'>
					Video Title
				</Heading>

				{/* Scrollable Video Player Card */}
				<Box bg='gray.800' borderRadius='lg' overflow='hidden' mb={6}>
					<Box position='relative'>
						<Image
							src='https://via.placeholder.com/800x650'
							alt='Video thumbnail'
							w='full'
							h='auto'
							aspectRatio={16 / 9}
							objectFit='cover'
						/>

						{/* Progress Bar */}
						<Progress
							value={33}
							size='xs'
							colorScheme='blue'
							position='absolute'
							bottom={0}
							left={0}
							right={0}
						/>
					</Box>

					{/* Video Controls */}
					<Flex justify='center' alignItems='center' p={4} gap={4}>
						<IconButton
							icon={<Icon icon='mdi:rewind' width='24' height='24' />}
							variant='ghost'
							color='gray.400'
							aria-label='Rewind'
							_hover={{ color: "white" }}
						/>

						<IconButton
							icon={
								<Icon
									icon={isPlaying ? "mdi:pause-circle" : "mdi:play-circle"}
									width='32'
									height='32'
								/>
							}
							variant='ghost'
							color='white'
							aria-label={isPlaying ? "Pause" : "Play"}
							onClick={handlePlayPause}
							_hover={{ color: "blue.400" }}
						/>

						<IconButton
							icon={<Icon icon='mdi:fast-forward' width='24' height='24' />}
							variant='ghost'
							color='gray.400'
							aria-label='Fast forward'
							_hover={{ color: "white" }}
						/>
					</Flex>
				</Box>

				{/* Bottom Buttons */}
				<Flex justify='space-between' alignItems='center'>
					<VStack spacing={2}>
						<Box color='gray.400'>AI Summary - Useful Links</Box>
						<Button bg='cyan.400' color='white' _hover={{ bg: "cyan.500" }}>
							Generate Summary
						</Button>
					</VStack>

					<Button bg='cyan.400' color='white' _hover={{ bg: "cyan.500" }}>
						Take Test
					</Button>
				</Flex>
			</VStack>
		</Container>
	);
};

export default TrainingCourseModule;
