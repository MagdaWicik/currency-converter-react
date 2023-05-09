import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result?.targetAmount?.toFixed(2)}&nbsp;{result.currency}
    </StyledResult>
);

export default Result;