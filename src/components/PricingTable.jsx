import React, { useState } from "react";
import {
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Td,
	Text,
	Switch,
	Container,
	Button,
	Heading,
	Flex,
	Image,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import ribbonImg from "../assets/ribbon.png";

// Plans Data
const PLANS = [
	{ name: "Free", annualName: "Free", value: "free" },
	{ name: "$19.99", annualName: "$199.99", value: "standard" },
	{ name: "$97.99", annualName: "$997.99", value: "premium", popular: true },
];

// Features Data
const FEATURES = [
	{
		name: "Mercury AI Chat",
		values: ["25 Messages per day", "Unlimited", "Unlimited"],
	},
	{ name: "Basic Course", values: [true, true, true] },
	{ name: "Pro Advance Course for your success", values: [false, false, true] },
	{ name: "AI suggestions for your products", values: [false, false, true] },
	{
		name: "Synchronized Connection with your Amazon Account",
		values: [false, false, true],
	},
	{ name: "Creation and Management of PPC ADS", values: [false, false, true] },
	{
		name: "Do the work on your Amazon account for you",
		values: [false, false, true],
	},
];

const SubscriptionTable = () => {
	const [billingType, setBillingType] = useState("monthly");
	const [currentPlan, setCurrentPlan] = useState("free");

	// Helper to get plan price based on billing type
	const getPlanName = (plan) =>
		billingType === "monthly" ? plan.name : plan.annualName;
	const isSelected = (planValue) => currentPlan === planValue;

	return (
		<Container
			maxW='8xl'
			py={4}
			h='100%'
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": { width: "8px" },
				"&::-webkit-scrollbar-track": {
					background: "rgba(255, 255, 255, 0.1)",
					borderRadius: "4px",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "rgba(255, 255, 255, 0.2)",
					borderRadius: "4px",
					"&:hover": { background: "rgba(255, 255, 255, 0.3)" },
				},
			}}>
			{/* Free Trial Banner */}
			<Box
				bg='red.600'
				color='white'
				textAlign='center'
				mb={6}
				py={2}
				borderRadius='md'
				fontSize='sm'>
				Try any plan for free for 14 days
			</Box>

			{/* Header Section */}
			<Flex direction='column' mb={6}>
				<Flex justify='space-between' align='center' mb={4}>
					<Heading color='white' size='lg' mb={2}>
						Subscription
					</Heading>
					<Button
						size='sm'
						variant='outline'
						color='gray'
						borderColor='gray'
						_hover={{ bg: "white" }}>
						Stop Subscription
					</Button>
				</Flex>
				<Heading color='white' size='md' mb={4}>
					Prices and Billing
				</Heading>

				<Flex align='center' gap={4} mb={4} flexWrap='wrap'>
					<Text color='white'>Monthly</Text>
					<Switch
						colorScheme='blue'
						onChange={(e) =>
							setBillingType(e.target.checked ? "annually" : "monthly")
						}
					/>
					<Text color='white'>Annually</Text>
					{billingType === "annually" && (
						<Button
							size='sm'
							variant='outline'
							color='cyan.400'
							borderColor='cyan.400'
							borderRadius='full'
							_hover={{ bg: "transparent" }}>
							10% Annual Off
						</Button>
					)}
				</Flex>
			</Flex>

			{/* Plans Table */}
			<Box borderRadius='md' border='1px solid' borderColor='white'>
				<Table variant='simple' bg='rgb(27, 99, 129)' color='white'>
					<Thead>
						<Tr>
							<Td
								borderWidth='1px'
								borderColor='white'
								minW='200px'
								whiteSpace='normal'>
								<Text fontWeight='bold' fontSize='xl'>
									Compare Plans
								</Text>
								<Text fontSize='sm'>
									Compare available plans that best suit your needs
								</Text>
							</Td>
							{PLANS.map((plan) => (
								<Td
									key={plan.value}
									borderWidth={isSelected(plan.value) ? "2px" : "1px"}
									borderColor={isSelected(plan.value) ? "yellow" : "white"}
									borderBottom='1px solid white'
									position='relative'
									whiteSpace='normal'>
									{plan.popular && (
										<Box
											position='absolute'
											top='-5'
											right='-4'
											display='flex'
											alignItems='center'
											gap={1}>
											{/* MOST POPULAR
											<Icon icon='emojione:trophy' /> */}
											<Image src={ribbonImg} w={12} />
										</Box>
									)}
									<Flex direction='column' gap={2}>
										<Text fontWeight='bold' fontSize='xl'>
											{getPlanName(plan)}
											{getPlanName(plan) !== "Free"
												? billingType === "monthly"
													? "/Month"
													: "/Annual"
												: ""}
										</Text>
										{currentPlan === plan.value && (
											<Button
												position='absolute'
												top='-10'
												left='12'
												size='sm'
												bg='cyan.400'
												color='white'
												borderRadius='full'
												borderEndStartRadius={0}
												mb={2}>
												Your current plan
											</Button>
										)}
										<Button
											bg={plan.popular ? "cyan.400" : "transparent"}
											color='white'
											borderColor={!plan.popular ? "white" : "transparent"}
											variant={!plan.popular ? "outline" : "solid"}
											w='full'
											onClick={() => setCurrentPlan(plan.value)}
											_hover={{
												bg: plan.popular ? "cyan.500" : "whiteAlpha.200",
											}}>
											Choose This Plan
										</Button>
									</Flex>
								</Td>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{FEATURES.map((feature, rowIndex) => (
							<Tr key={feature.name}>
								<Td borderWidth='1px' borderColor='white' whiteSpace='normal'>
									{feature.name}
								</Td>
								{feature.values.map((value, colIndex) => {
									const isLastRow = rowIndex === FEATURES.length - 1;
									const isCurrentColumnSelected = isSelected(
										PLANS[colIndex].value
									);

									return (
										<Td
											key={colIndex}
											borderWidth={isCurrentColumnSelected ? "2px" : "1px"}
											borderColor={isCurrentColumnSelected ? "yellow" : "white"}
											borderTop='1px solid white'
											borderBottom={
												isLastRow && isCurrentColumnSelected
													? "2px solid yellow"
													: "1px solid white"
											}
											whiteSpace='normal'>
											{typeof value === "boolean" ? (
												<Icon
													icon={
														value
															? "akar-icons:circle-check-fill"
															: "akar-icons:circle-x"
													}
													color={value ? "#4CAF50" : "#9E9E9E"}
													width='24'
												/>
											) : (
												value
											)}
										</Td>
									);
								})}
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</Container>
	);
};

export default SubscriptionTable;
