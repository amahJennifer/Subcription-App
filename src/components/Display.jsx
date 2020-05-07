import React, { useEffect, useState } from "react";
import axios from "axios";

export const loadData = async () => {
	return await axios
    .get(
      `https://my-json-server.typicode.com/amahjennifer/demo/transactionData`
    )
    .then((res) => res.data)
    .catch(function (error) {
      console.log(error);
    });
};

const Display = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
    loadData().then(plan => setData(plan));
	}, []);

	return (
		<div>
			<ul>
				{data.map((plan) => (
					<li key={plan.transactionId}>{plan.subcriptionPlan}</li>
				))}
			</ul>
		</div>
	);
};

export default Display;
