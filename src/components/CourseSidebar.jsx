import { Box, Image, VStack } from "@chakra-ui/react";
import placeholderImage from "../assets/placeholders/200x150.svg";

const CourseSidebar = () => {
	return (
		<VStack spacing={4} align='stretch'>
			{Array.from({ length: 10 }).map((_, i) => (
				<Box key={i} bg='white' borderRadius='md' overflow='hidden'>
					<Image src={placeholderImage} alt={`Course ${i + 1}`} />
				</Box>
			))}
		</VStack>
	);
};

export default CourseSidebar;
