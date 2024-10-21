import React from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";
import CourseSidebar from "../components/CourseSidebar";

const Home = () => {
	return (
		<Flex height='100%' overflow='hidden'>
			<Sidebar />
			<ChatArea />
			<CourseSidebar />
		</Flex>
	);
};

export default Home;
