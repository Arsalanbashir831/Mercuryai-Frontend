import Layout from "../layout/Layout";

const Dashboard = () => {
	return (
		<Layout
			leftNavHeaderButton={{ icon: "dashicons:plus-alt", label: "New Chat" }}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={"a"}
			rightNavHeaderButton={{
				icon: "octicon:book-16",
				label: "JOIN COURSE",
				onClick: () => navigate("/dashboard/mercury-ai-training-course"),
			}}
			rightNavchildren={"b"}
		/>
	);
};

export default Dashboard;
