import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardSideNav from "../components/DashboardSideNav";
import TrainingCourseModule from "../components/TrainingCourseModule";
import CourseProgressBar from "../components/CourseProgressBar";
import CourseModuleList from "../components/CourseModuleList";

const TrainingCoursePage = () => {
	const location = useLocation();

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={<CourseProgressBar />}
			rightNavchildren={<CourseModuleList />}
			centerComponent={<TrainingCourseModule />}
		/>
	);
};

export default TrainingCoursePage;
