import React, { useState } from "react";
import {
	Box,
	VStack,
	HStack,
	FormControl,
	FormLabel,
	Input,
	Button,
	Card,
	CardHeader,
	CardBody,
	Heading,
	useColorModeValue,
	Icon,
} from "@chakra-ui/react";
import { Icon as IconifyIcon } from "@iconify/react";

const AccountSettings = () => {
	const [formData, setFormData] = useState({
		name: "Name Client",
		email: "Email Client",
		password: "********",
		country: "Italy",
		city: "Italy",
		address: "Italy",
	});

	const [isEditing, setIsEditing] = useState(false);

	const bgColor = "gray.800";
	const borderColor = "gray.700";

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsEditing(false);
		// Handle form submission here
	};

	return (
		<Box
			maxW='container'
			maxH='100%'
			mx='auto'
			py={8}
			px={4}
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": {
					width: "4px",
					height: "4px",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "gray.300",
					borderRadius: "full",
				},
				"&::-webkit-scrollbar-thumb:hover": {
					background: "gray.500",
				},
			}}>
			<Card
				bg={bgColor}
				boxShadow='lg'
				borderRadius='lg'
				borderWidth='1px'
				borderColor={borderColor}>
				<CardHeader p={6} borderBottomWidth='1px' borderColor={borderColor}>
					<HStack justify='space-between' align='center'>
						<Heading size='lg' textColor='white'>
							User Settings
						</Heading>
						<Box
							p={2}
							borderRadius='full'
							bg='gray.100'
							_dark={{ bg: "gray.700" }}>
							<IconifyIcon
								icon='solar:user-circle-bold'
								width='48'
								height='48'
								style={{ opacity: 0.7 }}
							/>
						</Box>
					</HStack>
				</CardHeader>

				<CardBody p={6}>
					<form onSubmit={handleSubmit}>
						<VStack spacing={6}>
							<FormControl>
								<FormLabel textColor='white'>Name</FormLabel>
								<Input
									name='name'
									value={formData.name}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<FormControl>
								<FormLabel textColor='white'>Email</FormLabel>
								<Input
									name='email'
									type='email'
									value={formData.email}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<FormControl>
								<FormLabel textColor='white'>Password</FormLabel>
								<Input
									name='password'
									type='password'
									value={formData.password}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<FormControl>
								<FormLabel textColor='white'>Country</FormLabel>
								<Input
									name='country'
									value={formData.country}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<FormControl>
								<FormLabel textColor='white'>City</FormLabel>
								<Input
									name='city'
									value={formData.city}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<FormControl>
								<FormLabel textColor='white'>Address</FormLabel>
								<Input
									name='address'
									value={formData.address}
									onChange={handleChange}
									isDisabled={!isEditing}
									variant='filled'
								/>
							</FormControl>

							<HStack spacing={4} width='full' justify='flex-end' pt={4}>
								{!isEditing ? (
									<Button
										leftIcon={<IconifyIcon icon='solar:pen-bold' />}
										colorScheme='blue'
										onClick={() => setIsEditing(true)}>
										Edit Profile
									</Button>
								) : (
									<>
										<Button
											variant='outline'
											onClick={() => setIsEditing(false)}>
											Cancel
										</Button>
										<Button
											type='submit'
											colorScheme='blue'
											leftIcon={<IconifyIcon icon='solar:disk-bold' />}>
											Save Changes
										</Button>
									</>
								)}
							</HStack>
						</VStack>
					</form>
				</CardBody>
			</Card>
		</Box>
	);
};

export default AccountSettings;
