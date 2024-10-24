import { useLocation } from "react-router-dom";

import Layout from "../layout/Layout";
import SettingsSideNav from "../components/SettingsSideNav";
import PaymentManagement from "../components/PaymentManagement";

const PaymentManagementPage = () => {
	const location = useLocation();

	return (
		<Layout
			leftNavHeader={"Settings"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<SettingsSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={null}
			rightNavchildren={null}
			centerComponent={<PaymentManagement />}
		/>
	);
};

export default PaymentManagementPage;
