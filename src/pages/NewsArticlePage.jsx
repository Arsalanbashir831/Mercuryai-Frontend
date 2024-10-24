import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import DashboardSideNav from "../components/DashboardSideNav";
import NewsArticles from "../components/NewsArticles";

const NewsArticlePage = () => {
	const location = useLocation();

	return (
		<Layout
			leftNavHeader={"Dashboard"}
			leftNavFooterButton={{ label: "Effettua subito l’upgrade" }}
			leftNavchildren={<DashboardSideNav currentRoute={location.pathname} />}
			rightNavHeaderComponent={null}
			rightNavchildren={null}
			centerComponent={<NewsArticles />}
		/>
	);
};

export default NewsArticlePage;
