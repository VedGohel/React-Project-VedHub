import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const date = "latest";
                const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`;
                
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                const result = await response.json();

                if (result[currency]) {
                    setData(result[currency]);
                } else {
                    console.error("Invalid currency data:", result);
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
