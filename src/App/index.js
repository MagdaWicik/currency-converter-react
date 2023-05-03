import { useState } from "react";
import { currencies } from "./currencies";
import Form from "./Form";
import "../index.css";

function App() {
  const [result, setResult] = useState("0");

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Form
      result={result}
      calculateResult={calculateResult}
    />
  );
};

export default App;
