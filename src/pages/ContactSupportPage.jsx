import { useState } from "react";
import ContactSupportForm from "../components/ContactSupportForm";
import { Box } from "@chakra-ui/react";

const About = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmitTicket = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log("Ticket submitted!");
	};
	return (
		<Box
			as='main'
			flex='1'
			p={10}
			bg='gray.800'
			color='white'
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
					backgroundColor: "gray.700",
					borderRadius: "24px",
				},
			}}>
			<Box w='container.md' mx='auto'>
				<ContactSupportForm handleSubmitTicket={handleSubmitTicket} />
			</Box>
		</Box>
	);
};

export default About;
