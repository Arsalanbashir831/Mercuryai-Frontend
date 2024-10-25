import React from "react";
import {
	Flex,
	Box,
	Button,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import LoginModal from "../components/LoginModal";
import LoginForm from "../components/LoginForm";
import { header } from "framer-motion/client";

const Layout = ({
	leftNavchildren,
	leftNavHeader,
	leftNavHeaderButton,
	leftNavFooterButton,
	rightNavchildren,
	rightNavHeaderComponent,
	rightNavHeaderButton,
	centerComponent,
	headerComponent,
}) => {
	const { isAuthenticated, login } = useAuth();

	return (
		<Flex height='100%' overflow='hidden' position='relative'>
			{leftNavchildren && (
				<LeftSidebar
					header={leftNavHeader}
					headerButton={leftNavHeaderButton}
					footerButton={leftNavFooterButton}>
					{leftNavchildren}
				</LeftSidebar>
			)}

			<Flex flex='1' flexDirection='column' overflow='hidden'>
				{headerComponent && (
					<Box as='header' pt={4} zIndex='1'>
						{headerComponent}
					</Box>
				)}
				<Box as='main' flex='1' overflow='hidden' mb={4}>
					{centerComponent}
				</Box>
			</Flex>
			{rightNavchildren && (
				<RightSidebar
					headerComponent={rightNavHeaderComponent}
					headerButton={rightNavHeaderButton}>
					{rightNavchildren}
				</RightSidebar>
			)}

			{/* Overlay for non-authenticated users */}
			{!isAuthenticated && (
				<Box
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='0'
					bg='blackAlpha.700'
					backdropFilter='blur(10px)'
					color='white'
					zIndex='10'
					pb={4}
					overflowY='auto'
					sx={{
						"&::-webkit-scrollbar": {
							width: "8px",
						},
						"&::-webkit-scrollbar-track": {
							width: "6px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "gray.700",
							borderRadius: "full",
						},
					}}>
					<LoginForm onLogin={login} />
				</Box>
			)}

			{/* Lock icons on the sides */}
			{/* {!isAuthenticated && <LoginModal isOpen={true} onLogin={login} />} */}
		</Flex>
	);
};

export default Layout;
