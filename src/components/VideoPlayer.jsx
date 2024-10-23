import React, { useState } from "react";
import { AspectRatio, Box, Button, Flex, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<Box position='relative' borderRadius='md' overflow='hidden' w='100%'>
			<AspectRatio ratio={16 / 9}>
				<Image
					src='https://via.placeholder.com/800x450'
					alt='Video thumbnail'
					objectFit='cover'
				/>
			</AspectRatio>

			{/* Video Controls */}
			<Flex
				position='absolute'
				bottom='0'
				left='0'
				right='0'
				bg='rgba(0,0,0,0.7)'
				p={2}
				alignItems='center'>
				<Button
					size='sm'
					variant='ghost'
					color='white'
					onClick={() => setIsPlaying(!isPlaying)}>
					<Icon
						icon={isPlaying ? "mdi:pause" : "mdi:play"}
						width='24'
						height='24'
					/>
				</Button>

				{/* Progress Bar */}
				<Box flex='1' mx={2} bg='whiteAlpha.300' h='2px'>
					<Box w='30%' h='100%' bg='blue.500' />
				</Box>

				<Flex gap={2}>
					<Button size='sm' variant='ghost' color='white'>
						<Icon icon='mdi:volume-high' width='20' height='20' />
					</Button>
					<Button size='sm' variant='ghost' color='white'>
						<Icon icon='mdi:fullscreen' width='20' height='20' />
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
