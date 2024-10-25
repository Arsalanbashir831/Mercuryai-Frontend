import React from "react";
import {
	Box,
	Text,
	Button,
	HStack,
	VStack,
	Badge,
	Flex,
	useToast,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Card = ({ title, description, icon, color }) => {
	return (
		<Box
			w='360px'
			bg='#0D47A1'
			borderRadius='xl'
			overflow='hidden'
			position='relative'>
			<Box p={6}>
				<Flex justify='space-between' align='flex-start' mb={4}>
					<Icon
						icon='brandico:visa'
						color='white'
						width='70'
						cursor='pointer'
					/>
					<Badge
						bg='#00E676'
						color='white'
						px={2}
						py={1}
						borderRadius='md'
						fontSize={8}>
						Verified
					</Badge>
				</Flex>

				<HStack spacing={2}>
					<Text color='white' fontSize='lg' fontWeight='bold'>
						Card Number
					</Text>
					<Text color='white' fontSize='sm'>
						4545 **** **** ****
					</Text>
				</HStack>

				<HStack spacing={2}>
					<Text color='white' fontSize='lg' fontWeight='bold'>
						Account Name
					</Text>
					<Text color='white' fontSize='sm'>
						Client Name
					</Text>
				</HStack>

				<HStack spacing={2}>
					<Text color='white' fontSize='lg' fontWeight='bold'>
						Date
					</Text>
					<Text color='white' fontSize='sm'>
						10/09
					</Text>
				</HStack>
			</Box>
		</Box>
	);
};

const PaymentManagement = () => {
	const toast = useToast();

	return (
		<Box
			height='100%'
			overflowY='auto'
			p={8}
			sx={{
				"&::-webkit-scrollbar": {
					width: "8px",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "gray.300",
					borderRadius: "full",
				},
				"&::-webkit-scrollbar-thumb:hover": {
					background: "gray.500",
				},
			}}>
			{/* Header Section */}
			<Flex justify='space-between' align='center' mb={8}>
				<Text
					color={useColorModeValue("gray.800", "white")}
					fontSize='2xl'
					fontWeight='bold'>
					Card Details
				</Text>
				<HStack spacing={4}>
					<Button
						bg='linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)'
						color='white'
						size='md'
						_hover={{
							bg: "linear-gradient(90deg, #3DD1C2 0%, #1E88E5 100%)",
						}}
						borderRadius='md'>
						Edit Card
					</Button>
					<Button
						bg='linear-gradient(90deg, #2196F3 0%, #1976D2 100%)'
						color='white'
						size='md'
						_hover={{
							bg: "linear-gradient(90deg, #1E88E5 0%, #1565C0 100%)",
						}}
						borderRadius='md'>
						Add Card
					</Button>
				</HStack>
			</Flex>

			{/* Card Component */}
			<Flex gap={8} wrap='wrap'>
				<Card />
			</Flex>

			{false &&
				toast({
					title: "Amazon Seller Api",
					description: "Amazon Seller Api connected successfully",
					status: "success",
					isClosable: true,
				})}
		</Box>
	);
};

export default PaymentManagement;
