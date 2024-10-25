import React from "react";
import {
	Box,
	Container,
	Heading,
	Text,
	VStack,
	HStack,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import CustomButton from "./CustomButton";

const AccountSettings = () => {
	const userInfo = {
		name: "Name Client",
		email: "Email Client",
		password: "**********",
		country: "Italy",
		city: "Italy",
		address: "Italy",
	};

	// Define color mode values
	const textColor = useColorModeValue("gray.800", "white"); // Text color
	const subTextColor = useColorModeValue("gray.500", "gray.300"); // Subtext color
	const avatarBg = useColorModeValue("gray.400", "gray.800"); // Avatar background color

	return (
		<Container maxW='full' p={4} minH='100vh'>
			<Box
				w='full'
				maxW='800px'
				mx='auto'
				position='relative'
				color={textColor}
				borderRadius='md'
				pt={4}>
				{/* Avatar positioned to the right */}
				<Box position='absolute' right='10' top='5'>
					<Avatar
						size='xl'
						bg={avatarBg}
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
								<Text color={subTextColor}>{value}</Text>
							</HStack>
						))}
					</VStack>

					{/* Edit Button */}
					<CustomButton
						icon='solar:pen-linear'
						label='Edit'
						w='auto'
						px={6}
						mt={20}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default AccountSettings;
