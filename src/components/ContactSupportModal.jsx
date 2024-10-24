import React, { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import ContactSupportForm from "./ContactSupportForm";

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
		<ContactSupportForm handleSubmitTicket={handleSubmitTicket} />
	);
}
