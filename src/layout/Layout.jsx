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
import { Icon } from "@iconify/react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import LoginModal from "../components/LoginModal";

const Layout = ({
	leftNavchildren,
	leftNavHeader,
	leftNavHeaderButton,
	leftNavFooterButton,
	rightNavchildren,
	rightNavHeaderComponent,
	rightNavHeaderButton,
	centerComponent,
}) => {
	const { isAuthenticated, login } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();

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

			<Box as='main' flex='1' overflow='hidden'>
				{centerComponent}
			</Box>
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
					display='flex'
					justifyContent='center'
					alignItems='center'
					color='white'
					fontSize='2xl'
					zIndex='10'
				/>
			)}

			{/* Lock icons on the sides */}
			{!isAuthenticated && (
				<>
					<Box
						position='absolute'
						left='8%'
						top='50%'
						transform='translateY(-50%)'
						zIndex='20'>
						<Icon icon='si:lock-line' color='white' width='64' height='64' />
					</Box>

					<Box
						position='absolute'
						left='41%'
						top='45%'
						transform='translateY(-41%, -45%)'
						zIndex='20'>
						<VStack spacing={4}>
							<Text fontSize='2xl' color='white'>
								Please login to continue
							</Text>

							<Button
								leftIcon={
									<Icon
										icon='ic:round-login'
										color='white'
										width='24'
										height='24'
									/>
								}
								colorScheme='blue'
								size='lg'
								onClick={onOpen}>
								Login
							</Button>
						</VStack>
					</Box>

					<Box
						position='absolute'
						right='8%'
						top='50%'
						transform='translateY(-50%)'
						zIndex='20'>
						<Icon icon='si:lock-line' color='white' width='64' height='64' />
					</Box>

					<LoginModal isOpen={isOpen} onClose={onClose} onLogin={login} />
				</>
			)}
		</Flex>
	);
};

export default Layout;
