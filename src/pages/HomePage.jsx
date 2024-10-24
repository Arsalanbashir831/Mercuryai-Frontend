import ChatArea from "../components/ChatArea";
import CourseSidebar from "../components/CourseSidebar";
import Layout from "../layout/Layout";
import ChatLeftSideNav from "../components/ChatLeftSideNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<Layout
			leftNavHeaderButton={{ icon: "dashicons:plus-alt", label: "New Chat" }}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<ChatLeftSideNav />}
			rightNavHeaderButton={{
				icon: "octicon:book-16",
				label: "JOIN COURSE",
				onClick: () => navigate("/dashboard/mercury-ai-training-course"),
			}}
			rightNavchildren={<CourseSidebar />}
			centerComponent={<ChatArea />}
		/>
	);
};

export default Home;
