import React from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Select,
	Textarea,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const countries = [
	{ code: "IT", name: "Italy", flag: "🇮🇹" },
	{ code: "US", name: "United States", flag: "🇺🇸" },
	{ code: "GB", name: "United Kingdom", flag: "🇬🇧" },
	// Add more countries as needed
];

export default function ContactSupportForm({ handleSubmitTicket }) {
	// Set input background color based on color mode
	const inputBgColor = useColorModeValue("gray.300", "gray.700");
	const borderColor = useColorModeValue("blue.300", "blue.300");

	return (
		<form onSubmit={handleSubmitTicket}>
			<VStack spacing={4}>
				<Grid templateColumns='repeat(2, 1fr)' gap={4} width='100%'>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input
							placeholder='Your name'
							bg={inputBgColor}
							border='none'
							_focus={{
								borderColor: borderColor,
								boxShadow: `0 0 0 1px ${borderColor}`,
							}}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type='email'
							placeholder='Your email'
							bg={inputBgColor}
							border='none'
							_focus={{
								borderColor: borderColor,
								boxShadow: `0 0 0 1px ${borderColor}`,
							}}
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel>Company Name</FormLabel>
					<Input
						placeholder='Your company name'
						bg={inputBgColor}
						border='none'
						_focus={{
							borderColor: borderColor,
							boxShadow: `0 0 0 1px ${borderColor}`,
						}}
					/>
				</FormControl>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} width='100%'>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
						<Input
							type='tel'
							placeholder='Your phone number'
							bg={inputBgColor}
							border='none'
							_focus={{
								borderColor: borderColor,
								boxShadow: `0 0 0 1px ${borderColor}`,
							}}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select
							placeholder='Select country'
							bg={inputBgColor}
							border='none'
							_focus={{
								borderColor: borderColor,
								boxShadow: `0 0 0 1px ${borderColor}`,
							}}>
							{countries.map((country) => (
								<option key={country.code} value={country.code}>
									{country.flag} {country.name}
								</option>
							))}
						</Select>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel>Tell Us What Happens</FormLabel>
					<Textarea
						placeholder='Describe your issue...'
						bg={inputBgColor}
						border='none'
						_focus={{
							borderColor: borderColor,
							boxShadow: `0 0 0 1px ${borderColor}`,
						}}
						rows={4}
					/>
				</FormControl>

				<CustomButton label='Open Ticket' onClick={handleSubmitTicket} />
			</VStack>
		</form>
	);
}
