/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

// import Image from "../components/image"
// import SEO from "../components/seo"
import "../assets/css/main.css"
import "../assets/css/font-awesome.min.css"
// import "../assets/js/jquery.min.js"
// import "../assets/js/browser.min.js"
// import "../assets/js/breakpoints.min.js"
// import "../assets/js/util.js"
// import "../assets/js/main.js"
// import "../assets/js/lineanime.js"


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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        </div>
        <footer id="footer">
        <div class="inner">
        <div class="content">
          <section>
            <h3>Accumsan montes viverra</h3>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
              dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
              faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
              gravida.
            </p>
          </section>
          <section>
            <h4>Sem turpis amet semper</h4>
            <ul class="alt">
              <li><a href="#">WORK LIMITED.</a></li>
              <li>
                <a href="#"
                  >+254 712-345-678 / +254 712-345-678 / +254 712-345-678</a
                >
              </li>
              <li><a href="#">info@work.co.ke</a></li>
              <li>
                <a href="#"
                  >Somwhere Drive Road Opp Chief's Office <br />Nairobi, Kenya.</a
                >
              </li>
            </ul>
          </section>
          <section>
            <h4>Magna sed ipsum</h4>
            <ul class="plain">
              <li>
                <a href="#"><i class="icon fa-twitter">&nbsp;</i>Twitter</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-facebook">&nbsp;</i>Facebook</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-instagram">&nbsp;</i>Instagram</a>
              </li>
              <li>
                <a href="#"><i class="icon fa-github">&nbsp;</i>Github</a>
              </li>
            </ul>
          </section>
        </div>

        <div class="footer-credit copyright">
          
          <p>
            Copyright &copy;
            {/* Script for getting the current year */}
             {new Date().getFullYear()},
            All rights reserved | Site made with
            <i class="icon fa-heart" aria-hidden="true" style={{color: `red`,}}></i>
            by
            {` `}
            <a href="https://instagram.com/joey_lgm/">J03y K1n9.</a
            >
          </p>
        </div>
      </div>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
