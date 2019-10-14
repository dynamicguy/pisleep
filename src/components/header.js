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
        padding: `.45rem .0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
