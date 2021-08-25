import React, { createContext, useReducer, useState } from "react";
import { AppReducer } from "../AppReducer";

export const CryptosContext = createContext();
export const SparklineContext = createContext();
export const ClickContext = createContext();
export const UserDataContext = createContext();

export const AppProvider = (props) => {
	const [cryptos, setCryptos] = useState([]);
	const [sparkline, setSparkline] = useState([]);
	const [userData, setUserData] = useState();
	const [state, dispatch] = useReducer(AppReducer, [
		{ onDaily: true },
		{ onWeekly: false },
		{ onMonthly: false },
		{ onYearly: false },
		{ onAll: false },
	]);

	return (
		<ClickContext.Provider value={[state, dispatch]}>
			<UserDataContext.Provider value={[userData, setUserData]}>
				<CryptosContext.Provider value={[cryptos, setCryptos]}>
					<SparklineContext.Provider value={[sparkline, setSparkline]}>
						{props.children}
					</SparklineContext.Provider>
				</CryptosContext.Provider>
			</UserDataContext.Provider>
		</ClickContext.Provider>
	);
};
