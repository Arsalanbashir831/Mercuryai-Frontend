import React, { useState } from "react";
import {
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Td,
	Text,
	Checkbox,
	Container,
	Link,
	Flex,
	Switch,
	Button,
	Heading,
	Image,
} from "@chakra-ui/react";
import ribbonImg from "../assets/ribbon.png";

const PLAN_DETAILS = [
	{
		name: "Free",
		price: "Free",
		annualPrice: "Free",
		features: ["Limited", "Limited", "X"],
	},
	{
		name: "Basic",
		price: "$19.99 / mo",
		annualPrice: "$199.99 / yr",
		features: ["Unlimited", "Limited", "X"],
	},
	{
		name: "Pro Advanced",
		price: "$97.99 / mo",
		annualPrice: "$997.99 / yr",
		features: ["Unlimited", "Unlimited", "✓"],
		popular: true,
	},
];

const PlanSelectionTable = () => {
	const [selectedColumn, setSelectedColumn] = useState(null);
	const [billingType, setBillingType] = useState("monthly");

	const renderFeatureRows = () => {
		return PLAN_DETAILS.map((plan, colIndex) => (
			<Td
				key={colIndex}
				borderWidth={selectedColumn === colIndex + 1 ? "2px" : "0px"}
				borderColor={selectedColumn === colIndex + 1 ? "yellow" : "white"}
				borderBottom='1px solid'
				textAlign={colIndex === 1 ? "center" : "left"}>
				{colIndex === 0 ? plan.price : plan.features[colIndex - 1]}
			</Td>
		));
	};

	return (
		<Container maxW='container.lg' py={4} h='100%'>
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

			<Flex direction='column'>
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
							color='blue.400'
							borderColor='blue.400'
							borderRadius='full'
							_hover={{ bg: "transparent" }}>
							10% Annual Off
						</Button>
					)}
				</Flex>
			</Flex>

			<Table variant='simple'>
				<Thead>
					<Tr>
						<Td fontWeight='bold'>Features</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderBottom='1px solid'
								fontWeight='bold'
								position='relative'>
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
								{plan.name}
							</Td>
						))}
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td fontWeight='bold'>Price</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom='1px solid'>
								{billingType === "monthly" ? plan.price : plan.annualPrice}
							</Td>
						))}
					</Tr>
					<Tr>
						<Td fontWeight='bold'>Mercury Ai Chat</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom='1px solid'>
								{plan.features[0]}
							</Td>
						))}
					</Tr>
					<Tr>
						<Td fontWeight='bold'>
							Mercury Training for Your Business Success
						</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom='1px solid'>
								{plan.features[1]}
							</Td>
						))}
					</Tr>
					<Tr>
						<Td fontWeight='bold'>
							Amazon Seller and Amazon Advertising API Access
						</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom='1px solid'
								textAlign='center'>
								{plan.features[2]}
							</Td>
						))}
					</Tr>
					<Tr>
						<Td fontWeight='bold' borderBottom={0}></Td>
						{PLAN_DETAILS.map((_, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom={
									selectedColumn === index + 1 ? "2px solid yellow" : "0"
								}
								textAlign='center'>
								<Checkbox
									isChecked={selectedColumn === index + 1}
									onChange={() => setSelectedColumn(index + 1)} // Set column index for selected plan
								/>
							</Td>
						))}
					</Tr>
				</Tbody>
			</Table>
			{/* <Text mt={4} mb={2} textAlign='center'>
				<Link color='blue.300' textDecoration='underline'>
					Find out more on the dedicated page later
				</Link>
			</Text> */}
		</Container>
	);
};

export default PlanSelectionTable;
