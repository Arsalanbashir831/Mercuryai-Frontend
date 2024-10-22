import React, { createContext, useContext, useState } from "react";

// Create Context
const RefferalContext = createContext();

// Custom hook to access RefferalContext
export const useRefferal = () => useContext(RefferalContext);

// Provider Component
export const RefferalProvider = ({ children }) => {
	const [isRefferalSubmitted, setIsRefferalSubmitted] = useState(false);

	// Function to handle refferal submission
	const submitRefferal = () => {
		setTimeout(() => {
			setIsRefferalSubmitted(true);
		}, 10000);
	};

	return (
		<RefferalContext.Provider value={{ isRefferalSubmitted, submitRefferal }}>
			{children}
		</RefferalContext.Provider>
	);
};
