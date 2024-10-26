import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Checkbox,
	Link,
	Text,
	Image,
	useColorModeValue,
	Table,
	Thead,
	Tbody,
	Tr,
	Td,
	List,
	ListItem,
	Flex,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import logoSrc from "/logo.png";
import { useNavigate } from "react-router-dom";
import PlanSelectionTable from "./PlanSelectionTable";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
	const bgColor = "gray.900";
	const textColor = "white";
	const inputBgColor = "gray.700";

	const navigate = useNavigate();

	// State to manage the current step
	const [step, setStep] = useState(1);

	// Handler to move to the next step
	const nextStep = () => setStep((prev) => prev + 1);

	// Handler to skip a step
	const skipStep = () => setStep((prev) => prev + 1);

	const loginStep = () => setStep(1);

	const [optionSelected, setOptionSelected] = useState(null);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				onClose();
				setStep(1);
			}}>
			<ModalOverlay />
			<ModalContent
				bg={bgColor}
				color={textColor}
				borderRadius='3xl'
				px={4}
				maxWidth={step === 4 ? "900px" : "400px"}>
				<ModalCloseButton />
				<ModalHeader textAlign='center'>
					<Image src={logoSrc} alt='Logo' mb={2} mx='auto' width='200px' />
					{step === 1 && "Log In"}
					{step === 2 && "Sign Up"}
					{step === 4 &&
						"Upgrade to the Basic or Premium plan to achieve success in your business"}
					{step === 5 &&
						"Are you ready to access and make your business successful"}
				</ModalHeader>
				<ModalBody>
					{step === 2 && (
						<>
							<Text mb={2}>Name</Text>
							<Input type='name' mb={3} border={0} bg={inputBgColor} />
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
							<Link
								color='blue.300'
								mb={2}
								display='block'
								textAlign='right'
								fontSize={12}>
								Forgot Password?
							</Link>
							<Checkbox>Remember Me</Checkbox>
						</>
					)}

					{step === 2 && (
						<>
							<List spacing={3}>
								<ListItem display='flex' alignItems='center' fontSize={12}>
									<Icon
										icon='mdi:cross-circle'
										color='gray'
										fontSize={14}
										style={{ marginRight: "8px" }}
									/>
									At least 8 characters
								</ListItem>
								<ListItem display='flex' alignItems='center' fontSize={12}>
									<Icon
										icon='mdi:cross-circle'
										color='gray'
										fontSize={14}
										style={{ marginRight: "8px" }}
									/>
									A mixture of letters, numbers, and special characters
								</ListItem>
								<ListItem display='flex' alignItems='center' fontSize={12}>
									<Icon
										icon='mdi:cross-circle'
										color='gray'
										fontSize={14}
										style={{ marginRight: "8px" }}
									/>
									Cannot contain part of your email
								</ListItem>
							</List>

							<Checkbox my={4}>
								<Text fontSize={12} as='span'>
									I agree with the{" "}
									<Link color='blue.300' textDecoration='underline'>
										Privacy Policy
									</Link>{" "}
									and{" "}
									<Link color='blue.300' textDecoration='underline'>
										Terms & Conditions
									</Link>
								</Text>
							</Checkbox>
						</>
					)}

					{step === 3 && (
						<>
							<Text mb={2} fontWeight='bold'>
								Welcome, (Name)!
							</Text>
							<Text mb={4}>
								Before we begin, we will answer a few questions that will help
								us personalize your journey
							</Text>
							<Text mb={2} fontWeight='bold'>
								Which one best describes you?
							</Text>

							{/* Create 3 buttons out of which only one can be selected at a time */}
							<Button
								variant='unstyled'
								bg='gray.800'
								color='white'
								outline={
									optionSelected === "individual" && "2px solid lightblue"
								}
								mr={3}
								mb={2}
								width='100%'
								onClick={() => setOptionSelected("individual")}>
								Individual Seller
							</Button>
							<Button
								variant='unstyled'
								bg='gray.800'
								color='white'
								outline={optionSelected === "brand" && "2px solid lightblue"}
								mr={3}
								mb={2}
								width='100%'
								onClick={() => setOptionSelected("brand")}>
								Brand
							</Button>
							<Button
								variant='unstyled'
								bg='gray.800'
								color='white'
								outline={
									optionSelected === "not-started" && "2px solid lightblue"
								}
								mr={3}
								mb={2}
								width='100%'
								onClick={() => setOptionSelected("not-started")}>
								I have not yet started selling online.
							</Button>
						</>
					)}

					{step === 4 && <PlanSelectionTable />}

					{step === 5 && (
						<Text fontSize='lg' textAlign='center'>
							To learn how to use{" "}
							<Text as='span' color='blue.300' fontWeight='bold'>
								Mercury AI
							</Text>{" "}
							view the{" "}
							<Text as='span' color='blue.300' fontWeight='bold'>
								training course
							</Text>
						</Text>
					)}
				</ModalBody>

				<ModalFooter flexDirection='column' alignItems='center'>
					{step === 1 && (
						<>
							<Button
								colorScheme='blue'
								mr={3}
								onClick={() => {
									onLogin();
									onClose();
								}}
								mb={2}
								width='100%'>
								Log In
							</Button>
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
										navigate("/contact-support");
									}}>
									Contact Us
								</Link>
							</Text>
						</>
					)}

					{step === 2 && (
						<>
							<Button
								colorScheme='blue'
								mr={3}
								onClick={nextStep}
								mb={2}
								width='100%'>
								Sign Up
							</Button>
							<Text mt={2} fontWeight='light' fontSize={14}>
								Already Have an account?{" "}
								<Link color='blue.300' onClick={loginStep}>
									Log in
								</Link>
							</Text>
						</>
					)}

					{step > 2 && step < 5 && (
						<Flex width='100%' gap={3}>
							<Button variant='unstyled' onClick={skipStep} width='100%'>
								Skip
							</Button>
							<Button
								colorScheme='blue'
								mr={3}
								onClick={nextStep}
								mb={2}
								width='100%'>
								{step === 4 ? "Proceed to Upgrade" : "Next"}
							</Button>
						</Flex>
					)}

					{step === 5 && (
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => {
								onLogin();
								onClose();
							}}
							width='100%'>
							Let's get started
						</Button>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
