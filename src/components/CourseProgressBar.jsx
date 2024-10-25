import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function CourseProgressBar() {
	const progressColor = useColorModeValue("cyan.400", "cyan.600");
	const trackColor = useColorModeValue("gray.200", "gray.600");
	const labelColor = useColorModeValue("cyan.500", "cyan.300");
	const textColor = useColorModeValue("black", "white");

	return (
		<Box textAlign='center'>
			<CircularProgress
				value={32}
				size='120px'
				thickness='4px'
				color={progressColor}
				trackColor={trackColor}>
				<CircularProgressLabel
					color={labelColor}
					fontSize='24px'
					fontWeight='bold'>
					32%
				</CircularProgressLabel>
			</CircularProgress>
			<Text color={textColor} mt={2} fontSize='lg' fontWeight='medium'>
				Vision Course
			</Text>
		</Box>
	);
}
