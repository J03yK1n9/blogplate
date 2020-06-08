import React, { Component } from 'react'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../assets/css/main.css"
import "../assets/css/font-awesome.min.css"

export default class contact extends Component {
    render() {
        return (
            <Layout>
            <SEO title="contact" />
            
                 {/* Contact */}
    <section id="Contact" class="wrapper">
      <div class="inner">
        <div class="content">
          <header>
            <h2>Contact Us</h2>
          </header>

          <div class="row">
            <div
              class="col-6 col-12-medium"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {/* Form */}
              <h3>Form</h3>
              <form method="post" action="#">
                <div class="row gtr-uniform">
                  <div class="col-6 col-12-xsmall">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value=""
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-6 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value=""
                      placeholder="Email"
                    />
                  </div>
                  {/* Break */}
                  <div class="col-12">
                    <select name="category" id="category">
                      <option value="">- Select -</option>
                      <option value="alpha">Option alpha</option>
                      <option value="beta">Option beta</option>
                      <option value="gamma">Option gamma</option>
                      <option value="delta">Option delta</option>
                      <option value="epsilon">Option epsilon</option>
                      <option value="zeta">Option zeta</option>
                      <option value="eta">Option eta</option>
                      <option value="theta">Option theta</option>
                    </select>
                  </div>
                  {/* Break */}
                  <div class="col-4 col-12-small">
                    <input type="radio" id="radio-alpha" name="radio" checked />
                    <label for="radio-alpha">Low Importance</label>
                  </div>
                  <div class="col-4 col-12-small">
                    <input type="radio" id="radio-beta" name="radio" />
                    <label for="radio-beta">Normal Importance</label>
                  </div>
                  <div class="col-4 col-12-small">
                    <input type="radio" id="radio-gamma" name="radio" />
                    <label for="radio-gamma">High Importance</label>
                  </div>
                  {/* Break */}
                  <div class="col-6 col-12-small">
                    <input
                      type="checkbox"
                      id="checkbox-alpha"
                      name="checkbox"
                    />
                    <label for="checkbox-alpha">Checkbox alpha</label>
                  </div>
                  <div class="col-6 col-12-small">
                    <input
                      type="checkbox"
                      id="checkbox-beta"
                      name="checkbox"
                      checked
                    />
                    <label for="checkbox-beta">Checkbox beta</label>
                  </div>
                  {/* Break */}
                  <div class="col-12">
                    <textarea
                      name="textarea"
                      id="textarea"
                      placeholder="Alpha beta gamma delta"
                      rows="6"
                    ></textarea>
                  </div>
                  {/* Break */}
                  <div class="col-12">
                    <ul class="actions">
                      <li>
                        <input
                          type="submit"
                          value="Submit message"
                          class="primary"
                        />
                      </li>
                      <li><input type="reset" value="Reset" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-6 col-12-medium">
              <div class="row" data-aos="zoom-in">
                {/* Blockquote */}
                <h3>Blockquote</h3>
                <blockquote>
                  Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus ornare
                  mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia
                  sapien lorem accumsan varius montes viverra. Lorem ipsum dolor
                  vestibulum ante ipsum primis in faucibus vestibulum. Blandit
                  adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                  faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc
                  ac gravida.
                </blockquote>
              </div>
              <div class="row">
                {/* <!-- Preformatted Code */}
                <h3>Preformatted</h3>
                <pre><code></code></pre>

                <br />
                <br />
                <hr />
                {/* Icons */}
                <h3>Handles:</h3>
                <ul class="icons">
                  <li>
                    <a href="#" class="icon fa-twitter"
                      ><span class="label">Twitter</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-facebook"
                      ><span class="label">Facebook</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-instagram"
                      ><span class="label">Instagram</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-github"
                      ><span class="label">Github</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-dribbble"
                      ><span class="label">Dribbble</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-tumblr"
                      ><span class="label">Tumblr</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-apple"
                      ><span class="label">Apple</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-windows"
                      ><span class="label">Windows</span></a
                    >
                  </li>
                  <li>
                    <a href="#" class="icon fa-500px"
                      ><span class="label">500px</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
           
            </Layout>
        )
    }
}
