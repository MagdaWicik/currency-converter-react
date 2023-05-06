import { currencies } from "../currencies";
import { useState, useEffect } from "react";
import Result from "./Result";
import "./style.css";
import Calendar from "./Calendar";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("0");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000);

    return() => {
      clearInterval(intervalId);
    };
  }, [currentDate]);

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
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p className="form__date">
          Dzisiaj jest <Calendar currentDate={currentDate} />
        </p>
        <p className="form__paragraph">
          Przelicz według kursu średniego z dnia 17.03.23r.
        </p>
        <p>
          <label className="form__label">
            *Wpisz kwotę w PLN:
            <input
              value={amount}
              className="form__label--input"
              type="number"
              step="0.01"
              min="0.01"
              required
              placeholder="Kwota, którą chcesz wymienić"
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label className="form__label">
            *Wybierz walutę:
            <select
              value={currency}
              className="form__label--select"
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
            </select>
          </label>
        </p>
        <div className="form__buttonContainer">
          <button className="form__button">Przelicz</button>
        </div>
        <p>
          <label className="form__label">
            Kwota, którą otrzymasz: <Result result={result} />
          </label>
        </p>
        <p className="form__inform">
          *Pole wymagane
        </p>
      </fieldset>
    </form>
  )
};

export default Form;