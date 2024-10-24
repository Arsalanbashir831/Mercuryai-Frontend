import React, { useState, useEffect, useRef } from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import { Box } from "@chakra-ui/react";

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

	return (
		<Box
			ref={chartContainerRef}
			bg='gray.800'
			p={4}
			borderRadius='lg'
			overflowX='auto'
			width='100%'>
			{chartWidth > 0 && (
				<LineChart width={chartWidth} height={200} data={chartData}>
					<CartesianGrid strokeDasharray='3 3' stroke='#444' />
					<XAxis dataKey='name' stroke='#fff' />
					<YAxis stroke='#fff' />
					<Line
						type='monotone'
						dataKey='value'
						stroke='#3182ce'
						strokeWidth={2}
						dot={{ fill: "#3182ce" }}
					/>
				</LineChart>
			)}
		</Box>
	);
};

export default ResponsiveLineChart;
