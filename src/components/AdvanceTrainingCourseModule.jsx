import React from "react";
import {
	Box,
	Button,
	Flex,
	Text,
	Container,
	HStack,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import VideoPlayer from "./VideoPlayer";
import placeholderImage from "../assets/placeholders/200x150.svg";
import CustomButton from "./CustomButton";

const AdvanceTrainingCourseModule = ({ isUpgraded, setIsUpgraded }) => {
	// Define colors based on the current color mode
	const textColor = useColorModeValue("gray.800", "white");
	const skillBgColor = useColorModeValue(
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)",
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)"
	);
	const buttonBgColor = useColorModeValue("gray.100", "gray.100");
	const buttonHoverBgColor = useColorModeValue("gray.200", "gray.200");
	const buttonColor = useColorModeValue("blue.500", "blue.300");
	const lockedOverlayBg = useColorModeValue("blackAlpha.700", "blackAlpha.900");
	const lockedOverlayTextColor = useColorModeValue("white", "gray.200");

	return (
		<Container
			maxW='7xl'
			position='relative'
			overflowY={isUpgraded ? "hidden" : "auto"}
			h='100%'
			p={6}
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
			}}
			borderRadius='md'>
			{/* Skills Section */}
			<Box mb={6}>
				<Text color={textColor} mb={2} fontWeight='bold'>
					Skills You Will Gain
				</Text>
				<HStack spacing={4}>
					{[1, 2, 3, 4, 5, 6, 7].map((skill) => (
						<Box key={skill}>
							<Box bg={skillBgColor} p={2} borderRadius='full'>
								<Icon
									icon='material-symbols-light:diamond-outline'
									width='32'
									height='32'
									color='white'
								/>
							</Box>
							<Text color={textColor} fontSize='sm' textAlign='center'>
								Skill {skill}
							</Text>
						</Box>
					))}
				</HStack>
			</Box>

			<Flex gap={4} mb={6}>
				<Box flex={1}>
					<VideoPlayer />
				</Box>

				<Flex direction='column' gap={10} flex={1} maxW={300}>
					{/* Certificate Request Box */}
					<Box
						bg={skillBgColor}
						p={4}
						pb={8}
						borderRadius='md'
						textAlign='center'
						position='relative'>
						<Text color='white' fontSize='lg' mb={4}>
							🎉 Get your certificate
						</Text>
						<Text color='white' fontSize='sm'>
							Request the certificate directly from a Mercuryai expert
						</Text>

						<Button
							colorScheme='gray'
							size='sm'
							bg={buttonBgColor}
							color={buttonColor}
							_hover={{ bg: buttonHoverBgColor }}
							position='absolute'
							bottom={-4}
							left='50%'
							transform='translateX(-50%)'>
							Request Now
						</Button>
					</Box>

					{/* Elite Student Group Access Box */}
					<Box
						bg={skillBgColor}
						p={4}
						pb={8}
						borderRadius='md'
						textAlign='center'
						position='relative'>
						<Text color='white' fontSize='lg' mb={4}>
							Access the dedicated Elite student group
						</Text>
						<Image
							src={placeholderImage}
							alt='Elite student group'
							w='100%'
							h={100}
							objectFit='cover'
						/>
						<Button
							colorScheme='gray'
							size='sm'
							bg={buttonBgColor}
							color={buttonColor}
							_hover={{ bg: buttonHoverBgColor }}
							position='absolute'
							bottom={-4}
							left='50%'
							transform='translateX(-50%)'>
							Request Now
						</Button>
					</Box>
				</Flex>
			</Flex>

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
					bg={lockedOverlayBg}
					backdropFilter='blur(10px)'
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					color={lockedOverlayTextColor}
					fontSize='2xl'
					zIndex='10'>
					<Icon icon='mdi:lock' width='64' height='64' />
					<CustomButton
						label='Unlock Course'
						onClick={() => setIsUpgraded(false)}
						w={52}
						size='lg'
						mt={4}
					/>
				</Box>
			)}
		</Container>
	);
};

export default AdvanceTrainingCourseModule;
