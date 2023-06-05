import styled from "styled-components";

export const ConverterForm = styled.form`
    padding: 100px;

    @media(max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Fieldset = styled.fieldset`
    background-color: rgb(236, 233, 233);
    line-height: 1.8;
    border: none;
    box-shadow: 3px 3px 3px 2px rgb(144, 140, 140);
    border-radius: 5px;
    width: 700px;
    min-height: 500px;
`;

export const Legend = styled.legend`
     font-size: 30px;
    font-weight: 700;
    background-color: rgb(60, 55, 130);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
`;

export const Label = styled.label`
    font-size: 20px;
    padding: 10px;
`;

export const Field = styled.input`
    font-size: 15px;
    width: 260px;
    border-radius: 8px;
    padding: 5px;
    margin: 10px;
    height: 35px;

    @media(max-width: 767px) {
        display: flex;
        flex-grow: 1;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    padding: 10px;
    font-weight: 700;
`;

export const ButtonContainer = styled.div`
    text-align: center;
    display: flex;
`;

export const Button = styled.button`
    font-size: 25px;
    background-color:rgb(60, 55, 130);
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    flex-grow: 1;
`;

export const Inform = styled.p`
    padding: 10px;
    font-size: 15px;
`; 

export const Loading = styled.p`
    font-size: 30px;
    text-align: center;
`;

export const Failure = styled.p`
    font-size: 20px;
    text-align: center;
    color: red;
`;