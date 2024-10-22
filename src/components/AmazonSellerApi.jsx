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
				<Flex justify='space-between' align='center' mb={4}>
					<HStack spacing={2}>
						<Text color='white' fontSize='xl' fontWeight='bold'>
							A000000000
						</Text>
						<Badge
							bg='#00E676'
							color='white'
							px={2}
							py={1}
							borderRadius='md'
							fontSize={10}>
							Connect
						</Badge>
					</HStack>
					<Icon
						icon='proicons:delete'
						color='red'
						width='24'
						height='24'
						cursor='pointer'
					/>
				</Flex>

				<HStack spacing={8}>
					<Box position='relative' display='flex'>
						<Box borderRadius='full' overflow='hidden' bg='gray.100'>
							<Icon icon='flag:de-4x3' width='32' height='32' />
						</Box>
						<Box
							borderRadius='full'
							overflow='hidden'
							bg='gray.100'
							position='absolute'
							left='24px'
							top='0'>
							<Icon icon='flag:us-4x3' width='32' height='32' />
						</Box>
					</Box>

					<Box
						bg='rgba(255, 255, 255, 0.2)'
						px={2}
						py={1}
						borderRadius='full'
						color='white'>
						+3
					</Box>
				</HStack>

				{/* Bottom Token Button */}
				<Button
					variant='ghost'
					mt={10}
					color='white'
					bg='rgba(255, 255, 255, 0.1)'
					_hover={{
						bg: "rgba(255, 255, 255, 0.2)",
					}}
					px={2}
					height='20px'
					borderRadius='md'
					fontSize={8}>
					Show Automatic Token
				</Button>
			</Box>
		</Box>
	);
};

const AmazonSellerApi = () => {
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
				<Text color='white' fontSize='2xl' fontWeight='bold'>
					Amazon Seller Api
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
						Connect Amazon Seller Account
					</Button>
					<Button
						bg='linear-gradient(90deg, #2196F3 0%, #1976D2 100%)'
						color='white'
						size='md'
						_hover={{
							bg: "linear-gradient(90deg, #1E88E5 0%, #1565C0 100%)",
						}}
						borderRadius='md'>
						Connect Seller Account Amazon ADS
					</Button>
				</HStack>
			</Flex>

			{/* Card Component */}
			<Flex gap={8} wrap='wrap'>
				<Card />
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

export default AmazonSellerApi;
