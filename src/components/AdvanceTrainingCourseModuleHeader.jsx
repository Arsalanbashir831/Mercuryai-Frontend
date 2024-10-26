import React from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import CustomButton from "./CustomButton";
import wavesBg from "../assets/waves.png";

const AdvanceTrainingCourseModuleHeader = ({ isUpgraded, setIsUpgraded }) => {
	const lockedOverlayBg = useColorModeValue("blackAlpha.700", "blackAlpha.900");
	const lockedOverlayTextColor = useColorModeValue("white", "gray.200");

	return (
		<Box
			mt={4}
			mb={6}
			p={4}
			position='relative'
			overflow='hidden'
			background='linear-gradient(0deg, #40E0D0 0%, #2196F3 100%)'
			borderRadius='md'>
			{/* Pseudo-elements for left and right images */}
			<Box
				position='absolute'
				top='-10'
				right='-2'
				w='30%'
				h='100%'
				backgroundImage={`url(${wavesBg})`}
				backgroundPosition='center'
				backgroundSize='cover'
				opacity={0.7}
				zIndex={1}
				transform={`rotate(8deg)`}
			/>

			<Box
				position='absolute'
				top='-10'
				left='-2'
				w='30%'
				h='100%'
				backgroundImage={`url(${wavesBg})`}
				backgroundPosition='center'
				backgroundSize='cover'
				opacity={0.7}
				zIndex={1}
				transform={`rotate(-8deg) scaleX(-1)`}
			/>

			{/* Content Section */}
			<Box position='relative' zIndex={2} textAlign='left'>
				<Text fontSize='2xl' fontWeight='bold' color='white'>
					Pro Advance Training Course
				</Text>

				<Flex direction='column' gap={2} color='gray.100' alignItems='left'>
					<Text>Let's proceed, Client Name</Text>
					<Flex align='center' gap={2}>
						<Icon icon='mdi:progress-check' />
						<Text>0% COMPLETE</Text>
					</Flex>
				</Flex>

				<Button
					position='absolute'
					bottom={2}
					right={4}
					colorScheme='whiteAlpha'
					bg='whiteAlpha.400'
					color='white'
					size='sm'
					rightIcon={<Icon icon='mdi:arrow-right' />}>
					Continue learning
				</Button>
			</Box>

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
					zIndex={10}>
					<Icon icon='mdi:lock' width='52' height='52' />
					<CustomButton
						label='Unlock Course'
						onClick={() => setIsUpgraded(false)}
						w={52}
						size='md'
						mt={4}
					/>
				</Box>
			)}
		</Box>
	);
};

export default AdvanceTrainingCourseModuleHeader;
