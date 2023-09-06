import { useState, useEffect, createContext } from "react";
import axios from "axios";
const DataContext = createContext();

function DataProvider({ children }) {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("https://api.sheki.svdev.me/api/forecasts", {
			headers: {
				Authorization: "Bearer " + import.meta.env.VITE_API_KEY
			}
		})
			.then(response => {
				setData(response.data);
			})
			.catch(error => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<DataContext.Provider value={data}>
			{children}
		</DataContext.Provider>
	);
}

export default DataProvider
export { DataContext };
