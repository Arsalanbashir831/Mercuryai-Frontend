import { useLocation } from "react-router-dom";
import { useRefferal } from "../context/RefferalContext";

import Layout from "../layout/Layout";
import ReferralProgram from "../components/ReferralProgram";
import DashboardSideNav from "../components/DashboardSideNav";
import AffiliateDashboard from "../components/AffiliateDashboard";

const RefferalProgramPage = () => {
	const { isRefferalSubmitted } = useRefferal();
	const location = useLocation();

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={null}
			rightNavchildren={null}
			centerComponent={
				isRefferalSubmitted ? <AffiliateDashboard /> : <ReferralProgram />
			}
		/>
	);
};

export default RefferalProgramPage;
