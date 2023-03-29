import { useEffect, useState } from "react";

export function Currency() {
  const [data, setData] = useState({});
  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, setToCurr] = useState("");
const[fromSum, setFromSum] = useState(0);
const[toSum, setToSum] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await fetch(
        "https://v6.exchangerate-api.com/v6/2b713342aaa0c84ba25c9d31/latest/USD"
      )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

useEffect(() => {
  if (fromSum) {  setToSum(
      (
        (data.conversion_rates[toCurr] / data.conversion_rates[fromCurr]) *
        fromSum
      ).toFixed(2)
    );
  
}}, [fromSum, toSum, fromCurr, toCurr]);





  return (
    <div className="bg-slate-200 text-center pb-10">
        <h1 className="text-2xl py-5">Currency Converter</h1>
      <div className="flex justify-center">
        <div className="mr-5 p-5 text-lg">
          <select
            className="bg-amber-300 py-2 px-1 w-72"
            onClick={(e) => setFromCurr(e.target.value)}
          >
            <option value="0">Select Currency</option>
            <option value="USD">USD</option> 
            <option value="EUR">EUR</option>
            <option value="PLN">PLN</option>
            <option value="BYN">BYN</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
          </select>
          <div>
            <input
              type="number"
              placeholder="0"
              className="w-72 p-2"
              onChange={(e) => {
                setFromSum(e.target.value)
              }}
              value={fromSum}
            />
          </div>
        </div>
        <div className=" mt-2 text-8xl text-yellow-600">&#10143;</div>
        <div className="mr-5 p-5 text-lg">
          <select
            className="bg-amber-300 py-2 px-1 w-72"
            onClick={(e) => setToCurr(e.target.value)  
} 
          >
            <option value="0" >Select Currency</option>
            <option  value="USD">USD </option>
            <option value="EUR">EUR </option>
            <option value="PLN">PLN</option>
            <option value="BYN">BYN</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
          </select>

          <div>
            <input
              type="number"
              placeholder="0"
              className="w-72 p-2"
     onChange={(e) => setToSum(e.target.value)}
     value={toSum}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
