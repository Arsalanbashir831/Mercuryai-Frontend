import { useState } from "react";
import { Icon } from "@iconify/react";
import {
	Box,
	VStack,
	Text,
	CircularProgress,
	CircularProgressLabel,
	HStack,
	Flex,
} from "@chakra-ui/react";

const modules = [
	{ id: 1, title: "Module 1", completed: true },
	{ id: 2, title: "Module 2", completed: true },
	{ id: 3, title: "Module 3", completed: false },
	{ id: 4, title: "Module 4", completed: false },
	{ id: 5, title: "Module 5", completed: false },
	{ id: 6, title: "Module 6", completed: false },
	{ id: 7, title: "Module 7", completed: false },
];

export default function CourseProgress() {
	const [selectedModule, setSelectedModule] = useState(1);
	const progress =
		(modules.filter((m) => m.completed).length / modules.length) * 100;

	return (
		<Box bg='gray.800' p={6} borderRadius='xl' width='300px'>
			<VStack spacing={6} align='stretch'>
				{/* Progress Circle */}
				<Box textAlign='center'>
					<CircularProgress
						value={32}
						size='120px'
						thickness='4px'
						color='blue.400'
						trackColor='gray.600'>
						<CircularProgressLabel
							color='blue.400'
							fontSize='24px'
							fontWeight='bold'>
							32%
						</CircularProgressLabel>
					</CircularProgress>
					<Text color='white' mt={2} fontSize='lg' fontWeight='medium'>
						Vision Course
					</Text>
				</Box>

				{/* Module List */}
				<VStack
					spacing={2}
					align='stretch'
					maxH='300px'
					overflowY='auto'
					pr={2}
					sx={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							background: "gray.900",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "gray.600",
							borderRadius: "full",
						},
					}}>
					{modules.map((module) => (
						<HStack
							key={module.id}
							p={3}
							bg={selectedModule === module.id ? "blue.500" : "gray.700"}
							borderRadius='md'
							cursor='pointer'
							transition='all 0.2s'
							_hover={{
								bg: selectedModule === module.id ? "blue.600" : "gray.600",
							}}
							onClick={() => setSelectedModule(module.id)}>
							<Icon
								icon='octicon:book-16'
								style={{
									width: "20px",
									height: "20px",
									color: "white",
								}}
							/>
							<Text color='white' fontSize='sm'>
								{module.title}
							</Text>
						</HStack>
					))}
				</VStack>
			</VStack>
		</Box>
	);
}
