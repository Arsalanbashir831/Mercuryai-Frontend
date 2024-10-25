import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function AdvanceTrainingCourseModuleHeader() {
	return (
		<Box
			mt={4}
			mb={6}
			bg='linear-gradient(0deg, #40E0D0 0%, #2196F3 100%)'
			p={4}
			position='relative'>
			<Text fontSize='2xl' fontWeight='bold' color='white'>
				Pro Advance Training Course
			</Text>
			<Flex direction='column' gap={2} color='gray.100'>
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
				bg='whiteAlpha.400'
				size='sm'
				rightIcon={<Icon icon='mdi:arrow-right' />}>
				Continue learning
			</Button>
		</Box>
	);
}
