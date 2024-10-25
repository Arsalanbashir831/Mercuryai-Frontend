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
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

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

	const inputBgColor = useColorModeValue("gray.300", "gray.700");
	const inputTextColor = useColorModeValue("black", "white");
	const labelColor = useColorModeValue("black", "white");
	const checkboxColor = useColorModeValue("gray.800", "gray.300");

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
						<FormLabel color={labelColor}>Name</FormLabel>
						<Input
							name='name'
							value={formData.name}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}
						/>
					</FormControl>

					<FormControl>
						<FormLabel color={labelColor}>Email</FormLabel>
						<Input
							name='email'
							type='email'
							value={formData.email}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel color={labelColor}>Company Name</FormLabel>
					<Input
						name='companyName'
						value={formData.companyName}
						onChange={handleChange}
						bg={inputBgColor}
						color={inputTextColor}
					/>
				</FormControl>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} w='100%'>
					<FormControl>
						<FormLabel color={labelColor}>Phone Number</FormLabel>
						<Input
							name='phoneNumber'
							value={formData.phoneNumber}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}
						/>
					</FormControl>

					<FormControl>
						<FormLabel color={labelColor}>Country</FormLabel>
						<Select
							name='country'
							value={formData.country}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}>
							<option value='IT'>🇮🇹 Italy</option>
							{/* Add more countries as needed */}
						</Select>
					</FormControl>
				</Grid>

				<Grid templateColumns='repeat(2, 1fr)' gap={4} w='100%'>
					<FormControl>
						<FormLabel color={labelColor}>
							URL Social or Website or Group
						</FormLabel>
						<Input
							name='urlSocial'
							value={formData.urlSocial}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}
						/>
					</FormControl>

					<FormControl>
						<FormLabel color={labelColor}>Nickname Coupon</FormLabel>
						<Input
							name='nicknameCoupon'
							value={formData.nicknameCoupon}
							onChange={handleChange}
							bg={inputBgColor}
							color={inputTextColor}
						/>
					</FormControl>
				</Grid>

				<FormControl>
					<FormLabel color={labelColor}>
						Paypal Email Where You Want to Receive Payments
					</FormLabel>
					<Input
						name='paypalEmail'
						type='email'
						value={formData.paypalEmail}
						onChange={handleChange}
						bg={inputBgColor}
						color={inputTextColor}
					/>
				</FormControl>

				{showCheckBox && (
					<Checkbox
						name='agreeToContact'
						isChecked={formData.agreeToContact}
						onChange={handleChange}
						color={checkboxColor}>
						<Text fontSize='xs'>
							I agree that Mercury AI may contact me at the email address or
							phone number above.
						</Text>
					</Checkbox>
				)}

				<CustomButton label={buttonLabel} onClick={handleSubmit} mt={4} />
			</VStack>
		</form>
	);
}
