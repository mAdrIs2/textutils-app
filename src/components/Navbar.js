import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function changeColor(event) {
    const color = event.target.value;
    props.changeTheme(color);
  }

  let myStyle={
    color:props.mode === "light" ?"black":"white"
  }
    
  

  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-" + props.mode + " bg-" + props.mode
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check mx-2 my-2">
            <input
              onChange={changeColor}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="white"
              value="white"
              style={{border:"3px solid",borderColor:"lightgray"}}
              defaultChecked
            />
            <label
              style={myStyle}
              className="form-check-label"
              htmlFor="white"
            >
              Light
            </label>
          </div>
          <div className="form-check mx-2 my-2">
            <input
              onChange={changeColor}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="blue"
              value="blue"
              style={{border:"3px solid",borderColor:"blue"}}
            />
            <label
              style={myStyle}
              className="form-check-label"
              htmlFor="blue"
            >
              Blue
            </label>
          </div>
          <div className="form-check mx-2 my-2">
            <input
              onChange={changeColor}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="brown"
              value="brown"
              style={{border:"3px solid",borderColor:"brown"}}
            />
            <label
              style={myStyle}
              className="form-check-label"
              htmlFor="brown"
            >
              Brown
            </label>
          </div>
          <div className="form-check mx-2 my-2">
            <input
              onChange={changeColor}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="black"
              value="black"
              style={{border:"3px solid",borderColor:"black"}}
            />
            <label
              style={myStyle}
              className="form-check-label"
              htmlFor="black"
            >
              Dark
            </label>
          </div>
          <div className="form-check mx-2 my-2">
            
            <label
              style={myStyle}
              className="form-check-label"
              htmlFor="customColor"
            >
              Custom color
            </label>
            <input
              onChange={changeColor}
              className="form-check-input"
              type="color"
              name="flexRadioDefault"
              id="customColor"
              value="#ff0000"
            />
          </div>

          {/* <div className="form-check form-switch me-5">
            <label style={props.mode==="light"?{color:"black"}:{color:"white"}} className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">
             Dark Mode
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div> */}

          {/* <form className="d-flex">

       <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "A navbar",
};
