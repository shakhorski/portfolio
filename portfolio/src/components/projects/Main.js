import { useState } from "react";
import { Link } from "react-router-dom";
import main from "./main.module.css";

export function Main() {

  function addClass(e) {
    e.currentTarget.querySelector('h1').classList.add(main.activeH1)
    e.currentTarget.querySelector('div').classList.remove(main.black)
    e.currentTarget.querySelector('div').classList.add(main.activeDiv)
  }

  function removeClass(e) {
    e.currentTarget.querySelector('h1').classList.remove(main.activeH1)
    e.currentTarget.querySelector('div').classList.add(main.black)
    e.currentTarget.querySelector('div').classList.remove(main.activeDiv)
  }
  return (
    <div>
      <div className={main.main} id="projects">
        <div className={main.title}>
          <h1>Project #1</h1>
        </div>
        <Link to="/calculator">
          <div className={main.bg}></div>
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

                <Link to="/stopwatch" >
          <div className={main.bg}></div>
          <div
            className={main.content}
            onMouseEnter={addClass}
            onMouseLeave={removeClass}
          >
            <h1>Timer</h1>

            <img src="https://frontendscript.com/wp-content/uploads/2018/08/javascript-simple-countdown-timer.jpg" alt="timer" width="400px"></img>
            <div className={main.black} >2</div>
          </div>
        </Link>    


      </div>



      
    </div>
  );
}
