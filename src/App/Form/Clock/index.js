import { useState, useEffect } from "react";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentDate]);

    return (
        <span>
            {currentDate.toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
            )} {currentDate.toLocaleTimeString()}
        </span>
    )
};

export default Clock;