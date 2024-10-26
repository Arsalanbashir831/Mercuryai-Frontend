import React, { useState } from "react";
import {
	Button,
	Input,
	Checkbox,
	Link,
	Text,
	Image,
	List,
	ListItem,
	Flex,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import logoSrc from "/logo.png";
import { useNavigate } from "react-router-dom";
import PlanSelectionTable from "./PlanSelectionTable";
import CustomButton from "./CustomButton";

const LoginForm = ({ onLogin }) => {
	const bgColor = useColorModeValue("gray.100", "gray.900");
	const textColor = useColorModeValue("gray.800", "white");
	const inputBgColor = useColorModeValue("gray.300", "gray.700");
	const buttonBgColor = useColorModeValue("gray.500", "gray.800");

	const navigate = useNavigate();

	// State to manage the current step
	const [step, setStep] = useState(1);
	const [optionSelected, setOptionSelected] = useState(null);

	// Handlers to move between steps
	const nextStep = () => setStep((prev) => prev + 1);
	const skipStep = () => setStep((prev) => prev + 1);
	const loginStep = () => setStep(1);

	return (
		<Flex
			direction='column'
			bg={bgColor}
			color={textColor}
			borderRadius='3xl'
			p={8}
			py={4}
			maxWidth={step === 4 ? "950px" : "400px"}
			width='100%'
			mx='auto'
			mt={10}>
			<Image src={logoSrc} alt='Logo' mb={2} mx='auto' width='200px' />
			<Text fontSize='xl' mb={4} textAlign='center'>
				{step === 1 && "Log In"}
				{step === 2 && "Sign Up"}
				{step === 4 && "Upgrade to Basic or Premium Plan"}
				{step === 5 && "Ready to Make Your Business Successful?"}
			</Text>

			{step === 2 && (
				<>
					<Text mb={2}>Name</Text>
					<Input type='text' mb={3} border={0} bg={inputBgColor} />
				</>
			)}

			{step <= 2 && (
				<>
					<Text mb={2}>Email</Text>
					<Input mb={4} border={0} bg={inputBgColor} />
					<Text mb={2}>Password</Text>
					<Input type='password' mb={3} border={0} bg={inputBgColor} />
				</>
			)}

			{step === 1 && (
				<>
					<Link color='blue.300' mb={2} textAlign='right' fontSize={12}>
						Forgot Password?
					</Link>
					<Checkbox mb={4}>Remember Me</Checkbox>
				</>
			)}

			{step === 2 && (
				<>
					<List spacing={3} mb={4}>
						<ListItem fontSize={12} display='flex' alignItems='center'>
							<Icon icon='mdi:cross-circle' color='gray' fontSize={14} />
							<Text ml={2}>At least 8 characters</Text>
						</ListItem>
						<ListItem fontSize={12} display='flex' alignItems='center'>
							<Icon icon='mdi:cross-circle' color='gray' fontSize={14} />
							<Text ml={2}>
								A mix of letters, numbers, and special characters
							</Text>
						</ListItem>
					</List>
					<Checkbox mb={4}>
						<Text fontSize={12}>
							I agree with the <Link color='blue.300'>Privacy Policy</Link> and{" "}
							<Link color='blue.300'>Terms & Conditions</Link>.
						</Text>
					</Checkbox>
				</>
			)}

			{step === 3 && (
				<>
					<Text fontWeight='bold' mb={2}>
						Welcome, (Name)!
					</Text>
					<Text mb={4}>
						Let's personalize your experience by answering a few questions.
					</Text>
					<Text fontWeight='bold' mb={2}>
						Which one best describes you?
					</Text>
					<Button
						variant='unstyled'
						bg={buttonBgColor}
						color='white'
						outline={
							optionSelected === "individual" ? "2px solid lightblue" : ""
						}
						mb={2}
						width='100%'
						onClick={() => setOptionSelected("individual")}>
						Individual Seller
					</Button>
					<Button
						variant='unstyled'
						bg={buttonBgColor}
						color='white'
						outline={optionSelected === "brand" ? "2px solid lightblue" : ""}
						mb={2}
						width='100%'
						onClick={() => setOptionSelected("brand")}>
						Brand
					</Button>
					<Button
						variant='unstyled'
						bg={buttonBgColor}
						color='white'
						outline={
							optionSelected === "not-started" ? "2px solid lightblue" : ""
						}
						width='100%'
						onClick={() => setOptionSelected("not-started")}>
						I have not yet started selling online.
					</Button>
				</>
			)}

			{step === 4 && <PlanSelectionTable />}

			{step === 5 && (
				<Text fontSize='lg' textAlign='center'>
					Learn how to use{" "}
					<Text as='span' color='blue.300' fontWeight='bold'>
						Mercury AI
					</Text>{" "}
					by checking out the{" "}
					<Text as='span' color='blue.300' fontWeight='bold'>
						training course
					</Text>
					.
				</Text>
			)}

			<Flex direction='column' alignItems='center' width='100%' mt={6} gap={3}>
				{step === 1 && (
					<>
						<CustomButton label='Log In' onClick={onLogin} />
						<Text fontWeight='light' fontSize={16}>
							New to Mercury AI?{" "}
							<Link color='blue.300' onClick={skipStep}>
								Sign Up Now
							</Link>
						</Text>
						<Text mt={2} fontWeight='light' fontSize={10}>
							Problems or questions?{" "}
							<Link
								color='blue.300'
								onClick={() => {
									// onClose();
									navigate("/contact-support");
								}}>
								Contact Us
							</Link>
						</Text>
					</>
				)}

				{step === 2 && <CustomButton label='Sign Up' onClick={nextStep} />}

				{step > 2 && step < 5 && (
					<Flex width='100%' gap={3}>
						<Button variant='unstyled' onClick={nextStep} width='100%'>
							Skip
						</Button>
						<CustomButton
							label={step === 4 ? "Proceed to Upgrade" : "Next"}
							onClick={nextStep}
						/>
					</Flex>
				)}

				{step === 5 && (
					<CustomButton label='Let’s Get Started' onClick={onLogin} />
				)}
			</Flex>
		</Flex>
	);
};

export default LoginForm;
