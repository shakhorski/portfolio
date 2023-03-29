
import { Link } from "react-router-dom";
import main from "./main.module.css";

export function Main() {
  function addClass(e) {
    e.currentTarget.querySelector("h1").classList.add(main.activeH1);
    e.currentTarget.querySelector("div").classList.remove(main.black);
    e.currentTarget.querySelector("div").classList.add(main.activeDiv);
  }

  function removeClass(e) {
    e.currentTarget.querySelector("h1").classList.remove(main.activeH1);
    e.currentTarget.querySelector("div").classList.add(main.black);
    e.currentTarget.querySelector("div").classList.remove(main.activeDiv);
  }
  return (
    <div>
      <div className={main.main} id="projects">
        <div className={main.title}>
          <h1>Project #1</h1>
        </div>

        <div className={main.bg}></div>
        <Link to="/calculator">
          <div
            className={main.content}
            onMouseEnter={addClass}
            onMouseLeave={removeClass}
          >
            <h1>Calculator</h1>

            <img src="/image/calc.png" alt="calculator" width="400px"></img>
            <div className={main.black}>1</div>
          </div>
        </Link>
      </div>
      <div className={main.main}>
        <div className={main.title}>
          <h1>Project #2</h1>
        </div>


          <div className={main.bg}></div>
                  <Link to="/employees">
          <div
            className={main.content}
            onMouseEnter={addClass}
            onMouseLeave={removeClass}
          >
            <h1>Employees</h1>

            <img src="/image/employees.png" alt="employees" width="400px"></img>
            <div className={main.black}>2</div>
          </div>
        </Link>
      </div>
      <div className={main.main} id="projects">
        <div className={main.title}>
          <h1>Project #3</h1>
        </div>

        <div className={main.bg}></div>
        <Link to="/quiz">
          <div
            className={main.content}
            onMouseEnter={addClass}
            onMouseLeave={removeClass}
          >
            <h1>Quiz</h1>

            <img src="/image/quiz.png" alt="quiz" width="400px"></img>
            <div className={main.black}>1</div>
          </div>
        </Link>
      </div>
      <div className={main.main} id="projects">
        <div className={main.title}>
          <h1>Project #4</h1>
        </div>

        <div className={main.bg}></div>
        <Link to="/currency">
          <div
            className={main.content}
            onMouseEnter={addClass}
            onMouseLeave={removeClass}
          >
            <h1>Currency Converter</h1>

            <img src="/image/currency.png" alt="currency" width="400px"></img>
            <div className={main.black}>1</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

