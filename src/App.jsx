import { Routes, Route } from "react-router-dom";
import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Header from "./layout/Header";

import HomePage from "./pages/HomePage";
import ContactSupportPage from "./pages/ContactSupportPage";
import TrainingCoursePage from "./pages/TrainingCoursePage";
import NewsArticlePage from "./pages/NewsArticlePage";
import AdvancedTrainingCoursePage from "./pages/AdvancedTrainingCoursePage";
import RefferalProgramPage from "./pages/RefferalProgramPage";
import AccountPage from "./pages/AccountPage";
import AmazonSellerApiPage from "./pages/AmazonSellerApiPage";
import PaymentManagementPage from "./pages/PaymentManagementPage";
import SubscriptionPage from "./pages/SubcriptionPage";
import { useEffect } from "react";

const App = () => {
	const { setColorMode } = useColorMode();

	useEffect(() => {
		setColorMode("dark");
	}, []);

	const bgColor = useColorModeValue("gray.300", "gray.700");

	return (
		<Flex direction='column' height='100vh' overflow='hidden' bg={bgColor}>
			<Header />
			<Box as='main' flex='1' overflow='hidden'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='/dashboard/mercury-ai-training-course'
						element={<TrainingCoursePage />}
					/>
					<Route
						path='/dashboard/mercury-ai-pro-advance-training-course'
						element={<AdvancedTrainingCoursePage />}
					/>
					<Route
						path='/dashboard/news-articles'
						element={<NewsArticlePage />}
					/>
					<Route
						path='/dashboard/referral-program'
						element={<RefferalProgramPage />}
					/>
					<Route path='/settings/account' element={<AccountPage />} />
					<Route
						path='/settings/amazon-api'
						element={<AmazonSellerApiPage />}
					/>
					<Route
						path='/settings/payment-management'
						element={<PaymentManagementPage />}
					/>
					<Route path='/settings/subscription' element={<SubscriptionPage />} />
					<Route path='/contact-support' element={<ContactSupportPage />} />
				</Routes>
			</Box>
		</Flex>
	);
};

export default App;
