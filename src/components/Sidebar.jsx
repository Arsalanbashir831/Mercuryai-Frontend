import React from "react";
import { Box, Button, VStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Sidebar = () => (
	<Flex flexDirection='column' w='250px' h='100%' bg='gray.100'>
		<Box p={4}>
			<Button
				leftIcon={<Icon icon='dashicons:plus-alt' />}
				colorScheme='teal'
				width='100%'>
				New Chat
			</Button>
		</Box>
		<Box flex={1} overflowY='auto' position='relative'>
			<Box
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				bg='blackAlpha.600'
				zIndex={1}
				display='flex'
				justifyContent='center'
				alignItems='center'>
				<Icon icon='akar-icons:chat' color='white' width='50px' height='50px' />
			</Box>
			<VStack align='stretch' spacing={2} p={4}>
				{/* Add chat history items here */}
				{[...Array(20)].map((_, i) => (
					<Box key={i} p={2} bg='white' borderRadius='md'>
						Chat {i + 1}
					</Box>
				))}
			</VStack>
		</Box>
	</Flex>
);

export default Sidebar;
