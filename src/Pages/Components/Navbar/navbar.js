/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
  render() {
    return (
      <div className="Navbar is-transparent">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="http://aavartan.org/images/Aavartan.png" alt="nav" />
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end borderXwidth">
              <a
                className="navbar-item nav-item-tabs  is-size-4 is-size-6-mobile"
                href="./"
              >
                Home
              </a>
              <a
                className="navbar-item nav-item-tabs is-size-4 is-size-6-mobile"
                href="./events"
              >
                Events
              </a>
              <a
                className="navbar-item nav-item-tabs is-size-4 is-size-6-mobile"
                href="./gallery"
              >
                Gallery
              </a>
              <a
                className="navbar-item nav-item-tabs is-size-4 is-size-6-mobile"
                href="./team"
              >
                Team
              </a>

              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary is-pulled-left">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light is-pulled-left">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
