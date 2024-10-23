import React from "react";
import {
	Box,
	Container,
	Heading,
	Text,
	Button,
	VStack,
	HStack,
	Avatar,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const AccountSettings = () => {
	const userInfo = {
		name: "Name Client",
		email: "Email Client",
		password: "**********",
		country: "Italy",
		city: "Italy",
		address: "Italy",
	};

	return (
		<Container maxW='full' p={4} minH='100vh'>
			<Box
				w='full'
				maxW='800px'
				mx='auto'
				position='relative'
				color='white'
				pt={4}>
				{/* Avatar positioned to the right */}
				<Box position='absolute' right='10' top='5'>
					<Avatar
						size='xl'
						bg='gray.600'
						icon={
							<Icon icon='ph:user-bold' width='40' height='40' color='white' />
						}
					/>
				</Box>

				{/* Settings Content */}
				<Box>
					<Heading size='lg' mb={6}>
						User Settings
					</Heading>

					<VStack align='stretch' spacing={4}>
						{Object.entries(userInfo).map(([key, value]) => (
							<HStack key={key} spacing={2}>
								<Text
									fontWeight='medium'
									textTransform='capitalize'
									minW='100px'>
									{key} :
								</Text>
								<Text color='gray.300'>{value}</Text>
							</HStack>
						))}
					</VStack>

					{/* Edit Button */}
					<Button
						leftIcon={<Icon icon='solar:pen-linear' />}
						bg='#37ABC8'
						color='white'
						mt={20}
						px={6}
						_hover={{ bg: "#2D95B0" }}>
						Edit
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default AccountSettings;
