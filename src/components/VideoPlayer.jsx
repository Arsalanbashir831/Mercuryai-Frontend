import React, { useState, useRef, useEffect } from "react";
import {
	AspectRatio,
	Box,
	Button,
	Flex,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import placeholderVideo from "../assets/videos/nature.mp4";

export default function VideoPlayer({ videoSrc = placeholderVideo }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [volume, setVolume] = useState(50);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showControls, setShowControls] = useState(true);
	const [isMuted, setIsMuted] = useState(false); // Mute state

	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Toggle play/pause
	const handlePlayPause = () => {
		if (isPlaying) videoRef.current.pause();
		else videoRef.current.play();
		setIsPlaying(!isPlaying);
	};

	// Update progress bar
	const handleTimeUpdate = () => {
		const { currentTime, duration } = videoRef.current;
		setProgress((currentTime / duration) * 100);
	};

	// Seek video when clicking on the progress bar
	const handleProgressClick = (event) => {
		const rect = event.target.getBoundingClientRect();
		const clickPosition = event.clientX - rect.left;
		const newTime = (clickPosition / rect.width) * videoRef.current.duration;
		videoRef.current.currentTime = newTime;
	};

	// Change volume
	const handleVolumeChange = (value) => {
		setVolume(value);
		videoRef.current.volume = value / 100;
		if (value === 0) setIsMuted(true);
		else setIsMuted(false);
	};

	// Toggle fullscreen
	const handleFullscreen = () => {
		if (!isFullscreen) containerRef.current.requestFullscreen();
		else document.exitFullscreen();
		setIsFullscreen(!isFullscreen);
	};

	// Monitor video progress updates
	useEffect(() => {
		const video = videoRef.current;
		video.addEventListener("timeupdate", handleTimeUpdate);
		return () => video.removeEventListener("timeupdate", handleTimeUpdate);
	}, []);

	// Auto-hide controls when video starts playing
	useEffect(() => {
		let timeout;
		if (isPlaying) {
			timeout = setTimeout(() => setShowControls(false), 3000);
		} else {
			setShowControls(true);
		}
		return () => clearTimeout(timeout);
	}, [isPlaying]);

	// Show controls on hover
	const handleMouseEnter = () => setShowControls(true);
	const handleMouseLeave = () => {
		if (isPlaying) setShowControls(false);
	};

	// Handle video click for play/pause
	const handleVideoClick = () => handlePlayPause();

	// Toggle mute/unmute
	const handleMuteToggle = () => {
		setIsMuted((prev) => !prev);
		videoRef.current.muted = !isMuted;
	};

	// Adjust volume when muted
	useEffect(() => {
		if (isMuted) {
			videoRef.current.volume = 0;
			handleVolumeChange(0);
		} else {
			videoRef.current.volume = volume / 100;
		}
	}, [isMuted, volume]);

	return (
		<Box
			ref={containerRef}
			position='relative'
			borderRadius='md'
			overflow='hidden'
			w='100%'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{/* Video Element */}
			<AspectRatio ratio={16 / 9}>
				<video
					ref={videoRef}
					src={videoSrc}
					style={{ objectFit: "cover", cursor: "pointer" }}
					onClick={handleVideoClick} // Handle click on video
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
				alignItems='center'
				opacity={showControls ? 1 : 0}
				transition='opacity 0.3s ease'
				pointerEvents={showControls ? "auto" : "none"}>
				{/* Play/Pause Button */}
				<Button
					size='sm'
					variant='ghost'
					color='white'
					_hover={{ bg: "rgba(255,255,255,0.1)" }}
					_active={{ bg: "rgba(255,255,255,0.2)" }}
					onClick={handlePlayPause}>
					<Icon
						icon={isPlaying ? "mdi:pause" : "mdi:play"}
						width='24'
						height='24'
					/>
				</Button>

				{/* Progress Bar */}
				<Box
					flex='1'
					mx={2}
					bg='whiteAlpha.300'
					h='2px'
					cursor='pointer'
					onClick={handleProgressClick}>
					<Box
						w={`${progress}%`}
						h='100%'
						bg='blue.500'
						transition='width 0.1s linear'
					/>
				</Box>

				{/* Volume Control */}
				<Box
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
					position='relative'
					mx={2}>
					<Button
						size='sm'
						variant='ghost'
						color='white'
						_hover={{ bg: "rgba(255,255,255,0.1)" }}
						_active={{ bg: "rgba(255,255,255,0.2)" }}
						onClick={handleMuteToggle} // Toggle mute
					>
						<Icon
							icon={isMuted ? "mdi:volume-off" : "mdi:volume-high"}
							width='20'
							height='20'
						/>
					</Button>

					{isOpen && (
						<Box
							position='absolute'
							bottom='100%'
							left='50%'
							transform='translateX(-50%)'
							p={2}
							bg='rgba(0,0,0,0.8)'
							borderRadius='md'
							w='30px'>
							<Slider
								aria-label='Volume slider'
								defaultValue={volume}
								min={0}
								max={100}
								onChange={handleVolumeChange}
								orientation='vertical'
								h='80px'>
								<SliderTrack bg='whiteAlpha.300'>
									<SliderFilledTrack bg='blue.500' />
								</SliderTrack>
								<SliderThumb boxSize={4}>
									<Icon icon='mdi:volume-high' width='16' height='16' />
								</SliderThumb>
							</Slider>
						</Box>
					)}
				</Box>

				{/* Fullscreen Button */}
				<Button
					size='sm'
					variant='ghost'
					color='white'
					_hover={{ bg: "rgba(255,255,255,0.1)" }}
					_active={{ bg: "rgba(255,255,255,0.2)" }}
					onClick={handleFullscreen}>
					<Icon
						icon={isFullscreen ? "mdi:fullscreen-exit" : "mdi:fullscreen"}
						width='20'
						height='20'
					/>
				</Button>
			</Flex>
		</Box>
	);
}
