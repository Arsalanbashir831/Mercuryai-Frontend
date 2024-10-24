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
} from "@chakra-ui/react";

const PLAN_DETAILS = [
	{ name: "Free", price: "$9.99 / mo", features: ["Limited", "Limited", "X"] },
	{
		name: "Basic",
		price: "$19.99 / mo",
		features: ["Unlimited", "Limited", "X"],
	},
	{
		name: "Pro Advanced",
		price: "$97.99 / mo",
		features: ["Unlimited", "Unlimited", "✓"],
	},
];

const PlanSelectionTable = () => {
	const [selectedColumn, setSelectedColumn] = useState(null); // State to track the selected column

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
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Td>Features</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderBottom='1px solid'>
								{plan.name}
							</Td>
						))}
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Price</Td>
						{PLAN_DETAILS.map((plan, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom='1px solid'>
								{plan.price}
							</Td>
						))}
					</Tr>
					<Tr>
						<Td>Mercury Ai Chat</Td>
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
						<Td>Mercury Training for Your Business Success</Td>
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
						<Td>Amazon Seller and Amazon Advertising API Access</Td>
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
						<Td></Td>
						{PLAN_DETAILS.map((_, index) => (
							<Td
								key={index}
								borderWidth={selectedColumn === index + 1 ? "2px" : "0px"}
								borderColor={selectedColumn === index + 1 ? "yellow" : "white"}
								borderTop='1px solid'
								borderBottom={
									selectedColumn === index + 1
										? "2px solid yellow"
										: "1px solid white"
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
			<Text mt={4} mb={2} textAlign='center'>
				<Link color='blue.300' textDecoration='underline'>
					Find out more on the dedicated page later
				</Link>
			</Text>
		</Container>
	);
};

export default PlanSelectionTable;
