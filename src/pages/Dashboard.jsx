import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useRefferal } from "../context/RefferalContext";
import Layout from "../layout/Layout";
import DashboardSideNav from "../components/DashboardSideNav";

const CourseProgressBar = lazy(() => import("../components/CourseProgressBar"));
const CourseModuleList = lazy(() => import("../components/CourseModuleList"));
const TrainingCourseModule = lazy(() =>
	import("../components/TrainingCourseModule")
);
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
		rightNavHeaderComponent: <CourseProgressBar />,
		rightNavchildren: <CourseModuleList />,
		centerComponent: <TrainingCourseModule />,
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
	const location = useLocation();
	const currentRoute = dashboardRoutes[location.pathname];

	// Determine which component to show based on isRefferalSubmitted
	const CenterComponent =
		location.pathname === "/dashboard/referral-program" ? (
			isRefferalSubmitted ? (
				<AffiliateDashboard />
			) : (
				<ReferralProgram />
			)
		) : (
			currentRoute?.centerComponent
		);

	const RightNavHeaderComponent = currentRoute?.rightNavHeaderComponent;
	const RightNavChildren = currentRoute?.rightNavchildren;

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={
				RightNavHeaderComponent && (
					<Suspense fallback={<div>Loading...</div>}>
						{RightNavHeaderComponent}
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
