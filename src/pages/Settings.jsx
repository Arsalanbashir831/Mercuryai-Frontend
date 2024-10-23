import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import SettingsSideNav from "../components/SettingsSideNav";

const AccountSettings = lazy(() => import("../components/AccountSettings"));
const AmazonSellerApi = lazy(() => import("../components/AmazonSellerApi"));
const PaymentManagement = lazy(() => import("../components/PaymentManagement"));
const PricingTable = lazy(() => import("../components/PricingTable"));

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
		centerComponent: <PricingTable />,
	},
};

const Settings = () => {
	const location = useLocation();
	const currentRoute = settingRoutes[location.pathname];

	// Determine which component to show based on isRefferalSubmitted
	const CenterComponent = currentRoute?.centerComponent;
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
