import "./style.css";

const Result = ({ result }) => (
        <strong className="result"> 
            {result.targetAmount}&nbsp;{result.currency}
        </strong>
);

export default Result;