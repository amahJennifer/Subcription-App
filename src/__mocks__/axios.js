export default {
	get: jest.fn().mockResolvedValue({ data: {} }),
};



// "use strict";
// module.exports = {
// 	get: () => {
// 		return Promise.resolve([
// 			{
// 				subcriptionPlan: "Gold",
// 				couponCode: "none",
// 				transactionId: "100030",
// 				purchaseDate: "2020-05-06",
// 				expiryDate: "2021-05-06",
// 			},
// 			{
// 				subcriptionPlan: "Silver",
// 				couponCode: "none",
// 				transactionId: "100031",
// 				purchaseDate: "2020-02-06",
// 				expiryDate: "2021-02-06",
// 			},
// 			{
// 				subcriptionPlan: "Bronze",
// 				couponCode: "none",
// 				transactionId: "100032",
// 				purchaseDate: "2020-04-06",
// 				expiryDate: "2021-05-01",
// 			},
// 		]);
// 	},
// };
