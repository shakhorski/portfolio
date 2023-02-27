import { useEffect, useState } from "react";
import emp from "./employees.module.css";

function Employees() {
  const url = "http://localhost:3000/employees/";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  async function POST() {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        salary,
        hidden: false,
        id: data[data.length - 1].id + 1,
        isPromoted: false,
        hasBonus: false,
      }),
    });
  }
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);

  function addEmployee() {
    POST();
    setData([
      ...data,
      {
        name,
        salary,
        hidden: false,
        id: data[data.length - 1].id + 1,
        isPromoted: false,
        hasBonus: false,
      },
    ]);
  }
  function deleteEmployee(e, key) {
    e.stopPropagation()
    setData(data.filter((item) => item.id !== key));
    fetch(url + key, { method: "DELETE" });
  }

  function onPromote(e, id) {
    e.target.classList.toggle(emp.opacity);
    e.stopPropagation()
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isPromoted: !item.isPromoted } : item
      )
    );
    console.log(data.find((el) => el.id === id));
    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ...data.find((el) => el.id === id),
        isPromoted: !data.find((el) => el.id === id).isPromoted,
      }),
    });

  }
  function addBonus(id) {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, hasBonus: !item.hasBonus } : item
      )
    );
    console.log(data.find((el) => el.id === id));
    fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ...data.find((el) => el.id === id),
        hasBonus: !data.find((el) => el.id === id).hasBonus,
      }),
    });
  }
  function onPromoteFilter() {
    setData(data.filter((item) => item.isPromoted === true));
  }
  function showAllEmployees() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  function searchFilter(e) {
setData(data.filter(item=>(~item.name.toUpperCase().indexOf(e.target.value.toUpperCase()))))
    console.log(e.target.value);
  }
  console.log(data);  return (
    <div className={emp.figure}>
      <div className={emp.container}>
        <div className={emp.header}>
          <div>
            <h3>Accounting of employees in the company</h3>
          </div>
          <div>
            <h3>Total employees: {data ? data.length : 0}</h3>
          </div>
          <div>
            <h3>Will receive the Bonus: {data.filter(item => item.hasBonus).length}</h3>
          </div>
        </div>

        <div className={emp.filter}>
          <input placeholder="Search" onChange={(e)=>searchFilter(e)}></input>
          <div className={emp.buttons}>
            <button onClick={() => showAllEmployees()}>All</button>
            <button onClick={() => onPromoteFilter()}>Promote</button>
            <button onClick={() => setData(data.filter(item => item.salary >= 5000))}>More 5000</button>
          </div>
        </div>

        <div className={emp.containerEmployees}>
          {data ? (
            data.sort().map((item) => {

              return (
                <div
                style={item.hasBonus? {color: 'darkgoldenrod'} : {color:'black'}}
                  className={emp.employees}
                  onClick={() => addBonus(item.id)}
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
                    <div>
                      <img
                        className={item.isPromoted? '': emp.opacity}
                        onClick={(e) => onPromote(e, item.id)}
                        src="/icons/coin.png"
                        alt="logo"
                      />
                    </div>
                    <div name="delete" onClick={(e) => deleteEmployee(e, item.id)}>
                      <img src="/icons/delete.png" alt="logo" />
                    </div>
                    <div>
                      <img
                        className={item.hasBonus? '': emp.opacity}
                        
                        src="/icons/star.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>

        <div className={emp.footer}>
          <div className={emp.container}>
                      <h3>Add e new employee</h3>
          <div className={emp.form}>
                     <input onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
          <input onChange={(e) => setSalary(e.target.value)} placeholder="Salary"></input>
          <button onClick={() => addEmployee()}>Add</button> 
          </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Employees;
