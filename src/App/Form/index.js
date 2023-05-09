import { currencies } from "../currencies";
import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { ConverterForm, Fieldset, Legend, Label, Field, Paragraph, Button, ButtonContainer, Inform } from "./styled";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("0");

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <ConverterForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        <Paragraph>
          Przelicz według kursu średniego z dnia 17.03.23r.
        </Paragraph>
        <p>
          <Label>
            *Wpisz kwotę w PLN:
            <Field
              value={amount}
              type="number"
              step="0.01"
              min="0.01"
              required
              placeholder="Kwota, którą chcesz wymienić"
              onChange={({ target }) => setAmount(target.value)}
            />
          </Label>
        </p>
        <p>
          <Label>
            *Wybierz walutę:
            <Field as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </Field>
          </Label>
        </p>
        <ButtonContainer>
          <Button>Przelicz</Button>
        </ButtonContainer>
        <p>
          <Label>
            Kwota, którą otrzymasz: <Result result={result} />
          </Label>
        </p>
        <Inform>
          *Pole wymagane
        </Inform>
      </Fieldset>
    </ConverterForm>
  )
};

export default Form;