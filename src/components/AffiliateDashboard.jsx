import React, { useState } from "react";
import {
	Box,
	Button,
	Grid,
	Text,
	VStack,
	HStack,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	useClipboard,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	Flex,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import RefferalForm from "./RefferalForm";
import ContactSupportModal from "./ContactSupportModal";
import VideoPlayer from "./VideoPlayer";
import ResponsiveLineChart from "./ResponsiveLineChart";
import CustomButton from "./CustomButton";

const chartData = [
	{ name: "Elemento 1", value: 20 },
	{ name: "Elemento 2", value: 25 },
	{ name: "Elemento 3", value: 22 },
	{ name: "Elemento 4", value: 35 },
	{ name: "Elemento 5", value: 35 },
];

const clientData = [
	{
		n: 1,
		name: "Gianpaolo Fontana",
		email: "GianpaoloFontana@Gmail.com",
		registrationDate: "2024-10-10",
		subscriptionPlan: "Free",
		status: "Active",
	},
];

const balancePayments = [
	{ money: "10$", date: "2024-10-01/2024-10-31", status: "Paid" },
	{ money: "10$", date: "2024-10-01/2024-10-31", status: "In Process" },
];

const AffiliateDashboard = () => {
	const affiliateLink = "www.mercuryai.io/access-gianpaolo-25off";
	const { onCopy } = useClipboard(affiliateLink);
	const {
		isOpen: isVideoOpen,
		onOpen: onVideoOpen,
		onClose: onVideoClose,
	} = useDisclosure();
	const {
		isOpen: isAffiliateSettingOpen,
		onOpen: onAffiliateSettingOpen,
		onClose: onAffiliateSettingClose,
	} = useDisclosure();
	const {
		isOpen: isSupportOpen,
		onOpen: onSupportOpen,
		onClose: onSupportClose,
	} = useDisclosure();
	const [isAffiliationFormSubmitted, setIsAffiliationFormSubmitted] =
		useState(false);

	return (
		<>
			<Box
				height='100%'
				overflow='hidden'
				position='relative'
				overflowY='auto'
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
				<Box mb={10}>
					<HStack justify='space-between' wrap='wrap' spacing={4} p={6}>
						<Text fontSize='2xl' fontWeight='bold' color='white'>
							Referral Program
						</Text>
						<HStack spacing={4}>
							<CustomButton onClick={onSupportOpen} label='Contact Support' />
							<CustomButton
								onClick={onAffiliateSettingOpen}
								label='Affiliate Settings'
							/>
							<CustomButton onClick={onVideoOpen} label='Training Videos' />
						</HStack>
					</HStack>

					<VStack spacing={6} align='stretch' px={6}>
						{/* Stats Grid */}
						<Grid
							templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
							gap={4}>
							<Box bg='gray.800' p={4} borderRadius='lg'>
								<Text color='white' textAlign='center'>
									Revenue Percentage
								</Text>
								<Text color='white' fontSize='2xl' textAlign='center'>
									25%
								</Text>
							</Box>

							<Box bg='gray.800' p={4} borderRadius='lg'>
								<Text color='white' textAlign='center'>
									Discount Percentage
								</Text>
								<Text color='white' fontSize='2xl' textAlign='center'>
									25%
								</Text>
							</Box>

							<Box bg='gray.800' p={4} borderRadius='lg'>
								<Text color='white' textAlign='center'>
									Entered Customers
								</Text>
								<Text color='white' fontSize='2xl' textAlign='center'>
									N.10
								</Text>
							</Box>

							<Box bg='gray.800' p={4} borderRadius='lg' position='relative'>
								<Text color='white' textAlign='center'>
									Link Affiliate
								</Text>
								<HStack justify='center' spacing={2}>
									<Text color='white' fontSize='sm' isTruncated maxW='200px'>
										{affiliateLink}
									</Text>
									<Button size='sm' onClick={onCopy} colorScheme='blue'>
										<Icon icon='bi:clipboard' />
									</Button>
								</HStack>
							</Box>
						</Grid>

						{/* Cash and Balance Section */}
						<Grid
							templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
							gap={4}>
							<Flex
								direction='column'
								justifyContent='center'
								bg='gray.800'
								p={4}
								borderRadius='lg'>
								<Box
									bg='linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)'
									borderRadius='full'
									w='15'
									mx='auto'
									p={2}
									mb={3}>
									<Icon
										icon='vaadin:cash'
										color='white'
										width='42'
										height='42'
									/>
								</Box>
								<Text color='white' textAlign='center'>
									Cash in
								</Text>
								<Text color='white' fontSize='2xl' textAlign='center' mb={9}>
									1000$
								</Text>
							</Flex>

							<Flex
								direction='column'
								justifyContent='center'
								bg='gray.800'
								p={4}
								borderRadius='lg'>
								<Box
									bg='linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)'
									borderRadius='full'
									w='15'
									mx='auto'
									p={2}
									mb={3}>
									<Icon
										icon='game-icons:cash'
										color='white'
										width='42'
										height='42'
									/>
								</Box>
								<Text color='white' textAlign='center'>
									Balance to Request
								</Text>
								<Text color='white' fontSize='2xl' textAlign='center'>
									100$
								</Text>
								<CustomButton label='Request Balance' size='sm' mt={2} />
							</Flex>

							<Box bg='gray.800' p={4} borderRadius='lg'>
								<Text color='white' mb={2}>
									Balance payments
								</Text>
								<Table size='sm' variant='simple' color='white'>
									<Thead>
										<Tr>
											<Th color='gray.300'>Money</Th>
											<Th color='gray.300'>Date</Th>
											<Th color='gray.300'>Status</Th>
										</Tr>
									</Thead>
									<Tbody>
										{balancePayments.map((payment, idx) => (
											<Tr key={idx}>
												<Td color='green.300'>{payment.money}</Td>
												<Td>{payment.date}</Td>
												<Td
													color={
														payment.status === "Paid"
															? "green.300"
															: "yellow.300"
													}>
													{payment.status}
												</Td>
											</Tr>
										))}
									</Tbody>
								</Table>
							</Box>
						</Grid>

						{/* Chart */}
						<ResponsiveLineChart chartData={chartData} />

						{/* Clients Table */}
						<Box bg='gray.800' p={4} borderRadius='lg' overflowX='auto'>
							<Text color='white' mb={4}>
								Client
							</Text>
							<Table variant='simple' color='white'>
								<Thead>
									<Tr>
										<Th color='gray.300'>N.</Th>
										<Th color='gray.300'>Name Client</Th>
										<Th color='gray.300'>Email</Th>
										<Th color='gray.300'>Registration Date</Th>
										<Th color='gray.300'>Subscription Plan</Th>
										<Th color='gray.300'>Current Status</Th>
									</Tr>
								</Thead>
								<Tbody>
									{clientData.map((client) => (
										<Tr key={client.n}>
											<Td>{client.n}</Td>
											<Td>{client.name}</Td>
											<Td>{client.email}</Td>
											<Td>{client.registrationDate}</Td>
											<Td>{client.subscriptionPlan}</Td>
											<Td color='green.300'>{client.status}</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</Box>
					</VStack>
				</Box>
			</Box>

			{/* Video Modal */}
			<Modal isOpen={isVideoOpen} onClose={onVideoClose} size='xl' isCentered>
				<ModalOverlay bg='blackAlpha.700' backdropFilter='blur(10px)' />
				<ModalContent bg='gray.800' color='white'>
					<ModalHeader>Training Videos</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<VideoPlayer />
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* Affiliate Setting Modal */}
			<Modal
				isOpen={isAffiliateSettingOpen}
				onClose={onAffiliateSettingClose}
				size='xl'
				isCentered>
				<ModalOverlay bg='blackAlpha.700' backdropFilter='blur(10px)' />
				<ModalContent bg='gray.800' color='white'>
					<ModalHeader textAlign={"center"}>Affiliate Settings</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<RefferalForm
							isSubmitted={isAffiliationFormSubmitted}
							setIsSubmitted={setIsAffiliationFormSubmitted}
							buttonLabel='Request Change'
							showCheckBox={false}
							showFormSubmittedMessage={true}
							formSubmittedMessage='One of our assistants will contact you by email to let you know if your data has been accepted or if we need further clarifications'
						/>
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* Contact Support Modal */}
			<Modal
				isOpen={isSupportOpen}
				onClose={onSupportClose}
				size='lg'
				isCentered>
				<ModalOverlay bg='blackAlpha.700' backdropFilter='blur(10px)' />
				<ModalContent bg='gray.800' color='white'>
					<ModalHeader fontSize='2xl' textAlign='center'>
						Contact Support
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<ContactSupportModal />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AffiliateDashboard;
