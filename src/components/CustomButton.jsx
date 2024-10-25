import React from "react";
import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function CustomButton({
	label,
	leftIcon,
	rightIcon,
	onClick,
	...rest
}) {
	return (
		<Button
			leftIcon={<Icon icon={leftIcon} />}
			rightIcon={<Icon icon={rightIcon} />}
			bg='linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)'
			color='white'
			_hover={{ bg: "linear-gradient(90deg, #40E0D0 0%, #2196F3 100%)" }}
			width='100%'
			{...rest}
			onClick={onClick}>
			{label}
		</Button>
	);
}
