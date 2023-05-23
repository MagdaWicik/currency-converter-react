import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const API_URL = "https://api.exchangerate.host/latest?base=PLN";
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(API_URL);

                setRatesData({
                    rates: response.data.rates,
                    date: response.data.date,
                    status: "success",
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };
        setTimeout(getData, 2000);
    }, []);

    return ratesData;
};