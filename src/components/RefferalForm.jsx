import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Select,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function RefferalForm({
	isSubmitted,
	setIsSubmitted,
	buttonLabel = "Request Access",
	showCheckBox = true,
	showFormSubmittedMessage = false,
	formSubmittedMessage = "Your request has been submitted successfully!",
}) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		companyName: "",
		phoneNumber: "",
		country: "IT",
		urlSocial: "",
		nicknameCoupon: "",
		paypalEmail: "",
		agreeToContact: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Form submitted:", formData);
	};

	return showFormSubmittedMessage && isSubmitted ? (
		<VStack spacing={4}>
			<Text color='white' textAlign='center'>
				{formSubmittedMessage}
			</Text>
		</VStack>
	) : (
		<form onSubmit={handleSubmit}>
			<VStack spacing={4}>
				<Grid templateColumns='repeat(2, 1fr)' gap={4} w='100%'>
					<FormControl>
						<FormLabel color='white'>Name</FormLabel>
						<Input
							name='name'
							value={formData.name}
							onChange={handleChange}
							bg='gray.700'
							color='white'
						/>
					</FormControl>

					<FormControl>
						<FormLabel color='white'>Email</FormLabel>
						<Input
							name='email'
							type='email'
							value={formData.email}
							onChange={handleChange}
							bg='gray.700'
							color='white'
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel color='white'>Company Name</FormLabel>
					<Input
						name='companyName'
						value={formData.companyName}
						onChange={handleChange}
						bg='gray.700'
						color='white'
					/>
				</FormControl>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} w='100%'>
					<FormControl>
						<FormLabel color='white'>Phone Number</FormLabel>
						<Input
							name='phoneNumber'
							value={formData.phoneNumber}
							onChange={handleChange}
							bg='gray.700'
							color='white'
						/>
					</FormControl>

					<FormControl>
						<FormLabel color='white'>Country</FormLabel>
						<Select
							name='country'
							value={formData.country}
							onChange={handleChange}
							bg='gray.700'
							color='white'>
							<option value='IT'>🇮🇹 Italy</option>
							{/* Add more countries as needed */}
						</Select>
					</FormControl>
				</Grid>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} w='100%'>
					<FormControl>
						<FormLabel color='white'>URL Social or Website or Group</FormLabel>
						<Input
							name='urlSocial'
							value={formData.urlSocial}
							onChange={handleChange}
							bg='gray.700'
							color='white'
						/>
					</FormControl>

					<FormControl>
						<FormLabel color='white'>Nickname Coupon</FormLabel>
						<Input
							name='nicknameCoupon'
							value={formData.nicknameCoupon}
							onChange={handleChange}
							bg='gray.700'
							color='white'
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel color='white'>
						Paypal Email Where You Want to Receive Payments
					</FormLabel>
					<Input
						name='paypalEmail'
						type='email'
						value={formData.paypalEmail}
						onChange={handleChange}
						bg='gray.700'
						color='white'
					/>
				</FormControl>

				{showCheckBox && (
					<Checkbox
						name='ageeToContact'
						isChecked={formData.agreeToContact}
						onChange={handleChange}
						color='gray.300'>
						<Text fontSize='xs'>
							I agree that Mercury AI may contact me at the email address or
							phone number above.
						</Text>
					</Checkbox>
				)}

				<Button type='submit' colorScheme='blue' size='lg' w='100%' mt={4}>
					{buttonLabel}
				</Button>
			</VStack>
		</form>
	);
}
