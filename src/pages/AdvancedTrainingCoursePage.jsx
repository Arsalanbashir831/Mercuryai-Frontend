import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardSideNav from "../components/DashboardSideNav";
import CourseTopic from "../components/CourseTopic";
import AdvanceTrainingCourseModule from "../components/AdvanceTrainingCourseModule";
import { useState } from "react";
import AdvanceCourseSidebar from "../components/AdvanceCourseSidebar";
import AdvanceTrainingCourseModuleHeader from "../components/AdvanceTrainingCourseModuleHeader";

const AdvancedTrainingCoursePage = () => {
	const location = useLocation();
	const [isUpgraded, setIsUpgraded] = useState(true);
	const queryParams = new URLSearchParams(location.search);
	const hasTopicAndLesson =
		queryParams.has("topic") && queryParams.has("lesson");

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={null}
			rightNavchildren={
				<AdvanceCourseSidebar
					isUpgraded={isUpgraded}
					setIsUpgraded={setIsUpgraded}
					location={location}
				/>
			}
			centerComponent={
				hasTopicAndLesson ? (
					<CourseTopic />
				) : (
					<AdvanceTrainingCourseModule
						isUpgraded={isUpgraded}
						setIsUpgraded={setIsUpgraded}
					/>
				)
			}
			headerComponent={
				hasTopicAndLesson ? null : <AdvanceTrainingCourseModuleHeader />
			}
		/>
	);
};

export default AdvancedTrainingCoursePage;
