const Calendar = ({ currentDate }) => (
    <span>
        {currentDate.toLocaleDateString(
            undefined,
            {
                weekday: "long", month: "long", day: "numeric", year: "numeric"
            },
        )} {currentDate.toLocaleTimeString()}
    </span>
);

export default Calendar;