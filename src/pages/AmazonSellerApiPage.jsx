import { useLocation } from "react-router-dom";

import Layout from "../layout/Layout";
import SettingsSideNav from "../components/SettingsSideNav";
import AmazonSellerApi from "../components/AmazonSellerApi";

const AmazonSellerApiPage = () => {
	const location = useLocation();

	return (
		<Layout
			leftNavHeader={"Settings"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<SettingsSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={null}
			rightNavchildren={null}
			centerComponent={<AmazonSellerApi />}
		/>
	);
};

export default AmazonSellerApiPage;
