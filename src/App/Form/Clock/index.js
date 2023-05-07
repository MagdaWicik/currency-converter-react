import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const currentDate = useCurrentDate();

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