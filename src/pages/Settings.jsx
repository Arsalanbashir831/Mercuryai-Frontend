import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import { useRefferal } from "../context/RefferalContext";
import AmazonSellerApi from "../components/AmazonSellerApi";
import PaymentManagement from "../components/PaymentManagement";
import SettingsSideNav from "../components/SettingsSideNav";

const AccountSettings = lazy(() => import("../components/AccountSettings"));
const ReferralProgram = lazy(() => import("../components/ReferralProgram"));
const AffiliateDashboard = lazy(() =>
	import("../components/AffiliateDashboard")
);

const settingRoutes = {
	"/settings/account": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: <AccountSettings />,
	},
	"/settings/amazon-api": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: <AmazonSellerApi />,
	},
	"/settings/payment-management": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: <PaymentManagement />,
	},
	"/settings/subscription": {
		rightNavHeaderComponent: null,
		rightNavchildren: null,
		centerComponent: null, // Dynamically set later
	},
};

const Settings = () => {
	const { isRefferalSubmitted } = useRefferal();
	const location = useLocation();
	const currentRoute = settingRoutes[location.pathname];

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
			leftNavHeader={"Settings"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<SettingsSideNav currentRoute={location.pathname} />}
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

export default Settings;
