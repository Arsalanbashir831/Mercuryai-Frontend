import { lazy, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRefferal } from "../context/RefferalContext";
import Layout from "../layout/Layout";
import DashboardSideNav from "../components/DashboardSideNav";

const CourseProgressBar = lazy(() => import("../components/CourseProgressBar"));
const CourseModuleList = lazy(() => import("../components/CourseModuleList"));
const TrainingCourseModule = lazy(() =>
	import("../components/TrainingCourseModule")
);
const AdvanceCourseSidebar = lazy(() =>
	import("../components/AdvanceCourseSidebar")
);
const AdvanceTrainingCourseModule = lazy(() =>
	import("../components/AdvanceTrainingCourseModule")
);
const CourseTopic = lazy(() => import("../components/CourseTopic"));
const NewsArticles = lazy(() => import("../components/NewsArticles"));
const ReferralProgram = lazy(() => import("../components/ReferralProgram"));
const AffiliateDashboard = lazy(() =>
	import("../components/AffiliateDashboard")
);

const dashboardRoutes = {
	"/dashboard/mercury-ai-training-course": {
		rightNavHeaderComponent: <CourseProgressBar />,
		rightNavchildren: <CourseModuleList />,
		centerComponent: <TrainingCourseModule />,
	},
	"/dashboard/mercury-ai-pro-advance-training-course": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: null,
	},
	"/dashboard/news-articles": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: <NewsArticles />,
	},
	"/dashboard/referral-program": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: null, // Dynamically set later
	},
};

const Dashboard = () => {
	const { isRefferalSubmitted } = useRefferal();
	const [isUpgraded, setIsUpgraded] = useState(true);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const currentRoute = dashboardRoutes[location.pathname];

	// Check for topic and lesson query parameters
	const hasTopicAndLesson =
		queryParams.has("topic") && queryParams.has("lesson");

	// Determine the center component to render
	const CenterComponent =
		location.pathname === "/dashboard/referral-program" ? (
			isRefferalSubmitted ? (
				<AffiliateDashboard />
			) : (
				<ReferralProgram />
			)
		) : location.pathname ===
		  "/dashboard/mercury-ai-pro-advance-training-course" ? (
			hasTopicAndLesson ? (
				<CourseTopic />
			) : (
				<AdvanceTrainingCourseModule
					isUpgraded={isUpgraded}
					setIsUpgraded={setIsUpgraded}
				/>
			)
		) : (
			currentRoute?.centerComponent
		);

	// Determine the right navigation content
	const RightNavChildren =
		location.pathname ===
		"/dashboard/mercury-ai-pro-advance-training-course" ? (
			<AdvanceCourseSidebar
				isUpgraded={isUpgraded}
				setIsUpgraded={setIsUpgraded}
				location={location}
			/>
		) : (
			currentRoute?.rightNavchildren
		);

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={
				currentRoute?.rightNavHeaderComponent && (
					<Suspense fallback={<div>Loading...</div>}>
						{currentRoute.rightNavHeaderComponent}
					</Suspense>
				)
			}
			rightNavchildren={
				RightNavChildren && (
					<Suspense fallback={<div>Loading...</div>}>
						{RightNavChildren}
					</Suspense>
				)
			}
			centerComponent={
				<Suspense fallback={<div>Loading...</div>}>{CenterComponent}</Suspense>
			}
		/>
	);
};

export default Dashboard;
