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
} from "@chakra-ui/react";
import RefferalForm from "./RefferalForm";
import VideoPlayer from "./VideoPlayer";
import { useRefferal } from "../context/RefferalContext";

const StepCard = ({ image, step }) => (
	<Box textAlign='center'>
		<Image
			src={image || `https://via.placeholder.com/150?text=Step+${step}`}
			alt={`Step ${step}`}
			borderRadius='md'
			mb={2}
		/>
		<Text color='white' fontWeight='bold'>
			Step {step}
		</Text>
	</Box>
);

const ReferralProgram = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { submitRefferal } = useRefferal();

	useEffect(() => {
		if (isSubmitted) {
			submitRefferal();
		}
	}, [isSubmitted]);

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
					<Heading color='white' size='lg'>
						Referral Program
					</Heading>

					<VideoPlayer />

					<Box>
						<Heading color='white' size='md' mb={4}>
							Getting Started is Simple
						</Heading>
						<Text color='gray.300' mb={4}>
							Apply for our affiliate program easily
						</Text>

						<Grid templateColumns='repeat(3, 1fr)' gap={4}>
							{[1, 2, 3].map((step) => (
								<StepCard key={step} step={step} />
							))}
						</Grid>
					</Box>
				</VStack>

				{/* Right Section - Form */}
				<Box bg='gray.800' p={6} borderRadius='lg'>
					<VStack align='stretch' spacing={6}>
						<Heading color='white' size='lg'>
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
							<Box bg='gray.800' p={6} borderRadius='lg' width='100%'>
								<VStack spacing={6} align='center'>
									<Center mt={4}>
										<Text fontSize='4xl'>🎆</Text>
									</Center>
									<Text
										fontSize='2xl'
										fontWeight='bold'
										color='white'
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
