import { Box, Button, VStack, Flex, Heading } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const LeftSidebar = ({ header, headerButton, children, footerButton }) => {
	return (
		<Flex flexDirection='column' w='250px' h='100%' bg='transparent'>
			{headerButton && (
				<Box p={4}>
					<Button
						leftIcon={<Icon icon={headerButton.icon} />}
						colorScheme='teal'
						borderRadius='2xl'
						width='100%'>
						{headerButton.label}
					</Button>
				</Box>
			)}

			{header && (
				<Box p={4}>
					<Heading size='sm'>{header}</Heading>
				</Box>
			)}

			<Box
				flex={1}
				overflowY='auto'
				position='relative'
				m={4}
				mt={0}
				bg='blackAlpha.500'
				borderRadius={10}>
				<VStack align='stretch' spacing={4} p={4}>
					{children}
				</VStack>
			</Box>

			{footerButton && (
				<Box px={4} pb={4}>
					<Button colorScheme='teal' width='100%' borderRadius='2xl'>
						{footerButton.label}
					</Button>
				</Box>
			)}
		</Flex>
	);
};

export default LeftSidebar;
