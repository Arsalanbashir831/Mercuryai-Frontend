import React, { useState, useEffect, useRef } from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import { Box, useColorModeValue } from "@chakra-ui/react";

const ResponsiveLineChart = ({ chartData }) => {
	const [chartWidth, setChartWidth] = useState(0);
	const chartContainerRef = useRef(null);

	// Dynamically calculate the available width
	useEffect(() => {
		const updateWidth = () => {
			if (chartContainerRef.current) {
				setChartWidth(chartContainerRef.current.offsetWidth - 32);
			}
		};
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	// Define colors based on color mode
	const bgColor = useColorModeValue("gray.100", "gray.900");
	const gridColor = useColorModeValue("#ccc", "#444");
	const axisColor = useColorModeValue("#333", "#fff");
	const lineColor = useColorModeValue("#3182ce", "#63b3ed"); // Different shades for dark/light mode
	const dotColor = useColorModeValue("#3182ce", "#63b3ed"); // Same as line color

	return (
		<Box
			ref={chartContainerRef}
			bg={bgColor}
			p={4}
			borderRadius='lg'
			overflowX='auto'
			width='100%'
			sx={{
				"&::-webkit-scrollbar": {
					height: "8px",
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: "gray.300",
					borderRadius: "8px",
				},
				"&::-webkit-scrollbar-track": {
					backgroundColor: "transparent",
				},
			}}>
			{chartWidth > 0 && (
				<LineChart width={chartWidth} height={200} data={chartData}>
					<CartesianGrid strokeDasharray='3 3' stroke={gridColor} />
					<XAxis dataKey='name' stroke={axisColor} />
					<YAxis stroke={axisColor} />
					<Line
						type='monotone'
						dataKey='value'
						stroke={lineColor}
						strokeWidth={2}
						dot={{ fill: dotColor }}
					/>
				</LineChart>
			)}
		</Box>
	);
};

export default ResponsiveLineChart;
