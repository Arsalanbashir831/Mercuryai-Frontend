import { Box, Image, VStack } from "@chakra-ui/react";

const CourseSidebar = () => {
	return (
		<VStack spacing={4} align='stretch'>
			{Array.from({ length: 10 }).map((_, i) => (
				<Box key={i} bg='white' borderRadius='md' overflow='hidden'>
					<Image
						src='https://via.placeholder.com/250x150'
						alt={`Course ${i + 1}`}
					/>
				</Box>
			))}
		</VStack>
	);
};

export default CourseSidebar;
