import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Grid,
	Heading,
	Text,
	VStack,
	Image,
	Center,
	useColorModeValue,
} from "@chakra-ui/react";
import RefferalForm from "./RefferalForm";
import VideoPlayer from "./VideoPlayer";
import { useRefferal } from "../context/RefferalContext";
import placeholderImage from "../assets/placeholders/200x150.svg";

const StepCard = ({ image, step }) => {
	const textColor = useColorModeValue("gray.800", "white");
	return (
		<Box textAlign='center'>
			<Image
				src={image || `https://placehold.co/150?text=Step+${step}`}
				alt={`Step ${step}`}
				borderRadius='md'
				mb={2}
			/>
			<Text color={textColor} fontWeight='bold'>
				Step {step}
			</Text>
		</Box>
	);
};

const ReferralProgram = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { submitRefferal } = useRefferal();

	useEffect(() => {
		if (isSubmitted) {
			submitRefferal();
		}
	}, [isSubmitted]);

	// Define colors based on the current color mode
	const cardBgColor = useColorModeValue("gray.100", "gray.900");
	const textColor = useColorModeValue("gray.800", "white");
	const headingColor = useColorModeValue("gray.900", "white");
	const subheadingColor = useColorModeValue("gray.600", "gray.300");

	return (
		<Container
			maxW='container.xl'
			h='100vh'
			py={8}
			overflowY='auto'
			position='relative'
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
					"&:hover": {
						background: "rgba(255, 255, 255, 0.3)",
					},
				},
			}}>
			<Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} mb={20}>
				{/* Left Section */}
				<VStack align='stretch' spacing={6}>
					<Heading color={headingColor} size='lg'>
						Referral Program
					</Heading>

					<VideoPlayer />

					<Box>
						<Heading color={headingColor} size='md' mb={4}>
							Getting Started is Simple
						</Heading>
						<Text color={subheadingColor} mb={4}>
							Apply for our affiliate program easily
						</Text>

						<Grid templateColumns='repeat(3, 1fr)' gap={4}>
							{[1, 2, 3].map((step) => (
								<StepCard key={step} step={step} image={placeholderImage} />
							))}
						</Grid>
					</Box>
				</VStack>

				{/* Right Section - Form */}
				<Box bg={cardBgColor} p={6} borderRadius='lg'>
					<VStack align='stretch' spacing={6}>
						<Heading color={headingColor} size='lg'>
							Presentation text
						</Heading>

						<Text color='orange.300' fontSize='lg' textAlign='center'>
							Customer Name, are you ready to embark on this new adventure?
						</Text>

						{!isSubmitted ? (
							<RefferalForm
								isSubmitted={isSubmitted}
								setIsSubmitted={setIsSubmitted}
							/>
						) : (
							<Box bg={cardBgColor} p={6} borderRadius='lg' width='100%'>
								<VStack spacing={6} align='center'>
									<Center mt={4}>
										<Text fontSize='4xl'>🎆</Text>
									</Center>
									<Text
										fontSize='2xl'
										fontWeight='bold'
										color={headingColor}
										textAlign='center'>
										Perfect, now wait 24 hours so that your request can be
										reviewed for any additional information contact
									</Text>
									<Text fontSize='xl' color='blue.400'>
										referral@mercuryai.io
									</Text>
								</VStack>
							</Box>
						)}
					</VStack>
				</Box>
			</Grid>
		</Container>
	);
};

export default ReferralProgram;
