import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import profile from '../img/profile.png'
import github from '../img/social/github.svg'
import twitter from '../img/social/twitter.svg'
import medium from '../img/social/medium.svg'
import stackoverflow from '../img/social/stackoverflow.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={profile}
            alt="Logo"
            style={{ borderRadius: '100%' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/projects">
                        Projects
                      </Link>
                    </li>
                    {/*<li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>*/}
                    {/*<li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>*/}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="github" href="https://github.com/Maluen" target="_blank">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/Maluen0" target="_blank">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="medium" href="https://medium.com/@Maluen0" target="_blank">
                  <img
                    src={medium}
                    alt="Medium"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="stackoverflow" href="https://stackoverflow.com/users/1418049/maluen" target="_blank">
                  <img
                    src={stackoverflow}
                    alt="Stackoverflow"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
