import React from "react";
import { Box, Button, VStack, Image, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const CourseSidebar = () => (
	<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
		<Box p={4}>
			<Button
				leftIcon={<Icon icon='octicon:book-16' />}
				colorScheme='teal'
				width='100%'>
				JOIN COURSE
			</Button>
		</Box>
		<Box
			flex={1}
			overflowY='auto'
			m={4}
			mt={0}
			bg='blackAlpha.500'
			borderRadius={10}>
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
