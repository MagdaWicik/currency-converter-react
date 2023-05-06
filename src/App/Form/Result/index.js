import "./style.css";

const Result = ({ result }) => (
    <strong className="result">
        {result?.targetAmount?.toFixed(2)}&nbsp;{result.currency}
    </strong>
);

export default Result;