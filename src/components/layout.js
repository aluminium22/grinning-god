/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/GG1-covert-large.jpg"
import vid from "../images/Grinning-God-logo.mp4"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
 
        }}
          >
              <main style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  fontFamily: 'Roboto, serif',
                  height: '100%'
              }}>{children}</main>

        <footer
                  style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()},
          {` `}
     
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
