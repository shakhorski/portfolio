import React from "react"
import { Link } from "react-router-dom";
import cssHeader from "./header.module.css";

export function Header() {

  return (
    <header className={cssHeader.header}>
      <div className={cssHeader.top}>
        <div>
        <Link to="/">
                <img src="/logo.png" alt="logo" width="500px" />      
        </Link>

        </div>
        <div className={cssHeader.menu}>
          <div >
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#footer">About</a>
          </div>
          <div>
            <a href="#footer">Contact</a>
          </div>
        </div>
        <div className={cssHeader.social}>
          <div>
            <img src="/icons/github.png" alt="logo" />
          </div>
          <div>
            <img src="/icons/linkedin.png" alt="logo" />
          </div>
          <div>
            <img src="/icons/instagram.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className={cssHeader.container}>
        <div className={cssHeader.text}>
            <h1>Hi, I’m Anton, a Frontend Developer!</h1>
            <p>I am always energetic and eager to learn new skills. I am committed to learning and self-development so that I can consistently achieve better results.</p>
            <button>Get In Touch</button>
        </div>
        <div>
            <img src="/image/ava.jpg" alt="ava"></img>
        </div>
      </div>
    </header>
  );
}
