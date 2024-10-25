import { useState } from "react";
import ContactSupportForm from "../components/ContactSupportForm";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const About = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmitTicket = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Ticket submitted!");
	};

	// Use Chakra's useColorMode and useColorModeValue for responsive styles
	const bgColor = useColorModeValue("gray.300", "gray.800");
	const formBgColor = useColorModeValue("gray.100", "transparent");
	const textColor = useColorModeValue("black", "white");
	const scrollbarThumbColor = useColorModeValue("gray.300", "gray.700");

	return (
		<Box
			as='main'
			flex='1'
			p={10}
			bg={bgColor}
			color={textColor}
			h='100%'
			overflowY='auto'
			sx={{
				"&::-webkit-scrollbar": {
					width: "8px",
				},
				"&::-webkit-scrollbar-track": {
					width: "6px",
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: scrollbarThumbColor,
					borderRadius: "24px",
				},
			}}>
			<Heading as='h1' size='xl' mb={5} textAlign='center'>
				Contact Support
			</Heading>
			<Box w='container.md' mx='auto' bg={formBgColor} p={5} borderRadius='md'>
				<ContactSupportForm handleSubmitTicket={handleSubmitTicket} />
			</Box>
		</Box>
	);
};

export default About;
