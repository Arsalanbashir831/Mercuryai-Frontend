import React from "react";
import { Box, Button, VStack, Image, Flex } from "@chakra-ui/react";

const CourseSidebar = () => (
	<Flex flexDirection='column' w='250px' h='100%' bg='gray.100'>
		<Box p={4}>
			<Button colorScheme='blue' width='100%'>
				JOIN COURSE
			</Button>
		</Box>
		<Box flex={1} overflowY='auto'>
			<VStack align='stretch' spacing={4} p={4}>
				{[...Array(10)].map((_, i) => (
					<Box key={i} bg='white' borderRadius='md' overflow='hidden'>
						<Image
							src='https://via.placeholder.com/250x150'
							alt={`Course ${i + 1}`}
						/>
					</Box>
				))}
			</VStack>
		</Box>
	</Flex>
);

export default CourseSidebar;
