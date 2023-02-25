import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import emp from "./employees.module.css";

import { add, del, inc } from "../../../store/actions";

function Employees() {
  let init = false;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        if (!init) {
          data.forEach((item) => {
            dispatch(add(item.name, item.salary, item.hidden, item.id));
            init = true;
          });
        }
      });
  }, []);

  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [promote, setPromote] = useState(false);

  function addEmployee() {
    let id = state.length ? +state[state.length - 1].id + 1 : 1;
    dispatch(add(name, salary, false, id));
  }
  function deleteEmployee(key) {
    console.log(key);
    dispatch(del(key));
  }

  function onPromote() {
    console.log("Inc");
    console.log(state);
  }

  return (
    <div className={emp.figure}>
      <div className={emp.container}>
        <div className={emp.header}>
          <div>
            <h3>Accounting of employees in the company</h3>
          </div>
          <div>
            <h3>Total employees: {state ? state.length : 0}</h3>
          </div>
          <div>
            <h3>Will receive the Bonus: {state ? state.length : 0}</h3>
          </div>
        </div>

        <div className={emp.filter}>
          <input placeholder="Search"></input>
          <div className={emp.buttons}>
            <button>All</button>
            <button onClick={() => onPromote()}>Promote</button>
            <button>More 5000</button>
          </div>
        </div>

        <div className={emp.containerEmployees}>
          {state ? (
            state.map((item) => {
              return (
                <div
                  className={item.hidden ? emp.hidden : emp.employees}
                  key={item.id}
                >
                  <div className={emp.name}>
                    {item.name.replace(
                      item.name[0],
                      item.name[0].toUpperCase()
                    )}
                  </div>
                  <div className={emp.salary}>{item.salary}</div>

                  <div className={emp.buttons}>
                    <div  onClick={()=> setPromote(!promote)}>
                      <img className={promote? '': emp.opacity} src="/icons/coin.png" alt="logo"  />
                    </div>
                    <div name="delete" onClick={() => deleteEmployee(item.id)}>
                      <img src="/icons/delete.png" alt="logo" />
                    </div>
                    <div>
                      <img src="/icons/star.png" alt="logo" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>

        <div>
          <h2>{name}</h2>
          <input onChange={(e) => setName(e.target.value)}></input>
          <input onChange={(e) => setSalary(e.target.value)}></input>
          <button onClick={() => addEmployee()}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Employees;
