import { useCurrentDate } from "./useCurrentDate";
import { Date } from "./styled";

const Clock = () => {
    const currentDate = useCurrentDate();

    return (
        <Date> Dzisiaj jest: {currentDate.toLocaleDateString(
            undefined,
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            },
        )} {currentDate.toLocaleTimeString()}
        </Date>
    )
};

export default Clock;