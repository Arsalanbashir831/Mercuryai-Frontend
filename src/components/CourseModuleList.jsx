import { HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { Icon } from "@iconify/react";

const modules = [
	{ id: 1, title: "Module 1", completed: true },
	{ id: 2, title: "Module 2", completed: true },
	{ id: 3, title: "Module 3", completed: false },
	{ id: 4, title: "Module 4", completed: false },
	{ id: 5, title: "Module 5", completed: false },
	{ id: 6, title: "Module 6", completed: false },
	{ id: 7, title: "Module 7", completed: false },
];

export default function CourseModuleList() {
	const [selectedModule, setSelectedModule] = useState(1);

	const handleSelectModule = useCallback((id) => {
		setSelectedModule(id);
	}, []);

	// Define colors based on the current color mode
	const selectedBgColor = useColorModeValue(
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)",
		"linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)" // Same for dark mode, customize as needed
	);
	const defaultBgColor = useColorModeValue("gray.200", "gray.700");
	const hoverBgColor = useColorModeValue("gray.300", "gray.600");
	const textColor = useColorModeValue("black", "white");

	return modules.map((module) => (
		<HStack
			key={module.id}
			p={3}
			bg={selectedModule === module.id ? selectedBgColor : defaultBgColor}
			borderRadius='md'
			cursor='pointer'
			transition='all 0.2s'
			_hover={{
				bg: selectedModule === module.id ? selectedBgColor : hoverBgColor,
			}}
			onClick={() => handleSelectModule(module.id)}>
			<Icon
				icon='octicon:book-16'
				style={{
					width: "20px",
					height: "20px",
					color: selectedModule === module.id ? "#fff" : textColor,
				}}
			/>
			<Text
				color={selectedModule === module.id ? "#fff" : textColor}
				fontSize='sm'>
				{module.title}
			</Text>
		</HStack>
	));
}
