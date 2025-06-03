"use server";
export const leetcodePOTDURL = async () => {
	try {
		const response = await fetch(
			"https://api.samanyuroy.workers.dev/daily"
		);
		const data = await response.json();
		const endpoint = data.data.data.activeDailyCodingChallengeQuestion.link;
		console.log(endpoint, typeof endpoint);

		if (typeof endpoint !== "string") {
			console.log("asad");
			throw new Error("Something went wrong");
		}

		return `https://leetcode.com${endpoint}`;
	} catch (error) {
		console.error(error);
		return null;
	}
};
