import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
            marginBottom: `-100px`,
            zIndex: 6
    }}
  >
    <div
        style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `center`,
                backgroundColor: '#00000096',
        width: `100%`,
                padding: `8px`,
        zIndex: 6
      }}
    >
            <h1 style={{ margin: 0, zIndex: 6, fontSize: 40 }}>
        <Link
          to="/"
          style={{
            fontFamily: 'calluna, serif',
              fontStyle: 'normal',
              fontWeight: '400',
              color: '#af3232',
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
