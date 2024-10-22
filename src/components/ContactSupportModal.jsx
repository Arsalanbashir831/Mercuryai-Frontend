import React, { useState } from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Select,
	Text,
	Textarea,
	VStack,
} from "@chakra-ui/react";

const countries = [
	{ code: "IT", name: "Italy", flag: "🇮🇹" },
	{ code: "US", name: "United States", flag: "🇺🇸" },
	{ code: "GB", name: "United Kingdom", flag: "🇬🇧" },
	// Add more countries as needed
];

export default function ContactSupportModal() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmitTicket = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Ticket submitted!");
	};
	return isSubmitted ? (
		<VStack spacing={4}>
			<Text color='white' textAlign='center'>
				One of our assistants will contact you as soon as possible through the
				emails you left when opening this ticket the current expected average
				waiting time is 6 hours
			</Text>
		</VStack>
	) : (
		<form onSubmit={handleSubmitTicket}>
			<VStack spacing={4}>
				<Grid templateColumns='repeat(2, 1fr)' gap={4} width='100%'>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input
							placeholder='Your name'
							bg='gray.700'
							border='none'
							_focus={{
								borderColor: "cyan.300",
								boxShadow: "0 0 0 1px cyan.300",
							}}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type='email'
							placeholder='Your email'
							bg='gray.700'
							border='none'
							_focus={{
								borderColor: "cyan.300",
								boxShadow: "0 0 0 1px cyan.300",
							}}
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel>Company Name</FormLabel>
					<Input
						placeholder='Your company name'
						bg='gray.700'
						border='none'
						_focus={{
							borderColor: "cyan.300",
							boxShadow: "0 0 0 1px cyan.300",
						}}
					/>
				</FormControl>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} width='100%'>
					<FormControl>
						<FormLabel>Phone Number</FormLabel>
						<Input
							type='tel'
							placeholder='Your phone number'
							bg='gray.700'
							border='none'
							_focus={{
								borderColor: "cyan.300",
								boxShadow: "0 0 0 1px cyan.300",
							}}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select
							placeholder='Select country'
							bg='gray.700'
							border='none'
							_focus={{
								borderColor: "cyan.300",
								boxShadow: "0 0 0 1px cyan.300",
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
						bg='gray.700'
						border='none'
						_focus={{
							borderColor: "cyan.300",
							boxShadow: "0 0 0 1px cyan.300",
						}}
						rows={4}
					/>
				</FormControl>

				<Button
					type='submit'
					width='100%'
					bgGradient='linear(to-r, cyan.400, blue.500)'
					_hover={{
						bgGradient: "linear(to-r, cyan.500, blue.600)",
					}}
					_active={{
						bgGradient: "linear(to-r, cyan.600, blue.700)",
					}}>
					Open Ticket
				</Button>
			</VStack>
		</form>
	);
}
