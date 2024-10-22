import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Text,
} from "@chakra-ui/react";

export default function CourseProgressBar() {
	return (
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
	);
}
