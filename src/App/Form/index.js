import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import {
  ConverterForm,
  Fieldset,
  Legend,
  Label,
  Field,
  Paragraph,
  Button,
  ButtonContainer,
  Inform,
  Loading,
  Failure
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("0");
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

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
        {ratesData.status === "loading"
          ? (
            <>
              <Loading>
                Trwa pobieranie danych...
              </Loading>
            </>
          ) : ratesData.status === "error"
            ? (
              <Failure>
                Wystąpił błąd. Sprawdź połączenie z internetem lub spróbuj ponownie później.
              </Failure>
            ) : (
              <>
                <Paragraph>
                  Kursy walut aktualne na dzień: {ratesData.date}
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
                      {Object.keys(ratesData.rates).map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))}
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
              </>
            )
        }
      </Fieldset>
    </ConverterForm>
  )
};

export default Form;