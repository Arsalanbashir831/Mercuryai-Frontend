import React, { useState } from "react";
import {
	Box,
	Button,
	Flex,
	Text,
	Container,
	HStack,
	Image,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import VideoPlayer from "./VideoPlayer";
import placeholderImage from "../assets/placeholders/200x150.svg";

const AdvanceTrainingCourseModule = ({ isUpgraded, setIsUpgraded }) => {
	return (
		<Container
			maxW='7xl'
			p={4}
			position='relative'
			overflowY={isUpgraded ? "hidden" : "auto"}
			h='100%'
			sx={{
				"&::-webkit-scrollbar": {
					width: "0.4em",
				},
				"&::-webkit-scrollbar-track": {
					width: "0.4em",
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: "rgba(255,255,255,0.5)",
					borderRadius: "16px",
				},
			}}>
			{/* Course Header */}
			<Box mb={6} bg='blue.500' p={4} borderRadius='md' position='relative'>
				<Text fontSize='2xl' fontWeight='bold' color='white'>
					Pro Advance Training Course
				</Text>
				<Flex direction='column' gap={2} color='gray.300'>
					<Text>Let's proceed, Client Name</Text>
					<Flex align='center' gap={2}>
						<Icon icon='mdi:progress-check' />
						<Text>0% COMPLETE</Text>
					</Flex>
				</Flex>
				<Button
					position='absolute'
					top={4}
					right={4}
					colorScheme='whiteAlpha'
					size='sm'
					rightIcon={<Icon icon='mdi:arrow-right' />}>
					Continue learning
				</Button>
			</Box>

			{/* Skills Section */}
			<Box mb={6}>
				<Text color='white' mb={2}>
					Skills You Will Gain
				</Text>
				<HStack spacing={4} justifyContent='space-between'>
					{[1, 2, 3, 4, 5, 6, 7].map((skill) => (
						<Box key={skill}>
							<Box bg='blue.500' p={2} borderRadius='full'>
								<Icon
									icon='material-symbols-light:diamond-outline'
									width='32'
									height='32'
								/>
							</Box>
							<Text color='white' fontSize='sm' textAlign='center'>
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
					<Box
						bg='blue.500'
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
							color='blue.500'
							position='absolute'
							bottom={-4}
							left='50%'
							transform='translateX(-50%)'>
							{" "}
							Request Now
						</Button>
					</Box>

					<Box
						bg='blue.500'
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
							color='blue.500'
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
					<Button
						mt={4}
						colorScheme='blue'
						size='lg'
						onClick={() => setIsUpgraded(false)}>
						Unlock Course
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default AdvanceTrainingCourseModule;
