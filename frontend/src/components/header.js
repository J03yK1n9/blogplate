import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/css/main.css"
import "../assets/css/font-awesome.min.css"
// import "../assets/js/jquery.min.js"
// import "../assets/js/browser.min.js"
// import "../assets/js/breakpoints.min.js"
// import "../assets/js/util.js"
// import "../assets/js/main.js"
// import "../assets/js/lineanime.js"

const Header = ({ siteTitle }) => (
  <header
  id="header"
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav style={{display: `inline-block`}}>
   
      <ul style={{listStyle: `none`, display: `block`, verticalAlign: `baseline`, textDecorationColor: `gray`, fontFamily: `Comfortaa`}}>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/solutions">Our solutions</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
