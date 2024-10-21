import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";
import CourseSidebar from "../components/CourseSidebar";
import { useAuth } from "../context/AuthContext";
import { Icon } from "@iconify/react"; // Import the Iconify Icon component

const Home = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Flex height='100%' overflow='hidden' position='relative'>
			<Sidebar isAuthenticated={isAuthenticated} />
			<ChatArea />
			<CourseSidebar />

			{/* Overlay for non-authenticated users */}
			{!isAuthenticated && (
				<Box
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='0'
					bg='rgba(0, 0, 0, 0.5)'
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
						left='8%' // Adjust as needed
						top='50%'
						transform='translateY(-50%)'
						zIndex='20' // Ensure it is above the overlay
					>
						<Icon icon='si:lock-line' color='black' width='64' height='64' />
					</Box>

					<Box
						position='absolute'
						right='8%' // Adjust as needed
						top='50%'
						transform='translateY(-50%)'
						zIndex='20' // Ensure it is above the overlay
					>
						<Icon icon='si:lock-line' color='black' width='64' height='64' />
					</Box>
				</>
			)}
		</Flex>
	);
};

export default Home;
