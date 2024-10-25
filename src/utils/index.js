export const groupChatsByDate = (chats) => {
	const today = new Date();

	const grouped = {
		today: [],
		yesterday: [],
		last7Days: [],
		older: [],
	};

	chats.forEach((chat) => {
		const chatDate = chat.timestamp;
		const diffInDays = Math.floor((today - chatDate) / 86400000);

		if (diffInDays === 0) {
			grouped.today.push(chat);
		} else if (diffInDays === 1) {
			grouped.yesterday.push(chat);
		} else if (diffInDays <= 7) {
			grouped.last7Days.push(chat);
		} else {
			grouped.older.push(chat);
		}
	});

	return grouped;
};

export const languageMenuItems = [
	{ label: "English - EN" },
	{ label: "Deutsch - DE" },
	{ label: "Español - ES" },
	{ label: "Italiano - IT" },
	{ label: "Francese - FR" },
	{ label: "中文 - ZH" },
];

export const userMenuItems = [
	{ icon: "mdi:account", label: "Account", link: "/settings/account" },
	{ icon: "mdi:settings", label: "Settings" },
	{
		icon: "iconoir:bell-notification-solid",
		label: "News & Updates",
		link: "/dashboard/news-articles",
	},
	{
		icon: "mdi:paper-edit-outline",
		label: "Subscription",
		link: "/settings/subscription",
	},
	{
		icon: "file-icons:moleculer",
		label: "Amazon API",
		link: "/settings/amazon-api",
	},
	{
		icon: "hugeicons:laptop-programming",
		label: "Training",
		link: "/dashboard/mercury-ai-training-course",
	},
	{
		icon: "mdi:credit-card-outline",
		label: "Payment Management",
		link: "/settings/payment-management",
	},
	{
		icon: "mdi:help-circle-outline",
		label: "Help & Contacts",
		link: "/contact-support",
	},
	{
		icon: "mdi:account-multiple-outline",
		label: "Affiliation",
		link: "/dashboard/referral-program",
	},
];

export const toolsMenuItems = [
	{
		icon: "octicon:rocket-16",
		label: "Mercury Ai Pro Advance Training Course",
		link: "/dashboard/mercury-ai-pro-advance-training-course",
	},
	{
		icon: "tabler:news",
		label: "News & Articles",
		link: "/dashboard/news-articles",
	},
	{
		icon: "octicon:gift-16",
		label: "Refferal Program",
		link: "/dashboard/referral-program",
	},
];
