import { useState } from "react";
import calc from "./calculator.module.css";

export function Calculator() {
  const numbers = [
    "%",
    "1/x",
    "C",
    "CE",
    "√",
    "Х²",
    "+/-",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [result, setResult] = useState("0");

  function changeResult(item) {
    switch (item) {
      case ".":
        setResult(result + ".");
        break;
      case "+/-":
        result[0] !== "-"
          ? setResult("-" + result)
          : setResult(result.substring(1));
        break;
      case "1/x":
        setResult(1 / result);
        break;
      case "%":
        setResult(result / 100);
        break;
      case "=":
        setResult(eval(result));
        break;
      case "CE":
        result.length > 1 ? setResult(result.slice(0, -1)) : setResult("0");
        break;
      case "C":
        setResult("0");
        break;
      case "√":
        setResult(Math.sqrt(result));
        break;
      case "Х²":
        setResult(result * result);
        break;

      default:
        if (item === "+" || item === "-" || item === "*" || item === "/") {
          setResult(result + item);
        } else {
          result !== "0" ? setResult(result + item) : setResult(item);
        }

        break;
    }
  }

  return (
    <div className={calc.container}>
      <h1>Calculator</h1>
      <div className={calc.result}>{result}</div>
      <div className={calc.buttons}>
        {numbers.map((item) => {
          return (
            <div
              className={calc.items}
              key={item}
              onClick={() => changeResult(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
