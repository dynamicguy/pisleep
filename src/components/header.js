import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#d91043`,
      marginBottom: `.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: `70px`,
        padding: `.45rem .0875rem`,
      }}
    >
      <h1 style={{ margin: 0, float: `left` }}>
        <Logo/>
        <Link
          to="/"
          style={{
            color: `white`,
            height: `50px`,
            overflow: `hidden`,
            display: `inline-block`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
