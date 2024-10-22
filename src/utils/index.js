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
